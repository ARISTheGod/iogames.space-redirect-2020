// ==UserScript==
// @name         iogames.space Redirect 2020
// @version      2.1
// @description  Redirects games from iogames.space to thier source websites
// @author       ARISTheGod
// @website      https://github.com/ARISTheGod
// @supportURL   https://twitter.com/arisaris3030
// @match        http://iogames.space/*
// @match        https://iogames.space/*
// @grant        none
// @namespace    https://greasyfork.org/en/scripts/404892
// ==/UserScript==


// RUN AFTER 6s delay
setTimeout(function() {
var iframedatagamestring=document.getElementById("game_iframe_window");[0];
iframedatagamestring && !iframedatagamestring.src.startsWith(location.origin) && location.replace(iframedatagamestring.src);
}, 6000);