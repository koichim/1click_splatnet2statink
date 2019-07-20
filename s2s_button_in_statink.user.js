// ==UserScript==
// @name         s2s_button_in_statink
// @namespace    http://masuda.sppd.ne.jp/misc/splanet2statink
// @version      0.1
// @description run splatnet2statink in local PC from stat.ink
// @author       Koichi Masuda
// @match        https://stat.ink/*
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    var CHECK_INTERVAL = 1000; // msec
    var TAP_BUTTON_ID = "masuda_tap_button_for_splanet2statink";

    function add_tap_buttons() {
        var body_nodes = document.getElementsByTagName('body');
        if (!body_nodes) {
            console.log("failed to get body element");
            return;
        }
        if (body_nodes.length != 1) {
            console.log("body.length="+body_nodes.length);
            return;
        }
        var body_node = body_nodes[0];
        var tap_buttons = document.createElement('div');
        if (!tap_buttons) {
            console.log("failed to create tap_buttons");
            return;
        }
        tap_buttons.id = TAP_BUTTON_ID;
        tap_buttons.style.visibility = "visible";
        tap_buttons.style.width = "90px";
        tap_buttons.style.bottom = "60px";
        tap_buttons.style.right = "20px";
        tap_buttons.style.position = "fixed";
        tap_buttons.style.zIndex = "999";
        tap_buttons.style.fontSize = "60px";
        tap_buttons.style.textAlign = "center";
        tap_buttons.style.cursor = "pointer";
        tap_buttons.style.opacity = "0.6";

        var s2s_button = document.createElement('div');
        if (!s2s_button) {
            console.log("can not create k_button");
            return;
        }
        s2s_button.innerHTML = "s2s";
        s2s_button.style.background = "#66FF66";
        s2s_button.onclick = function(){
            var url = window.location.href;
            var child_win;
            if (url.match(/spl2$/)) {
                child_win = window.open("splatnet2statink:-r", "_blank");
            } else if (url.match(/salmon$/)) {
                child_win = window.open("splatnet2statink:--salmon%20-r", "_blank");
            } else {
                alert("unknown stat.ink url...");
                return;
            }
            var watchClose = setInterval(function() {
                if (child_win.closed) {
                    clearTimeout(watchClose);
                    //Do something here...
                    window.location.reload();
                }
            }, 200);
            //$.get("splatnet2statink:");
            //window.open("splatnet2statink:-r");
/*            GM_xmlhttpRequest({
                method: "POST",
                url: "splatnet2statink:-r",
                onload: function(response) {
                    console.log(response);
                }
            });*/
        };

        clearInterval(interval_id);

        tap_buttons.appendChild(s2s_button);

        body_node.appendChild(tap_buttons);

    }
    var interval_id = setInterval(
        function(){
            if (!document.getElementById(TAP_BUTTON_ID)) {
                add_tap_buttons();
            }
        },
        CHECK_INTERVAL);

})();
