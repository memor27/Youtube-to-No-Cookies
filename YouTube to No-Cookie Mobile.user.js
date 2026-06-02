// ==UserScript==
// @name         YouTube to No-Cookie Mobile
// @namespace    nocookiesforyout
// @version      1.0
// @description  Redirect youtube to no-cookies on mobile
// @author       Klasputnikov
// @match        https://www.youtube.com/watch*
// @match        https://m.youtube.com/watch*
// @match 		 https://youtu.be/watch*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const url = window.location.href;

    const newUrl = url.replace(/youtube\.com/, 'yout-ube.com');

    if (newUrl !== url) {
        window.location.replace(newUrl);
    }
})();
