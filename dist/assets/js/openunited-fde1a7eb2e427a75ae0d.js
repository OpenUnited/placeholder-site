!function(e){function t(t){for(var r,a,l=t[0],s=t[1],c=t[2],d=0,h=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);h.length;)h.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],r=!0,l=1;l<o.length;l++){var s=o[l];0!==n[s]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},n={0:0},i=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([4,1]),o()}([,function(e,t,o){var r=o(2),n=o(3);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={insert:"head",singleton:!1};r(n,i);e.exports=n.locals||{}},,function(e,t,o){},function(e,t,o){"use strict";o.r(t);o(1);class r{constructor(){this.body=document.documentElement,this.toggle=document.querySelector("[data-header-toggle]"),this.headerNavigation=document.querySelector("[data-header-navigation]"),this.logo=document.querySelector("[data-header-logo]")}init(){if(this.toggle&&this.headerNavigation&&this.toggle.addEventListener("click",()=>this.toggleHandle()),this.headerNavigation){this.headerNavigation.querySelectorAll("[data-header-link]").forEach(e=>e.addEventListener("click",t=>this.linkHandle(t,e)))}this.logo&&(setTimeout(()=>this.logo.classList.add("start"),2e3),this.logo.addEventListener("click",e=>this.linkHandle(e,this.logo)))}toggleHandle(){this.toggle.classList.toggle("active"),this.headerNavigation.classList.toggle("active"),this.body.classList.toggle("is-scroll-locked")}linkHandle(e,t){e.preventDefault();const o=t.getAttribute("href"),r=document.querySelector(o).offsetTop;scroll({top:r,behavior:"smooth"}),this.toggle.classList.remove("active"),this.headerNavigation.classList.remove("active"),this.body.classList.remove("is-scroll-locked")}}var n=o(0),i=o.n(n);window.onload=()=>{(new r).init(),setTimeout(()=>{i.a.init()},50)}}]);