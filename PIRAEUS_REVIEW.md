# Piraeus offers review — 2026-10-25

Prepared changes, not a production release. Based on main commit
`71fe1bca5b1b3aa48ddaa783ee011106d00c58e7`. The inspected production deployment
uses `de0e380c5a05604b6ea9016401f95d84241c6c07`; main is five commits ahead.
Review those existing changes before releasing main.

## Changes

- Five revised static pages: home, monthly, daily/fleet, contact, FAQ.
- Shared responsive styling, keyboard navigation, native labelled fields.
- Confirmed offers for five cars, VAT, kilometres, excess, no cash deposit,
  delivery charge and Athens contact hours. Hybrid gearbox left unspecified.
- Removed unsupported reviews, 24/7 service, rapid delivery, universal free
  delivery/collection, automatic booking promises and old fleet prices from
  these five pages. Other legacy pages have not been audited or changed here.
- Contact composer opens a prepared WhatsApp message. The visitor must send
  it there. No fake success message and no backend receipt is claimed.
- Existing GA4 ID retained. Analytics loads only after explicit measurement
  consent. Decline, consent withdrawal and preferences control included.
  Advertising consent remains denied. No personal form values are put in
  analytics events. This change is not a complete privacy/legal review.
- `contact_intent` records consented phone/email clicks or WhatsApp openings.
  It is a secondary signal, not a received enquiry or confirmed booking.

## Validation

- JavaScript syntax check (`node --check`).
- Static page checks: one H1, unique IDs, five-car prices, JSON-LD validity,
  local asset existence, current contact hours and no 24/7 claims.
- Vercel preview built READY. Browser verified monthly offer page, prefilled
  Fiat Panda/monthly enquiry and rejection of equal start/end dates.

## Before release

1. GitHub access resolved: the Connector is now installed for fwtiskoukakis
   and branch creation succeeded. Changes are prepared on a separate review
   branch; no production merge is authorized in this step.
2. Review this new visual presentation and the five pre-existing main commits.
3. Reconcile legacy location/automatic/vehicle/terms pages before routing
   visitors to those pages. The new navigation stays on the five revised pages.
4. Real lead measurement still needs a verified receipt/qualified-lead flow,
   GA4/Ads configuration and campaign goal review. Do not mark contact intent
   as a primary lead merely because the click event exists.
5. Check phone/WhatsApp handling on a real mobile device and small-screen
   rendering. No test enquiry was sent.
6. Keep both new Google Ads campaigns paused until launch review is complete.

Preview contains only these five pages and shared assets. It is not a full
copy of all legacy routes. Privacy links use the existing production URL.
