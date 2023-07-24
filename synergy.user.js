// ==UserScript==
// @name         Synergy LMS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://lms.synergy.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=synergy.ru
// @grant        none
// @downloadURL  https://github.com/darkringfire/user-js/raw/main/synergy.user.js
// ==/UserScript==

(function($) {
    console.log('stating...');
    var c = 0;
    $(".test-answers label").text(function(i, a) {
        c++;
        return c + ") " + a;
    });

    $("a.resourse_blocked").attr("title", function(i, a) {
        return $(this).attr("alt");
    });

    $("form").each(function(i, el){
        el.oncopy = function() {return true};
    })

    $(".order-counter").html("*)&nbsp;");


})(window.jQuery); //})(window.$);