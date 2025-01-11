// ==UserScript==
// @name         My Test Script
// @namespace    http://tampermonkey.net/
// @version      1.0  
// @description  Script de prueba para ver actualizaciones automáticas
// @updateURL    https://raw.githubusercontent.com/Kinotest/Kinotest/main/tamper-test.user.js
// @downloadURL  https://raw.githubusercontent.com/Kinotest/Kinotest/main/tamper-test.user.js
// @match        http://*/*
// @match        https://*/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("Hola, soy la versión 1.0 de My Test Script!");
})();
