(this["webpackJsonp2-15-christmas-lights"]=this["webpackJsonp2-15-christmas-lights"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(3),r=n.n(c),l=(n(10),n(4)),i=n(1);n(11),n(12);function s(e){var t=e.onValue,n=Object(o.useState)(2200),c=Object(i.a)(n,2),r=c[0],l=c[1];return a.a.createElement("div",{className:"container"},a.a.createElement("label",{htmlFor:"slider",className:"label"},"Cambiar cada ",r,"ms"),a.a.createElement("input",{className:"slider",id:"slider",type:"range",min:"200",max:"2200",step:"400",value:r,onChange:function(e){l(e.target.value),t(r)}}))}n(13);function u(e){var t=e.on,n=e.color,o={backgroundColor:n,boxShadow:t?"0px 0px 20px 10px ".concat(n):"unset",opacity:t?1:.5};return a.a.createElement("div",{className:"light",style:o})}var m=function(){var e=Object(o.useState)([{color:"tomato",on:!0},{color:"mediumspringgreen",on:!1},{color:"yellow",on:!0},{color:"blue",on:!1},{color:"purple",on:!0},{color:"orange",on:!1},{color:"deepskyblue",on:!0}]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(2200),m=Object(i.a)(r,2),d=m[0],p=m[1],b=Object(o.useState)(!1),f=Object(i.a)(b,2),h=f[0],g=f[1];return Object(o.useEffect)((function(){h&&setTimeout((function(){var e=n.map((function(e){return Object(l.a)({},e,{on:!e.on})}));c(e)}),d)}),[n,d,h]),a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"lights-container"},n.map((function(e,t){return a.a.createElement(u,{key:t,color:e.color,on:e.on})}))),a.a.createElement(s,{onValue:p}),a.a.createElement("button",{className:"button",style:{backgroundColor:h?"tomato":"mediumseagreen"},onClick:function(){return g(!h)}},h?"Stop":"Start"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.71777e4a.chunk.js.map