# Piraeus release review — 2026-10-25

Review only; production is still the earlier deployment. The current main
revision 71fe1bc has one commit after production revision de0e380. It adds an
unused React project, migration notes, static metadata edits and routing
configuration. This branch continues to serve the static root; it does not
switch to the React app. Exported React sources remain noindex.

The branch rebuilds nine public pages (seven acquisition/information routes
and two legal routes). It consolidates old static entrypoints to these pages.
No new offer, cancellation rule, guaranteed delivery time or airport service
was inferred from old content. Original logo and confirmed business identity
are retained. Sitemap includes seven canonical reviewed routes.

Before production: review privacy/retention practices and rental documents
against actual operations; check mobile layout and WhatsApp handoff; approve
the exact release. Test the deployed redirects and canonical host after release.
Do not enable ads or add funds as part of a website release.
