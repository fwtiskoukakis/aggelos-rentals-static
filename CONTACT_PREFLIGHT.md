# Contact and mobile preflight — 2026-10-25

Prepared changes only; no production release or Google Ads activation.

## Verified in an isolated JavaScript test
- No GA script before consent or after initial rejection.
- Consent loads a single GA tag; withdrawal stops subsequent contact events.
- Vehicle selection is prefilled and invalid date ranges do not navigate.
- Valid submission creates the expected WhatsApp URL, without sending a message.
- Contact events contain channel/rental type, not the dates or delivery text.
- Form choice now preserves monthly/daily attribution on the contact page.

## Mobile changes and limits
- Mobile form text is 16px and navigation/call targets have a minimum 44px height.
- CSS has single-column breakpoints for cards/forms and wrapping legal text.
- These are source checks. Physical iPhone/Safari rendering and actual mobile
  handoff to phone/WhatsApp have not been verified by the assistant.

## Measurement that remains unverified
- Analytics and Search Console connections are complete. The existing
  measurement tag was verified against the intended website stream in
  Analytics Admin. A consented contact_intent test with contact_method phone
  was subsequently observed in the intended GA4 Realtime report.
- Isolated tests prove application behavior. GA4 Realtime additionally confirmed
  receipt of the phone-intent event; this does not prove Google Ads attribution.
- WhatsApp opening/phone clicking is contact intent, not a received qualified
  lead, completed call or confirmed rental. Keep it secondary.
- This static project has no email delivery environment configured. No email
  delivery service, paid subscription, webhook or database was provisioned.
- For actual leads, either a verified server-side request-delivery flow or a
  documented offline qualification process is still needed. Do not pretend
  that GA4 can confirm a message was sent inside WhatsApp.

Before release: review the privacy notice against real record retention and
provider agreements; reconcile remaining legacy pages; verify the final build
on mobile, including WhatsApp handoff, and Google Ads attribution.
