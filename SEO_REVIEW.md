# Piraeus SEO review — 2026-10-25

This is a technical pre-release review, not proof of indexing or a ranking guarantee.

## Findings and changes
- Replaced sitemap entries with the five reviewed, self-canonical Greek pages.
  Removed duplicate/missing URLs, old timestamps and English hreflang entries
  that referred to redirected rather than translated pages.
- Legacy root XML sitemaps redirect to the maintained sitemap; the sitemap
  index and robots declaration use absolute canonical URLs.
- Marked 46 low-value routes noindex, follow using HTTP headers (44 development placeholders and two legal routes subsequently completed as drafts).
  They were not deleted. They can be revised and reintroduced individually.
- Added noindex headers to exported React source, old homepage variants,
  the HTML backup and the error-page route. Noindex is not access control.
- More descriptive Piraeus headings, original logo in social metadata,
  CarRental business address and consistent identity, WebSite/WebPage and
  breadcrumb structured data. No fabricated ratings or reviews were added.
- Updated visible business address and misleading legacy llms.txt offers.
  llms.txt is an information consistency change, not a Google ranking feature.

## Validation and limits
- Validate XML, JSON-LD, unique page IDs/H1/canonicals, original logo asset,
  named redirect parameters and indexability of all sitemap entries.
- Git/Vercel preview must finish READY and core paths/sitemap must return 200.
- Analytics and Search Console connections are complete. Their private
  performance data is intentionally excluded from this public repository.
  Index coverage, manual actions, external links and real-user Core Web Vitals
  remain unverified. No numerical SEO score or Rich Results Test result is claimed.
- Before release, verify rendering on a physical mobile device, contact
  handling, sitewide legacy content and actual lead tracking.
- The legal entity/controller is now user-confirmed. Privacy and basic rental
  terms are drafted. Retention practices, provider agreements, transfer
  arrangements and the customer rental/insurance documents require operational
  review before publication. See LEGAL_REVIEW.md.

## Primary references
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/appearance/structured-data/local-business

## Placeholder pages excluded from indexing
- 2018/08/15/drive-a-car-by-yourself-piraeus/index.html
- 2018/08/15/how-to-drive-a-manual-car/index.html
- 2018/08/15/how-to-rent-a-car/index.html
- author/fotiskoukakis_02pzhbbw/index.html
- auto_park/another-autoparks/index.html
- auto_park/my-cars/index.html
- blog/index.html
- cart-2/index.html
- cart/index.html
- category/car/index.html
- checkout-2/index.html
- checkout/index.html
- gearbox/automatic/index.html
- gearbox/manual/index.html
- home-ελληνικά/index.html
- location/akti-themistokleous-104/index.html
- location/any-location-in-athens/index.html
- location/athens-airport/index.html
- location/index.html
- location/piraeus-port/index.html
- manufacturer/fiat/index.html
- manufacturer/jeep/index.html
- my-account/index.html
- privacy-policy-2/index.html
- product/fiat-panda-2020/index.html
- product/fiat-panda-hybrid2023/index.html
- product/jeep-renegade-2022-automatic-transmission/index.html
- product/jeep-renegade-2022-manual-transmission/index.html
- product/jeep-renegade-automatic-transmission-full-extra-panorama-open-roof-4x4/index.html
- product/jeep-renegade-hybrid-4xe-2023-upland/index.html
- shop-2/index.html
- shop/index.html
- steering/left/index.html
- tag/car/index.html
- terms-and-conditions/index.html
- test-woo/index.html
- thank-page/index.html
- type/car/index.html
- type/city/index.html
- type/suv/index.html
- vehicle/akti-themistokleous-104/index.html
- vehicle/athens-airport/index.html
- vehicle/index.html
- vehicle/piraeus-port/index.html
- vehicle/sw123/index.html
- αθηνα-μηνιαια-ενοικιαση-αυτοκινητου/index.html

## Final legacy-entrypoint reconciliation
- Rebuilt /about/ and /location/piraeus-port/ with the same original branding,
  confirmed offers, consent-controlled measurement and legal identity. The port
  page no longer promises a delivery deadline. Both are in the canonical sitemap
  and linked from the reviewed footers.
- Redirected 51 superseded entrypoints (bare, slash and index.html variants)
  to the relevant reviewed offers, port, FAQ or contact route. Exact matches
  preserve the real daily car page. Old homepage variants redirect home.
- Removed noindex headers from redirected routes and the rebuilt port page.
  The earlier placeholder list above records the initial review, not the final
  response behavior. The two legal pages remain noindex.

## Checklist follow-up — 2026-11-07

- Audited all seven canonical sitemap pages: unique titles/descriptions,
  one H1, sequential heading levels, self-canonicals, JSON-LD parsing,
  image alt/dimensions, local assets, internal paths and fragment targets pass.
- Restored the existing Google verification meta token from the legacy airport
  page to the current homepage. The domain is present in the connected Search
  Console accounts; this does not assert live ownership-verification status.
- Consolidated robots.txt to one standard group. Public CSS/JS can be crawled,
  and redirected legacy routes are no longer blocked from crawler discovery.
  Existing noindex response headers remain in vercel.json where appropriate.
- Converted the Picanto and 208 display images to WebP (410,689 to 59,802 bytes;
  236,154 to 32,522 bytes), updating the three fleet pages and image sitemap.
  Originals remain available for existing external URLs. Other pages unchanged.
- Mobile CSS has viewport, responsive grids, touch targets and reserved image
  dimensions. Real-user Core Web Vitals and a fresh mobile Lighthouse run remain
  unmeasured; no passing CWV or performance score is claimed.

### Backlink strategy

Prioritize relevant, earned local links to the most useful destination:
1. Existing Piraeus/Athens accommodation partners: link their guest transport
   information to /location/piraeus-port/ when port delivery is relevant.
2. Business partners serving monthly customers: link transport recommendations
   to /athens-monthly-car-rentals/.
3. Check the business's owned profiles and legitimate local business listings
   for consistent name, address, phone and canonical website link.
4. Ask partners for editorial links only where useful to their customers; use
   natural brand wording, avoid purchased links, bulk directories and forced
   keyword anchors. Track placement, destination, referral visits and enquiries.
No partner messages were sent and no external placements are claimed.
