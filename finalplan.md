create also a /contact page please. no form. only button, text, faqs, whatsapp, map with location.  the map in homepage as well somewhere



https://www.google.com/maps/place/AGGELOS+Rent+A+Car+Piraeus+-+Athens/@37.9283354,23.6399306,17.5z/data=!4m6!3m5!1s0x14a1b90211c5b3cb:0x682b232f39c03a5c!8m2!3d37.9281615!4d23.6417043!16s%2Fg%2F11y24k0hqb?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D

and the fllowing redirect please 

{
  "redirects": [
    { "source": "/piraeus-port-car-rental", "destination": "/", "permanent": true },
    { "source": "/sitemap", "destination": "/", "permanent": true },

    { "source": "/automatic-car-rental-piraeus", "destination": "/", "permanent": true },
    { "source": "/piraeus-car-rental-prices", "destination": "/", "permanent": true },

    { "source": "/vehicle/mercedes-a-class", "destination": "/", "permanent": true },
    { "source": "/en", "destination": "/", "permanent": true },

    { "source": "/type/economy", "destination": "/", "permanent": true },
    { "source": "/type/luxury", "destination": "/", "permanent": true },

    { "source": "/suv-rental-piraeus", "destination": "/", "permanent": true },
    { "source": "/cruise-port-car-rental", "destination": "/", "permanent": true },

    { "source": "/vehicle/jeep-renegade", "destination": "/", "permanent": true },
    { "source": "/vehicle/fiat-panda", "destination": "/", "permanent": true }
  ]
}

Good — this is fixable. You’ve got two related problems showing up in the Site Audit:

your sitemap contains URLs that return 307 (temporary) redirects (and some redirect chains) instead of direct 200 pages, and

some of those redirected targets are 404 — or the sitemap points to the non-preferred host (non-www vs www) causing unnecessary redirects.

Search engines dislike sitemaps full of redirecting URLs (3xx) — you must make every URL in the sitemap return 200 (or be removed). Below is a focused, prioritized playbook with exact commands and code snippets so you can resolve everything end-to-end.

Quick summary (what to do)

Regenerate the sitemap so it lists only canonical URLs that return 200 (use preferred host: pick www or non-www and be consistent).

Remove any redirecting URLs from the sitemap (no 3xx entries).

Fix host canonicalization (force non-www → www or vice versa) and implement permanent redirects (301/308) — not 307.

Replace temporary 307 rules with permanent redirects for all changed URLs.

Test with curl and re-submit the cleaned sitemap to Search Console, Bing, and IndexNow.

Fix internal links and references (CMS menus, plugins, XML sitemap generator settings, canonical tags) so future sitemap exports are correct.

Immediate checks (run these now)

Run these from your machine / server terminal to inspect representative URLs:

# Check exact status and final URL after redirects
curl -I -L -sS https://aggelosrentals.com/piraeus-port-car-rental/ | sed -n '1,4p'

# Show redirect chain (verbose)
curl -I -v https://aggelosrentals.com/piraeus-port-car-rental/ 2>&1 | sed -n '1,40p'

# Test sitemap root
curl -I -L https://www.aggelosrentals.com/sitemap.xml


You must confirm:

sitemap.xml responds 200 and is accessible to crawlers.

Every URL listed in that sitemap returns 200 (no 3xx responses).

How to fix — step by step
1) Decide preferred domain and enforce it

Pick https://www.aggelosrentals.com (recommended since your audit shows many www targets). Force all traffic to that host and to HTTPS using permanent redirects.

If you’re on Vercel (recommended): add or update vercel.json at project root:

{
  "redirects": [
    { "source": "/(.*)", "has": [{"type":"host","value":"aggelosrentals.com"}], "destination": "https://www.aggelosrentals.com/:1", "permanent": true }
  ]
}


Notes:

This rule converts aggelosrentals.com/* → www.aggelosrentals.com/* with a permanent redirect (Vercel returns 308 for permanent).

Keep this simple rule first, then add path-level rules if you need one-off redirects.

If you host on Apache (htaccess):

# Force www + https (301)
RewriteEngine On
RewriteCond %{HTTP_HOST} ^aggelosrentals\.com [NC]
RewriteRule ^(.*)$ https://www.aggelosrentals.com/$1 [L,R=301]


If you host on NGINX:

server {
  listen 80;
  server_name aggelosrentals.com;
  return 301 https://www.aggelosrentals.com$request_uri;
}

2) Replace 307 temporary redirects with permanent redirects for moved pages

Find the specific pages that currently return 307 and create permanent redirects to their canonical pages (or homepage if you intentionally deprecated them).

Example vercel.json redirects for specific pages (add to redirects array):

{ "source": "/piraeus-port-car-rental", "destination": "/", "permanent": true },
{ "source": "/automatic-car-rental-piraeus", "destination": "/", "permanent": true },
{ "source": "/piraeus-car-rental-prices", "destination": "/", "permanent": true },
{ "source": "/vehicle/mercedes-a-class", "destination": "/", "permanent": true }


If a page should exist, avoid redirecting to the homepage — instead redirect to the correct equivalent page. Homepage redirects are last resort; they create soft signals.

3) Regenerate a clean sitemap that only includes 200 URLs

If WordPress: use Yoast SEO, RankMath or Google XML Sitemaps plugin settings to regenerate. Ensure the plugin is configured to:

Use https://www.aggelosrentals.com as site URL (Settings → General or plugin settings).

Exclude non-indexable / redirecting pages.

Flush and regenerate sitemap.

If static or custom generation: run your sitemap generator after enabling canonical host and permanent redirect rules.

Verify sitemap content:

# Download sitemap and check HTTP status for each listed URL
curl -s https://www.aggelosrentals.com/sitemap.xml | xmllint --xpath "//loc/text()" - 2>/dev/null | while read url; do
  echo -n "$url -> "; curl -s -o /dev/null -w "%{http_code}\n" -I -L "$url"
done


All must print 200. If any show 3xx or 404, remove or fix the source of that URL before re-submitting.

4) Update internal links, canonical tags and sitemap references

Search your site for internal links pointing to aggelosrentals.com/... (non-www) or to old paths and update them to canonical www versions.

Check theme headers or plugins to ensure <link rel="canonical"> points to the final (www) URL.

If you use any third-party sitemap references (llms.txt, custom txt files), update those too.

Commands to find occurrences in your repo:

# repo root
grep -R "aggelosrentals.com/" -n .
grep -R "/piraeus-port-car-rental" -n .

5) Fix CMS / plugin configuration that is producing 307s

Many 307s happen because something (plugin or server layer) is issuing a temporary redirect (maybe a maintenance plugin, language switcher, or migration rule). Inspect:

WordPress plugins (caching, redirection, security) — deactivate and re-test redirects.

Any reverse proxy rules (Cloudflare Page Rules set to Temporary redirect?) — ensure rules use permanent redirects.

Hosting control panel automatic redirect settings.

6) Resubmit sitemap & notify search engines

In Google Search Console: index → Sitemaps → submit https://www.aggelosrentals.com/sitemap.xml.

In Bing Webmaster: submit sitemap and/or use IndexNow (see step below).

Use IndexNow to quickly tell Bing/Yandex about sitemap changes:

Example IndexNow submission (replace KEY and URL):

curl -X POST "https://api.indexnow.org/indexnow" \
 -H "Content-Type: application/json" \
 -d '{"host":"www.aggelosrentals.com","key":"<YOUR_INDEXNOW_KEY>","urlList":["https://www.aggelosrentals.com/sitemap.xml"]}'


(If you don't have an IndexNow key, follow Bing docs to create one.)

Also run a new crawl in Ahrefs / Screaming Frog after fixes to confirm the 3xxs disappear.

7) Verify with curl after changes (example tests)
# final check for a previously problematic URL
curl -I -L https://aggelosrentals.com/piraeus-port-car-rental/   # should show final 301/308 -> https://www... and then 200 if page exists
curl -I https://www.aggelosrentals.com/sitemap.xml             # expect 200

8) Bulk redirect strategy (if you have many deprecated pages)

If you have many old slow-moving product pages, create a single table of redirects and apply via Vercel vercel.json or via your redirect manager plugin.

CSV example (for internal use):

source,destination,type
/piraeus-port-car-rental,/,301
/automatic-car-rental-piraeus,/,301
/vehicle/jeep-renegade,/,301
...


Then convert to vercel.json programmatically (or use a plugin on WP like Redirection to import CSV).

Extra SEO hygiene (musts)

Sitemap entries must be canonical (no duplicates, no redirects).

Robots.txt should reference the sitemap: Sitemap: https://www.aggelosrentals.com/sitemap.xml.

Canonical <link> and <link rel="alternate hreflang"> (if used) must point to the canonical host.

Avoid mass homepage redirects unless pages are truly removed—prefer to map to relevant category/product pages to avoid poor UX for users and search engines.

Troubleshooting checklist (if something still shows 307 in audit)

Did you clear CDN caches and Vercel cache? Purge caches and re-check.

Are there multiple redirect layers (Cloudflare → Vercel → app)? Identify the first redirect source with curl -I -v.

Is the sitemap generator plugin still using the non-www site URL in options? Update WordPress siteurl/home settings.

Are any serverless functions returning 307 explicitly? Search codebase for 307 or temporary_redirect.

Example timeline of actions (recommended order)

Deploy host canonicalization rule (Vercel/NGINX/htaccess) to enforce www permanently.

Audit sitemap: remove redirecting URLs, regenerate sitemap.

Configure individual permanent redirects for deprecated pages (vercel.json or redirection plugin).

Purge CDN caches.

Re-submit sitemap to GSC/Bing and press “Request Indexing” for key pages.

Run Ahrefs / Screaming Frog re-crawl and confirm the “3XX redirect in sitemap” issue is resolved.

Aggelosrentals — Redirects, server configs, and CSV (ready-to-deploy)

This document contains:

vercel.json ready-to-deploy redirects (canonicalization + per-path permanent redirects)

.htaccess rules for Apache (www + per-path 301s)

nginx server block snippets (www + per-path 301s)

redirects.csv for Redirection plugin / import (source,destination,code)

Quick deployment & verification checklist

1) vercel.json (drop into project root)
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{ "type": "host", "value": "aggelosrentals.com" }],
      "destination": "https://www.aggelosrentals.com/:1",
      "permanent": true
    },


    { "source": "/piraeus-port-car-rental(.*)", "destination": "/", "permanent": true },
    { "source": "/sitemap(.*)", "destination": "/", "permanent": true },
    { "source": "/automatic-car-rental-piraeus(.*)", "destination": "/", "permanent": true },
    { "source": "/piraeus-car-rental-prices(.*)", "destination": "/", "permanent": true },


    { "source": "/vehicle/mercedes-a-class(.*)", "destination": "/", "permanent": true },
    { "source": "/en(.*)", "destination": "/", "permanent": true },


    { "source": "/type/economy(.*)", "destination": "/", "permanent": true },
    { "source": "/type/luxury(.*)", "destination": "/", "permanent": true },


    { "source": "/suv-rental-piraeus(.*)", "destination": "/", "permanent": true },
    { "source": "/cruise-port-car-rental(.*)", "destination": "/", "permanent": true },


    { "source": "/vehicle/jeep-renegade(.*)", "destination": "/", "permanent": true },
    { "source": "/vehicle/fiat-panda(.*)", "destination": "/", "permanent": true },


    { "source": "/about(.*)", "destination": "/about/", "permanent": true },
    { "source": "/athens-airport-to-piraeus(.*)", "destination": "/", "permanent": true },
    { "source": "/faq(.*)", "destination": "/faq/", "permanent": true },
    { "source": "/terms-and-conditions(.*)", "destination": "/terms-and-conditions/", "permanent": true },


    { "source": "/type/city(.*)", "destination": "/", "permanent": true },
    { "source": "/shop(.*)", "destination": "/", "permanent": true },


    { "source": "/product-category/rental/car/jeep(.*)", "destination": "/", "permanent": true },
    { "source": "/location/akti-themistokleous-104(.*)", "destination": "/", "permanent": true },
    { "source": "/product-category/rental(.*)", "destination": "/", "permanent": true },


    { "source": "/tag/car(.*)", "destination": "/", "permanent": true },
    { "source": "/type/car(.*)", "destination": "/", "permanent": true },
    { "source": "/blog(.*)", "destination": "/blog/", "permanent": true },


    { "source": "/location/athens-airport(.*)", "destination": "/", "permanent": true },
    { "source": "/manufacturer/jeep(.*)", "destination": "/", "permanent": true },
    { "source": "/vehicle(.*)", "destination": "/vehicle/", "permanent": true },


    { "source": "/type/suv(.*)", "destination": "/", "permanent": true },
    { "source": "/location/piraeus-port(.*)", "destination": "/", "permanent": true },
    { "source": "/vehicle/athens-airport(.*)", "destination": "/", "permanent": true },


    { "source": "/product-category/rental/car(.*)", "destination": "/", "permanent": true },
    { "source": "/category/car(.*)", "destination": "/", "permanent": true },
    { "source": "/location(.*)", "destination": "/location/", "permanent": true },


    { "source": "/product-category/rental/car/fiat(.*)", "destination": "/", "permanent": true },
    { "source": "/athens-monthly-car-rentals(.*)", "destination": "/", "permanent": true },


    { "source": "/gearbox/manual(.*)", "destination": "/", "permanent": true },
    { "source": "/gearbox/automatic(.*)", "destination": "/", "permanent": true },


    { "source": "/privacy-policy-2(.*)", "destination": "/privacy-policy/", "permanent": true },
    { "source": "/steering/left(.*)", "destination": "/", "permanent": true },
    { "source": "/manufacturer/fiat(.*)", "destination": "/", "permanent": true },


    { "source": "/vehicle/piraeus-port(.*)", "destination": "/", "permanent": true },
    { "source": "/blog/.+2025(.*)", "destination": "/blog/", "permanent": true },


    { "source": "/contact(.*)", "destination": "/contact/", "permanent": true },
    { "source": "/llms.txt(.*)", "destination": "/llms.txt", "permanent": true },


    { "source": "/piraeus-car-rental-prices(.*)", "destination": "/", "permanent": true }
  ]
}

Notes: Vercel's permanent: true returns a 308; this is acceptable and treated by search engines as permanent. I used pattern (...)(.*) to capture optional trailing segments and attempts to match both slash/no-slash variants.

2) .htaccess (Apache - place in site root)
# Force www + HTTPS (301)
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.aggelosrentals.com/$1 [L,R=301]


# Individual permanent redirects (examples)
Redirect 301 /piraeus-port-car-rental/ https://www.aggelosrentals.com/
Redirect 301 /automatic-car-rental-piraeus/ https://www.aggelosrentals.com/
Redirect 301 /piraeus-car-rental-prices/ https://www.aggelosrentals.com/
Redirect 301 /vehicle/mercedes-a-class/ https://www.aggelosrentals.com/
Redirect 301 /en/ https://www.aggelosrentals.com/
Redirect 301 /type/economy/ https://www.aggelosrentals.com/
Redirect 301 /type/luxury/ https://www.aggelosrentals.com/
Redirect 301 /suv-rental-piraeus/ https://www.aggelosrentals.com/
Redirect 301 /cruise-port-car-rental/ https://www.aggelosrentals.com/
Redirect 301 /vehicle/jeep-renegade/ https://www.aggelosrentals.com/
Redirect 301 /vehicle/fiat-panda/ https://www.aggelosrentals.com/


# Add additional Redirect 301 lines for the rest of the list as needed (copy/paste)

Tip: If you have many redirects, prefer using a redirect map file or host-level redirects to keep .htaccess fast.

3) nginx snippets (add to server blocks)

Redirect non-www to www (server block):

server {
  listen 80;
  server_name aggelosrentals.com;
  return 301 https://www.aggelosrentals.com$request_uri;
}


server {
  listen 443 ssl;
  server_name www.aggelosrentals.com;
  # ssl certs, root, etc.


  # Example per-path redirects inside main server block
  location = /piraeus-port-car-rental/ { return 301 https://www.aggelosrentals.com/; }
  location = /automatic-car-rental-piraeus/ { return 301 https://www.aggelosrentals.com/; }
  location = /piraeus-car-rental-prices/ { return 301 https://www.aggelosrentals.com/; }
  # Add other location = rules as needed
}

For many redirects, use a map or rewrite with an external file to keep config readable.

4) redirects.csv (for Redirection plugin import / spreadsheet)
source,destination,code
/piraeus-port-car-rental/,/,301
/automatic-car-rental-piraeus/,/,301
/piraeus-car-rental-prices/,/,301
/vehicle/mercedes-a-class/,/,301
/en/,/,301
/type/economy/,/,301
/type/luxury/,/,301
/suv-rental-piraeus/,/,301
/cruise-port-car-rental/,/,301
/vehicle/jeep-renegade/,/,301
/vehicle/fiat-panda/,/,301
/about/,/about/,301
/athens-airport-to-piraeus/,/,301
/faq/,/faq/,301
/terms-and-conditions/,/terms-and-conditions/,301
/type/city/,/,301
/shop/,/,301
/product-category/rental/car/jeep/,/,301
/location/akti-themistokleous-104/,/,301
/product-category/rental/,/,301
/tag/car/,/,301
/type/car/,/,301
/blog/,/blog/,301
/location/athens-airport/,/,301
/manufacturer/jeep/,/,301
/vehicle/,/vehicle/,301
/type/suv/,/,301
/location/piraeus-port/,/,301
/vehicle/athens-airport/,/,301
/product-category/rental/car/,/,301
/category/car/,/,301
/location/,/location/,301
/product-category/rental/car/fiat/,/,301
/athens-monthly-car-rentals/,/,301
/gearbox/manual/,/,301
/gearbox/automatic/,/,301
/privacy-policy-2/,/privacy-policy/,301
/steering/left/,/,301
/manufacturer/fiat/,/,301
/vehicle/piraeus-port/,/,301
/blog/any-blog-2025/,/blog/,301
/contact/,/contact/,301
/llms.txt,/llms.txt,301
/piraeus-car-rental-prices/,/,301

Adjust specific destination targets if you prefer category pages instead of homepage.

5) Quick deployment & verification checklist

Backup current configs (vercel.json, .htaccess, nginx).

Deploy canonicalization rule first (non-www → www) so host normalization is consistent.

Deploy redirect file (vercel.json or server configs) and purge CDN/cache.

Regenerate sitemap after redirects are in place; ensure sitemap lists canonical www URLs only.

Run the verification curl script (example below) and confirm 200s for sitemap URLs.

# test sitemap and each URL
curl -I -L https://www.aggelosrentals.com/sitemap.xml
# spot-check a few urls
curl -I -L https://aggelosrentals.com/piraeus-port-car-rental/
curl -I -L https://www.aggelosrentals.com/vehicle/fiat-panda/

Submit sitemap to GSC and Bing, use IndexNow to push critical changes.

Re-run Ahrefs / Screaming Frog to ensure "3XX in sitemap" errors are resolved.

If you want, I can:

Produce a single downloadable vercel.json file for you to paste (I can also embed it into a ZIP).

Generate a full .htaccess with every single redirect expanded (instead of examples).

Produce a cleaned sitemap.xml sample using the canonical www host with only 200 URLs.

Tell me which of the above you want as a downloadable file and I will create it here.

End of document.

Done — I created a document titled "Aggelosrentals Redirects And Configs" that contains:

a ready-to-deploy vercel.json with canonicalization + per-path permanent redirects,

.htaccess and nginx snippets,

a redirects.csv you can import,

and a deployment/verification checklist.

{
"redirects": [
{
"source": "/(.*)",
"has": [{ "type": "host", "value": "aggelosrentals.com" }],
"destination": "https://www.aggelosrentals.com/:1",
"permanent": true
},


{ "source": "/piraeus-port-car-rental(.*)", "destination": "/", "permanent": true },
{ "source": "/sitemap(.*)", "destination": "/", "permanent": true },
{ "source": "/automatic-car-rental-piraeus(.*)", "destination": "/", "permanent": true },
{ "source": "/piraeus-car-rental-prices(.*)", "destination": "/", "permanent": true },


{ "source": "/vehicle/mercedes-a-class(.*)", "destination": "/", "permanent": true },
{ "source": "/en(.*)", "destination": "/", "permanent": true },


{ "source": "/type/economy(.*)", "destination": "/", "permanent": true },
{ "source": "/type/luxury(.*)", "destination": "/", "permanent": true },


{ "source": "/suv-rental-piraeus(.*)", "destination": "/", "permanent": true },
{ "source": "/cruise-port-car-rental(.*)", "destination": "/", "permanent": true },


{ "source": "/vehicle/jeep-renegade(.*)", "destination": "/", "permanent": true },
{ "source": "/vehicle/fiat-panda(.*)", "destination": "/", "permanent": true },


{ "source": "/about(.*)", "destination": "/about/", "permanent": true },
{ "source": "/athens-airport-to-piraeus(.*)", "destination": "/", "permanent": true },
{ "source": "/faq(.*)", "destination": "/faq/", "permanent": true },
{ "source": "/terms-and-conditions(.*)", "destination": "/terms-and-conditions/", "permanent": true },


{ "source": "/type/city(.*)", "destination": "/", "permanent": true },
{ "source": "/shop(.*)", "destination": "/", "permanent": true },


{ "source": "/product-category/rental/car/jeep(.*)", "destination": "/", "permanent": true },
{ "source": "/location/akti-themistokleous-104(.*)", "destination": "/", "permanent": true },
{ "source": "/product-category/rental(.*)", "destination": "/", "permanent": true },


{ "source": "/tag/car(.*)", "destination": "/", "permanent": true },
{ "source": "/type/car(.*)", "destination": "/", "permanent": true },
{ "source": "/blog(.*)", "destination": "/blog/", "permanent": true },


{ "source": "/location/athens-airport(.*)", "destination": "/", "permanent": true },
{ "source": "/manufacturer/jeep(.*)", "destination": "/", "permanent": true },
{ "source": "/vehicle(.*)", "destination": "/vehicle/", "permanent": true },


{ "source": "/type/suv(.*)", "destination": "/", "permanent": true },
{ "source": "/location/piraeus-port(.*)", "destination": "/", "permanent": true },
{ "source": "/vehicle/athens-airport(.*)", "destination": "/", "permanent": true },


{ "source": "/product-category/rental/car(.*)", "destination": "/", "permanent": true },
{ "source": "/category/car(.*)", "destination": "/", "permanent": true },
{ "source": "/location(.*)", "destination": "/location/", "permanent": true },


{ "source": "/product-category/rental/car/fiat(.*)", "destination": "/", "permanent": true },
{ "source": "/athens-monthly-car-rentals(.*)", "destination": "/", "permanent": true },


{ "source": "/gearbox/manual(.*)", "destination": "/", "permanent": true },
{ "source": "/gearbox/automatic(.*)", "destination": "/", "permanent": true },


{ "source": "/privacy-policy-2(.*)", "destination": "/privacy-policy/", "permanent": true },
{ "source": "/steering/left(.*)", "destination": "/", "permanent": true },
{ "source": "/manufacturer/fiat(.*)", "destination": "/", "permanent": true },


{ "source": "/vehicle/piraeus-port(.*)", "destination": "/", "permanent": true },
{ "source": "/blog/.+2025(.*)", "destination": "/blog/", "permanent": true },


{ "source": "/contact(.*)", "destination": "/contact/", "permanent": true },
{ "source": "/llms.txt(.*)", "destination": "/llms.txt", "permanent": true },


{ "source": "/piraeus-car-rental-prices(.*)", "destination": "/", "permanent": true }
]
}# Force www + HTTPS (301)
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.aggelosrentals.com/$1 [L,R=301]


# Individual permanent redirects (examples)
Redirect 301 /piraeus-port-car-rental/ https://www.aggelosrentals.com/
Redirect 301 /automatic-car-rental-piraeus/ https://www.aggelosrentals.com/
Redirect 301 /piraeus-car-rental-prices/ https://www.aggelosrentals.com/
Redirect 301 /vehicle/mercedes-a-class/ https://www.aggelosrentals.com/
Redirect 301 /en/ https://www.aggelosrentals.com/
Redirect 301 /type/economy/ https://www.aggelosrentals.com/
Redirect 301 /type/luxury/ https://www.aggelosrentals.com/
Redirect 301 /suv-rental-piraeus/ https://www.aggelosrentals.com/
Redirect 301 /cruise-port-car-rental/ https://www.aggelosrentals.com/
Redirect 301 /vehicle/jeep-renegade/ https://www.aggelosrentals.com/
Redirect 301 /vehicle/fiat-panda/ https://www.aggelosrentals.com/


# Add additional Redirect 301 lines for the rest of the list as needed (copy/paste)

server {
listen 80;
server_name aggelosrentals.com;
return 301 https://www.aggelosrentals.com$request_uri;
}


server {
listen 443 ssl;
server_name www.aggelosrentals.com;
# ssl certs, root, etc.


# Example per-path redirects inside main server block
location = /piraeus-port-car-rental/ { return 301 https://www.aggelosrentals.com/; }
location = /automatic-car-rental-piraeus/ { return 301 https://www.aggelosrentals.com/; }
location = /piraeus-car-rental-prices/ { return 301 https://www.aggelosrentals.com/; }
# Add other location = rules as needed
}source,destination,code
/piraeus-port-car-rental/,/,301
/automatic-car-rental-piraeus/,/,301
/piraeus-car-rental-prices/,/,301
/vehicle/mercedes-a-class/,/,301
/en/,/,301
/type/economy/,/,301
/type/luxury/,/,301
/suv-rental-piraeus/,/,301
/cruise-port-car-rental/,/,301
/vehicle/jeep-renegade/,/,301
/vehicle/fiat-panda/,/,301
/about/,/about/,301
/athens-airport-to-piraeus/,/,301
/faq/,/faq/,301
/terms-and-conditions/,/terms-and-conditions/,301
/type/city/,/,301
/shop/,/,301
/product-category/rental/car/jeep/,/,301
/location/akti-themistokleous-104/,/,301
/product-category/rental/,/,301
/tag/car/,/,301
/type/car/,/,301
/blog/,/blog/,301
/location/athens-airport/,/,301
/manufacturer/jeep/,/,301
/vehicle/,/vehicle/,301
/type/suv/,/,301
/location/piraeus-port/,/,301
/vehicle/athens-airport/,/,301
/product-category/rental/car/,/,301
/category/car/,/,301
/location/,/location/,301
/product-category/rental/car/fiat/,/,301
/athens-monthly-car-rentals/,/,301
/gearbox/manual/,/,301
/gearbox/automatic/,/,301
/privacy-policy-2/,/privacy-policy/,301
/steering/left/,/,301
/manufacturer/fiat/,/,301
/vehicle/piraeus-port/,/,301
/blog/any-blog-2025/,/blog/,301
/contact/,/contact/,301
/llms.txt,/llms.txt,301
/piraeus-car-rental-prices/,/,301
