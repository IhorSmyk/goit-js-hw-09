const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e=null;t.start.addEventListener("click",(function(){e=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.stop.removeAttribute("disabled"),t.start.setAttribute("disabled",!0)})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",!0)})),t.stop.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.344b5620.js.map