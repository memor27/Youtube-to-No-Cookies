// ==UserScript==
// @name         YouTube to No-Cookie Mobile
// @namespace    nocookiesforyout
// @version      0.2
// @description  Redirect youtube to no-cookies on mobile
// @author       Klasputnikov
// @match        *://*.youtube.com/*
// @grant        none
// @license      GNU GPLv3 
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('click', function(event) {
        const anchor = event.target.closest('a');
        if (!anchor) return;

        const href = anchor.href;

        if (href && (href.includes('youtube.com/watch') || href.includes('youtube.com/shorts'))) {
            
            event.preventDefault();
            event.stopImmediatePropagation();

            const newUrl = href.replace(/(m\.)?youtube\.com/, 'yout-ube.com');

            window.open(newUrl, '_blank');
        }
    }, true);
})();
