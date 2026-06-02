// ==UserScript==
// @name         YouTube to No-Cookie Redirect
// @namespace    nocookiesforyout
// @version      0.0.3
// @description  Open youtube videos in newtab and redirect them to No-Cookies in order to not have ADS nor playback problems
// @author       Klasputnikov
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @match        https://youtu.be/*
// @icon         https://www.youtube.com/favicon.ico
// @grant        GM_openInTab
// @run-at       document-start
// @license      GNU GPLv3 
// ==/UserScript==

(function () {
    'use strict';

    const YT_ORIGIN = 'https://www.youtube.com';

    if (window.location.pathname.startsWith('/watch')) {
        const redirected = window.location.href.replace('youtube.com', 'yout-ube.com');
        if (redirected !== window.location.href) window.location.replace(redirected);
        return;
    }

    const NAV_PATHS = ['/', '/feed/', '/results', '/@', '/channel/', '/c/'];

    function isNavPage() {
        const p = window.location.pathname;
        return NAV_PATHS.some(prefix => p === prefix || p.startsWith(prefix));
    }

    function isVideoHref(href) {
        return !!href && href.includes('/watch?v=');
    }

    function openVideo(href) {
        let url = href.startsWith('http') ? href : YT_ORIGIN + href;
        url = url.replace('youtube.com', 'yout-ube.com');
        GM_openInTab(url, { active: true, insert: true });
    }

    document.addEventListener('click', function (e) {
        if (!isNavPage()) return;
        if (e.ctrlKey || e.shiftKey || e.metaKey || e.altKey) return;

        const anchor = e.target.closest('a');
        if (!anchor) return;

        const href = anchor.getAttribute('href');
        if (!isVideoHref(href)) return;

        e.preventDefault();
        e.stopPropagation();
        openVideo(href);
    }, true);

})();
