(function () {
  'use strict';
  // Consented navigation and contact intent only; clicks are never confirmed leads.
  var measurementId = 'G-KDKQD655KK';
  var loaded = false;
  var consent = null;
  var panel = document.getElementById('cookie-panel');
  var english = document.documentElement.lang === 'en';
  var vehicleNames = ['Fiat Panda', 'Fiat Panda Hybrid', 'Kia Picanto', 'Peugeot 208',
    'Mitsubishi Space Star', 'Citroën C3 · 2026', 'MG ZS · 2026', 'Citroën C3', 'MG3 · 2026'];
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
    var enquiry = document.getElementById('enquiry-form');
    var rentalField = enquiry && enquiry.elements.namedItem('rental');
    var selectedType = rentalField && rentalField.value;
    window.gtag('event', 'contact_intent', {
      contact_method: method,
      rental_type: selectedType === 'monthly' || selectedType === 'daily' ? selectedType :
        location.pathname.indexOf('monthly') >= 0 ? 'monthly' :
          location.pathname.indexOf('product-category') >= 0 ? 'daily' : 'unspecified'
    });
  }
  function trackLink(event) {
    if (event.type === 'auxclick' && event.button !== 1) return;
    var link = event.target.closest('a[href]');
    if (!link) return;
    var method = link.protocol === 'tel:' ? 'phone' :
      link.protocol === 'mailto:' ? 'email' :
        link.hostname === 'wa.me' ? 'whatsapp' : null;
    if (method) track(method);
    if (!consent || !/^https?:$|^tel:$|^mailto:$/.test(link.protocol)) return;
    var internal = link.origin === location.origin;
    var maps = link.hostname === 'www.google.com' && link.pathname.indexOf('/maps') === 0;
    var language = link.getAttribute('hreflang');
    var card = link.closest('.offer-card');
    var heading = card && card.querySelector('h3');
    var model = heading ? heading.textContent.trim() : '';
    var samePage = internal && link.pathname === location.pathname && !!link.hash;
    // Never send message contents, form values, query strings, phone numbers or emails.
    window.gtag('event', 'site_link_click', {
      link_type: method || (maps ? 'maps' : language ? 'language' :
        card ? 'vehicle_enquiry' : samePage ? 'anchor' : internal ? 'navigation' : 'external'),
      link_destination: method || (internal ? link.pathname : link.hostname),
      link_position: link.closest('header') ? 'header' : link.closest('footer') ? 'footer' : 'content',
      page_language: english ? 'en' : 'el',
      vehicle_model: vehicleNames.indexOf(model) >= 0 ? model : 'unspecified'
    });
  }
  document.addEventListener('click', trackLink);
  document.addEventListener('auxclick', trackLink);
  var form = document.getElementById('enquiry-form');
  if (!form) return;
  var submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) submitButton.disabled = false;
  var params = new URLSearchParams(location.search);
  ['vehicle', 'rental'].forEach(function (name) {
    var input = form.elements.namedItem(name);
    var value = params.get(name);
    if (value && Array.from(input.options).some(function (option) { return option.value === value; })) input.value = value;
  });
  var start = form.elements.namedItem('start');
  var end = form.elements.namedItem('end');
  var dateParts = new Intl.DateTimeFormat('en', { timeZone: 'Europe/Athens', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  function part(type) { return dateParts.find(function (item) { return item.type === type; }).value; }
  var today = part('year') + '-' + part('month') + '-' + part('day');
  function nextDay(value) {
    var date = new Date(value + 'T12:00:00Z');
    date.setUTCDate(date.getUTCDate() + 1);
    return date.toISOString().slice(0, 10);
  }
  start.min = today;
  end.min = nextDay(today);
  start.addEventListener('change', function () { end.min = nextDay(start.value || today); });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var error = document.getElementById('enquiry-error');
    error.textContent = '';
    if (!form.reportValidity()) return;
    if (start.value < today || end.value <= start.value) {
      error.textContent = english ? 'Choose a valid start date and a return date after the start date.' : 'Επιλέξτε έγκυρη έναρξη και επιστροφή μετά την έναρξη.';
      end.focus();
      return;
    }
    var monthly = form.elements.namedItem('rental').value === 'monthly';
    var type = monthly ? 'Μηνιαία' : 'Ημερήσια';
    var vehicle = form.elements.namedItem('vehicle');
    var text = english ? ['Hello! I would like a car rental quote in Piraeus.',
      'Rental type: ' + (monthly ? 'Monthly' : 'Daily'), 'Vehicle: ' + vehicle.options[vehicle.selectedIndex].text,
      'Start date: ' + start.value, 'Return date: ' + end.value,
      'Delivery location: ' + form.elements.namedItem('location').value,
      'Please confirm availability and the total price.'].join('\n') : ['Καλησπέρα! Ενδιαφέρομαι για ενοικίαση στον Πειραιά.',
      'Τύπος: ' + type, 'Αυτοκίνητο: ' + form.elements.namedItem('vehicle').value,
      'Έναρξη: ' + start.value, 'Επιστροφή: ' + end.value,
      'Παράδοση: ' + form.elements.namedItem('location').value,
      'Μπορείτε να επιβεβαιώσετε διαθεσιμότητα και συνολική τιμή;'].join('\n');
    track('whatsapp');
    if (consent) window.gtag('event', 'enquiry_handoff', {
      rental_type: monthly ? 'monthly' : 'daily', page_language: english ? 'en' : 'el'
    });
    // The visitor sends the message in WhatsApp; this is not a received lead.
    location.href = 'https://wa.me/306980151068?text=' + encodeURIComponent(text);
  });
})();
