"""Notify IndexNow about meaningful changes between production deployments."""

import argparse
import json
import os
import re
import subprocess
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

HOST = "www.aggelosrentals.com"
BASE = f"https://{HOST}"
KEY = "8e6b3f2c9a714d50b4e821c67f903ad5"
ICON = re.compile(
    rb"<link\b[^>]*?\brel\s*=\s*[\"']"
    rb"(?:icon|shortcut icon|apple-touch-icon(?:-precomposed)?|mask-icon)[\"'][^>]*>",
    re.I,
)
HEAD_END = re.compile(rb"</head\s*>", re.I)


def git(*args):
    return subprocess.check_output(["git", *args])


def read(revision, path):
    return git("show", f"{revision}:{path}")


def ancestor(first, second):
    result = subprocess.run(["git", "merge-base", "--is-ancestor", first, second])
    if result.returncode > 1:
        result.check_returncode()
    return result.returncode == 0


def sitemap(revision):
    return {
        entry.text
        for entry in ET.fromstring(read(revision, "sitemap.xml")).findall("./{*}url/{*}loc")
        if entry.text and entry.text.startswith(BASE + "/")
    }


def redirects(revision):
    # The production routing table includes host-specific rules and aliases.
    return json.loads(read(revision, "vercel.json")).get("redirects", [])


def route_redirects(rules, url):
    path = urllib.parse.urlsplit(url).path
    variants = {path, path.rstrip("/") or "/", path.rstrip("/") + "/"}
    return [rule for rule in rules if rule["source"] in variants]


def page_path(url):
    path = urllib.parse.unquote(urllib.parse.urlsplit(url).path).lstrip("/")
    if path.endswith(".html"):
        return path
    return (path.rstrip("/") + "/" if path else "") + "index.html"


def page_content(revision, url):
    content = read(revision, page_path(url))
    end = HEAD_END.search(content)
    if end is None:
        return content
    head = ICON.sub(b"", content[:end.start()])
    return re.sub(rb">\s+<", b"><", head).rstrip() + content[end.start():]


def changed_urls(previous, current, retired):
    old, new = sitemap(previous), sitemap(current)
    old_rules, new_rules = redirects(previous), redirects(current)
    selected = (new - old) | {url for url in old - new if retired(url)}
    for url in old & new:
        if route_redirects(old_rules, url) != route_redirects(new_rules, url):
            selected.add(url)
        elif page_content(previous, url) != page_content(current, url):
            selected.add(url)
    return sorted(selected)


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


def retired(url):
    try:
        with urllib.request.build_opener(NoRedirect()).open(url, timeout=20):
            return False
    except urllib.error.HTTPError as error:
        if error.code in {301, 302, 303, 307, 308, 404, 410}:
            return True
        raise


def last_successful_run(current):
    repository = os.environ["GITHUB_REPOSITORY"]
    run_id = os.environ["GITHUB_RUN_ID"]
    endpoint = (
        f"https://api.github.com/repos/{repository}/actions/workflows/indexnow.yml/runs"
        "?event=deployment_status&status=success&per_page=100"
    )
    headers = {
        "Authorization": f"Bearer {os.environ['GH_TOKEN']}",
        "Accept": "application/vnd.github+json",
    }

    def api(url):
        with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=30) as response:
            return json.load(response)

    for run in api(endpoint)["workflow_runs"]:
        if str(run["id"]) == run_id:
            continue
        # A skipped preview job can still produce a successful workflow run.
        jobs = api(run["jobs_url"])["jobs"]
        if not any(job["name"] == "notify" and job["conclusion"] == "success" for job in jobs):
            continue
        previous = run["head_sha"]
        if ancestor(previous, current) or ancestor(current, previous):
            return previous
    raise RuntimeError("No successful production IndexNow run found.")


def submit(urls):
    key_url = f"{BASE}/{KEY}.txt"
    with urllib.request.urlopen(key_url, timeout=30) as response:
        if response.read().decode().strip() != KEY:
            raise RuntimeError("The production IndexNow key does not match.")
    payload = {"host": HOST, "key": KEY, "keyLocation": key_url, "urlList": urls}
    request = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=json.dumps(payload).encode(),
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        if response.status not in {200, 202}:
            raise RuntimeError(f"Unexpected IndexNow response: HTTP {response.status}")
        print(f"IndexNow HTTP {response.status}, URLs: {len(urls)}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run-from", metavar="COMMIT")
    parser.add_argument("--to", default="HEAD")
    args = parser.parse_args()

    current = git("rev-parse", args.to).decode().strip()
    previous = args.dry_run_from or last_successful_run(current)
    if not ancestor(previous, current):
        print("A newer production commit has already been handled.")
        return
    urls = changed_urls(previous, current, retired)
    print(f"Selected {len(urls)} URLs")
    for url in urls:
        print(url)
    if urls and not args.dry_run_from:
        submit(urls)


if __name__ == "__main__":
    main()
