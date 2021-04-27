// ==UserScript==
// @name         Reading Ruler PDF helper
// @namespace    https://github.com/argit2/Reading-Ruler-PDF-helper/
// @version      1.0.0
// @description  Helper for making Reading Ruler chrome extension work for open pdfs. Pressing t toggles between being the ruler working and being able to interact with the pdf.
// @author       VoidCrab
// @match        */*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function initialize() {
        const pdfEmbed = document.querySelector("body > embed[type*=pdf]");
        if (! pdfEmbed) {
            return;
        }
        // the way this code works is adding a div on top of everything so mousemove can toggle
        // press shortcut to toggle the div and let you scroll and interact with the pdf
        const div = document.createElement("div");

        div.style.width = "100%";
        div.style.height = "100%";
        div.style.position = "absolute";
        div.style.left = "0";
        div.style.top = "0";

        document.body.append(div);
        var visible = true;

        const toggle = function(){
            visible = !visible;
            div.style.display = visible ? "block" : "none";
        };
        div.style.display = visible ? "block" : "none";

        window.addEventListener("keypress", function(ev){
            const keyPressed = ev.code.replace('Key', '').toLowerCase();
            if(
                //ev.ctrlKey &&
                keyPressed == "t"
            ){
                toggle();
                ev.preventDefault();
            }
        });
    }

    window.addEventListener("load", initialize);
})();
