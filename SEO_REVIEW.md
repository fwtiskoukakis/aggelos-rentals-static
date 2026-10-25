# Piraeus SEO review — 2026-10-25

This is a technical pre-release review, not proof of indexing or a ranking guarantee.

## Findings and changes
- Replaced sitemap entries with the five reviewed, self-canonical Greek pages.
  Removed duplicate/missing URLs, old timestamps and English hreflang entries
  that referred to redirected rather than translated pages.
- Legacy root XML sitemaps redirect to the maintained sitemap; the sitemap
  index and robots declaration use absolute canonical URLs.
- Marked 46 explicit "page in development" routes noindex, follow using HTTP headers.
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
- Search Console is not connected: Windsor currently exposes Google Ads only.
  Index coverage, actual queries, rankings, manual actions, external links and
  real-user Core Web Vitals have not been inspected. No numerical SEO score
  or Rich Results Test result is claimed.
- Before release, verify rendering on a physical mobile device, contact
  handling, sitewide legacy content and actual lead tracking.
- Privacy policy remains incomplete and noindex. The legal entity/controller,
  retention practices and actual processing must be confirmed before a final
  privacy notice is published. Do not publish invented legal terms.

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
