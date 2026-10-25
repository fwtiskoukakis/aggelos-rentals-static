(function () {
  'use strict';
  // Only contact intent is measured. A click is never reported as generate_lead.
  var measurementId = 'G-KDKQD655KK';
  var loaded = false;
  var consent = null;
  var panel = document.getElementById('cookie-panel');
  function savedChoice() {
    try { return localStorage.getItem('piraeusMeasurementConsent'); }
    catch (_) { return null; }
  }
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  function choose(value) {
    consent = value === 'true';
    try {
      localStorage.setItem('piraeusMeasurementConsent', String(consent));
      // Keep legacy pages from restoring an earlier blanket advertising consent.
      localStorage.removeItem('cookiesAccepted');
    } catch (_) { /* A storage restriction must not stop contact actions. */ }
    window['ga-disable-' + measurementId] = !consent;
    window.gtag('consent', 'update', {
      analytics_storage: consent ? 'granted' : 'denied',
      ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
    });
    if (consent && !loaded) {
      loaded = true;
      window.gtag('js', new Date());
      window.gtag('config', measurementId, { allow_google_signals: false, allow_ad_personalization_signals: false });
      var tag = document.createElement('script');
      tag.async = true;
      tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
      document.head.appendChild(tag);
    }
    if (panel) panel.hidden = true;
  }
  var saved = savedChoice();
  if (saved === 'true' || saved === 'false') choose(saved);
  else if (panel) panel.hidden = false;
  document.querySelectorAll('[data-consent]').forEach(function (button) {
    button.addEventListener('click', function () { choose(button.dataset.consent); });
  });
  var settings = document.getElementById('cookie-settings');
  if (settings && panel) settings.addEventListener('click', function () {
    panel.hidden = false;
    panel.querySelector('button').focus();
  });
  function track(method) {
    if (!consent) return;
    window.gtag('event', 'contact_intent', {
      contact_method: method,
      rental_type: location.pathname.indexOf('monthly') >= 0 ? 'monthly' :
        location.pathname.indexOf('product-category') >= 0 ? 'daily' : 'unspecified'
    });
  }
  document.addEventListener('click', function (event) {
    var link = event.target.closest('a[href]');
    if (!link) return;
    if (link.href.indexOf('tel:') === 0) track('phone');
    else if (link.href.indexOf('mailto:') === 0) track('email');
  });
  var form = document.getElementById('enquiry-form');
  if (!form) return;
  var params = new URLSearchParams(location.search);
  ['vehicle', 'rental'].forEach(function (name) {
    var input = form.elements.namedItem(name);
    var value = params.get(name);
    if (value && Array.from(input.options).some(function (option) { return option.value === value; })) input.value = value;
  });
  var start = form.elements.namedItem('start');
  var end = form.elements.namedItem('end');
  var today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Athens', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  start.min = today;
  end.min = today;
  start.addEventListener('change', function () { end.min = start.value || today; });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var error = document.getElementById('enquiry-error');
    error.textContent = '';
    if (!form.reportValidity()) return;
    if (start.value < today || end.value <= start.value) {
      error.textContent = 'Επιλέξτε έγκυρη έναρξη και επιστροφή μετά την έναρξη.';
      end.focus();
      return;
    }
    var type = form.elements.namedItem('rental').value === 'monthly' ? 'Μηνιαία' : 'Ημερήσια';
    var text = ['Καλησπέρα! Ενδιαφέρομαι για ενοικίαση στον Πειραιά.',
      'Τύπος: ' + type, 'Αυτοκίνητο: ' + form.elements.namedItem('vehicle').value,
      'Έναρξη: ' + start.value, 'Επιστροφή: ' + end.value,
      'Παράδοση: ' + form.elements.namedItem('location').value,
      'Μπορείτε να επιβεβαιώσετε διαθεσιμότητα και συνολική τιμή;'].join('\n');
    track('whatsapp');
    // The visitor sends the message in WhatsApp; this is not a received lead.
    location.href = 'https://wa.me/306980151068?text=' + encodeURIComponent(text);
  });
})();
