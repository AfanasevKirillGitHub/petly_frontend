"use strict";(self.webpackChunkpetly_frontend=self.webpackChunkpetly_frontend||[]).push([[61],{6053:function(t,e,r){r.d(e,{_VR:function(){return o}});var n=r(9983);function o(t){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M13.8,13.8 L18,18 L13.8,13.8 Z M10.5,15 C12.9852814,15 15,12.9852814 15,10.5 C15,8.01471863 12.9852814,6 10.5,6 C8.01471863,6 6,8.01471863 6,10.5 C6,12.9852814 8.01471863,15 10.5,15 Z"}}]})(t)}},9983:function(t,e,r){r.d(e,{w_:function(){return u}});var n=r(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},c=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r};function l(t){return t&&t.map((function(t,e){return n.createElement(t.tag,a({key:e},t.attr),l(t.child))}))}function u(t){return function(e){return n.createElement(s,a({attr:a({},t.attr)},e),l(t.child))}}function s(t){var e=function(e){var r,o=t.attr,i=t.size,l=t.title,u=c(t,["attr","size","title"]),s=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:r,style:a(a({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),t.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},3904:function(t,e,r){function n(t,e,r){var n,o,i;void 0===e&&(e=50),void 0===r&&(r={});var a=null!=(n=r.isImmediate)&&n,c=null!=(o=r.callback)&&o,l=r.maxWait,u=Date.now(),s=[];function f(){if(void 0!==l){var t=Date.now()-u;if(t+e>=l)return l-t}return e}var v=function(){var e=[].slice.call(arguments),r=this;return new Promise((function(n,o){var l=a&&void 0===i;if(void 0!==i&&clearTimeout(i),i=setTimeout((function(){if(i=void 0,u=Date.now(),!a){var n=t.apply(r,e);c&&c(n),s.forEach((function(t){return(0,t.resolve)(n)})),s=[]}}),f()),l){var v=t.apply(r,e);return c&&c(v),n(v)}s.push({resolve:n,reject:o})}))};return v.cancel=function(t){void 0!==i&&clearTimeout(i),s.forEach((function(e){return(0,e.reject)(t)})),s=[]},v}r.d(e,{D:function(){return n}})}}]);
//# sourceMappingURL=61.4055edcc.chunk.js.map