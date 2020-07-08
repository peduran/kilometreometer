module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s="QfWi")}({BQ5G:function(t,n,e){var r,o,u,i=(r={km:6371,mile:3960,meter:6371e3,nmi:3440},o=function(t){return t*Math.PI/180},u=function(t,n){switch(t){case"[lat,lon]":return{latitude:n[0],longitude:n[1]};case"[lon,lat]":return{latitude:n[1],longitude:n[0]};case"{lon,lat}":return{latitude:n.lat,longitude:n.lon};case"{lat,lng}":return{latitude:n.lat,longitude:n.lng};case"geojson":return{latitude:n.geometry.coordinates[1],longitude:n.geometry.coordinates[0]};default:return n}},function(t,n,e){var i=(e=e||{}).unit in r?r[e.unit]:r.km,a=u(e.format,t),_=u(e.format,n),c=o(_.latitude-a.latitude),f=o(_.longitude-a.longitude),l=o(a.latitude),s=o(_.latitude),d=Math.sin(c/2)*Math.sin(c/2)+Math.sin(f/2)*Math.sin(f/2)*Math.cos(l)*Math.cos(s),h=2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d));return e.threshold?e.threshold>i*h:i*h});t.exports&&(t.exports=i)},GFNa:function(t,n,e){},HteQ:function(t,n){t.exports=require("preact")},QfWi:function(t,n,e){"use strict";e.r(n);e("GFNa");var r,o,u,i=e("HteQ"),a=0,_=[],c=i.options.__r,f=i.options.diffed,l=i.options.__c,s=i.options.unmount;function d(t,n){i.options.__h&&i.options.__h(o,t,a||n),a=0;var e=o.__H||(o.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({}),e.__[t]}function h(t){return a=1,function(t,n,e){var u=d(r++,2);return u.t=t,u.__c||(u.__c=o,u.__=[e?e(n):H(void 0,n),function(t){var n=u.t(u.__[0],t);u.__[0]!==n&&(u.__=[n,u.__[1]],u.__c.setState({}))}]),u.__}(H,t)}function p(t,n){var e=d(r++,3);!i.options.__s&&b(e.__H,n)&&(e.__=t,e.__H=n,o.__H.__h.push(e))}function m(){_.some((function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(y),t.__H.__h=[]}catch(n){return t.__H.__h=[],i.options.__e(n,t.__v),!0}})),_=[]}i.options.__r=function(t){c&&c(t),r=0;var n=(o=t.__c).__H;n&&(n.__h.forEach(g),n.__h.forEach(y),n.__h=[])},i.options.diffed=function(t){f&&f(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==_.push(n)&&u===i.options.requestAnimationFrame||((u=i.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),v&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);v&&(n=requestAnimationFrame(e))})(m))},i.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(g),t.__h=t.__h.filter((function(t){return!t.__||y(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],i.options.__e(e,t.__v)}})),l&&l(t,n)},i.options.unmount=function(t){s&&s(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(g)}catch(t){i.options.__e(t,n.__v)}};var v="function"==typeof requestAnimationFrame;function g(t){"function"==typeof t.u&&t.u()}function y(t){t.u=t.__()}function b(t,n){return!t||n.some((function(n,e){return n!==t[e]}))}function H(t,n){return"function"==typeof n?n(t):n}var M=function(){var t=h(Error("loading")),n=t[0],e=t[1];return p((function(){if(navigator.geolocation){var t=navigator.geolocation.watchPosition(e,(function(t){return e(Error(JSON.stringify(t)))}),{enableHighAccuracy:!0});return function(){return navigator.geolocation.clearWatch(t)}}e(Error("Geolocation not available"))}),[]),n};var j=function(t){return"None"===t._tag},O={_tag:"None"},E=function(t){return{_tag:"Some",value:t}};var x=e("BQ5G"),P=e.n(x),S=function(){var t=h(0),n=t[0],e=t[1],r=h(O),o=r[0],u=r[1],i=M();return p((function(){if(!(i instanceof Error))return function(t,n,e,r,o,u,i,a,_,c){switch(arguments.length){case 1:return t;case 2:return n(t);case 3:return e(n(t));case 4:return r(e(n(t)));case 5:return o(r(e(n(t))));case 6:return u(o(r(e(n(t)))));case 7:return i(u(o(r(e(n(t))))));case 8:return a(i(u(o(r(e(n(t)))))));case 9:return _(a(i(u(o(r(e(n(t))))))));case 10:return c(_(a(i(u(o(r(e(n(t)))))))))}}(o,(t=function(){u(E(i))},r=function(t){var r=P()({latitude:i.coords.latitude,longitude:i.coords.longitude},{latitude:t.coords.latitude,longitude:t.coords.longitude});e(r+n)},function(n){return j(n)?t():r(n.value)}));var t,r}),[i]),n};var q=function(){var t=M(),n=S();return Object(i.h)("div",null,Object(i.h)("h1",null,"Kilometreomter"),t instanceof Error?Object(i.h)("pre",null,t.message):Object(i.h)("pre",null,t.coords.latitude," ",t.coords.longitude," "),n," km",Object(i.h)("meter",{max:"1",value:n}))};n.default=q}});
//# sourceMappingURL=ssr-bundle.js.map