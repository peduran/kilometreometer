!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(e){return t[e]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="mdyV")}({BQ5G:function(t){var e,n,o,r=(e={km:6371,mile:3960,meter:6371e3,nmi:3440},n=function(t){return t*Math.PI/180},o=function(t,e){switch(t){case"[lat,lon]":return{latitude:e[0],longitude:e[1]};case"[lon,lat]":return{latitude:e[1],longitude:e[0]};case"{lon,lat}":return{latitude:e.lat,longitude:e.lon};case"{lat,lng}":return{latitude:e.lat,longitude:e.lng};case"geojson":return{latitude:e.geometry.coordinates[1],longitude:e.geometry.coordinates[0]};default:return e}},function(t,r,_){var u=(_=_||{}).unit in e?e[_.unit]:e.km,l=o(_.format,t),i=o(_.format,r),c=n(i.latitude-l.latitude),a=n(i.longitude-l.longitude),s=n(l.latitude),f=n(i.latitude),p=Math.sin(c/2)*Math.sin(c/2)+Math.sin(a/2)*Math.sin(a/2)*Math.cos(s)*Math.cos(f),d=2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p));return _.threshold?_.threshold>u*d:u*d});t.exports&&(t.exports=r)},GFNa:function(){},QfWi:function(t,e,n){"use strict";function o(t,e){d.options.__h&&d.options.__h(f,t,h||e),h=0;var n=f.__H||(f.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function r(t){return h=1,function(t,e,n){var r=o(s++,2);return r.t=t,r.__c||(r.__c=f,r.__=[n?n(e):a(void 0,e),function(t){var e=r.t(r.__[0],t);r.__[0]!==e&&(r.__=[e,r.__[1]],r.__c.setState({}))}]),r.__}(a,t)}function _(t,e){var n=o(s++,3);!d.options.__s&&c(n.__H,e)&&(n.__=t,n.__H=e,f.__H.__h.push(n))}function u(){v.some((function(t){if(t.__P)try{t.__H.__h.forEach(l),t.__H.__h.forEach(i),t.__H.__h=[]}catch(e){return t.__H.__h=[],d.options.__e(e,t.__v),!0}})),v=[]}function l(t){"function"==typeof t.u&&t.u()}function i(t){t.u=t.__()}function c(t,e){return!t||e.some((function(e,n){return e!==t[n]}))}function a(t,e){return"function"==typeof e?e(t):e}n.r(e);n("GFNa");var s,f,p,d=n("hosL"),h=0,v=[],y=d.options.__r,m=d.options.diffed,g=d.options.__c,b=d.options.unmount;d.options.__r=function(t){y&&y(t),s=0;var e=(f=t.__c).__H;e&&(e.__h.forEach(l),e.__h.forEach(i),e.__h=[])},d.options.diffed=function(t){m&&m(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(1!==v.push(e)&&p===d.options.requestAnimationFrame||((p=d.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(o),k&&cancelAnimationFrame(e),setTimeout(t)},o=setTimeout(n,100);k&&(e=requestAnimationFrame(n))})(u))},d.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(l),t.__h=t.__h.filter((function(t){return!t.__||i(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],d.options.__e(n,t.__v)}})),g&&g(t,e)},d.options.unmount=function(t){b&&b(t);var e=t.__c;if(e&&e.__H)try{e.__H.__.forEach(l)}catch(t){d.options.__e(t,e.__v)}};var k="function"==typeof requestAnimationFrame;const x=()=>{const[t,e]=r(Error("loading"));return _(()=>{if(!navigator.geolocation)return void e(Error("Geolocation not available"));const t=navigator.geolocation.watchPosition(e,t=>e(Error(JSON.stringify(t))),{enableHighAccuracy:!0});return()=>navigator.geolocation.clearWatch(t)},[]),t};var S=function(t){return"None"===t._tag},C={_tag:"None"},E=function(t){return{_tag:"Some",value:t}},w=n("BQ5G"),P=n.n(w);const A=()=>{const[t,e]=r(0),[n,o]=r(C),u=x();return _(()=>{if(!(u instanceof Error))return function(t,e,n,o,r,_,u,l,i,c){switch(arguments.length){case 1:return t;case 2:return e(t);case 3:return n(e(t));case 4:return o(n(e(t)));case 5:return r(o(n(e(t))));case 6:return _(r(o(n(e(t)))));case 7:return u(_(r(o(n(e(t))))));case 8:return l(u(_(r(o(n(e(t)))))));case 9:return i(l(u(_(r(o(n(e(t))))))));case 10:return c(i(l(u(_(r(o(n(e(t)))))))))}}(n,(r=()=>{o(E(u))},_=n=>{const o=P()({latitude:u.coords.latitude,longitude:u.coords.longitude},{latitude:n.coords.latitude,longitude:n.coords.longitude});e(o+t)},function(t){return S(t)?r():_(t.value)}));var r,_},[u]),t};e.default=()=>{const t=x(),e=A();return Object(d.h)("div",null,Object(d.h)("h1",null,"Kilometreomter"),t instanceof Error?Object(d.h)("pre",null,t.message):Object(d.h)("pre",null,t.coords.latitude," ",t.coords.longitude," "),e," km",Object(d.h)("meter",{max:"1",value:e}))}},hosL:function(t,e,n){"use strict";function o(t,e){for(var n in e)t[n]=e[n];return t}function r(t){var e=t.parentNode;e&&e.removeChild(t)}function _(t,e,n){var o,r=arguments,_={};for(o in e)"key"!==o&&"ref"!==o&&(_[o]=e[o]);if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(_.children=n),"function"==typeof t&&null!=t.defaultProps)for(o in t.defaultProps)void 0===_[o]&&(_[o]=t.defaultProps[o]);return u(t,_,e&&e.key,e&&e.ref,null)}function u(t,e,n,o,r){var _={type:t,props:e,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(_.__v=_),H.vnode&&H.vnode(_),_}function l(){return{current:null}}function i(t){return t.children}function c(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function s(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return s(t)}}function f(t){(!t.__d&&(t.__d=!0)&&O.push(t)&&!p.__r++||W!==H.debounceRendering)&&((W=H.debounceRendering)||D)(p)}function p(){for(var t;p.__r=O.length;)t=O.sort((function(t,e){return t.__v.__b-e.__v.__b})),O=[],t.some((function(t){var e,n,r,_,u,l,i;t.__d&&(l=(u=(e=t).__v).__e,(i=e.__P)&&(n=[],(r=o({},u)).__v=r,_=k(i,u,r,e.__n,void 0!==i.ownerSVGElement,null,n,null==l?a(u):l),x(n,u),_!=l&&s(u)))}))}function d(t,e,n,o,_,l,c,s,f,p){var d,h,y,m,g,b,x,S=o&&o.__k||F,w=S.length;for(f==U&&(f=null!=c?c[0]:w?a(o,0):null),n.__k=[],d=0;d<e.length;d++)if(null!=(m=n.__k[d]=null==(m=e[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(i,{children:m},null,null,null):null!=m.__e||null!=m.__c?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=S[d])||y&&m.key==y.key&&m.type===y.type)S[d]=void 0;else for(h=0;h<w;h++){if((y=S[h])&&m.key==y.key&&m.type===y.type){S[h]=void 0;break}y=null}g=k(t,m,y=y||U,_,l,c,s,f,p),(h=m.ref)&&y.ref!=h&&(x||(x=[]),y.ref&&x.push(y.ref,null,m),x.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),f=v(t,m,y,S,c,g,f),"option"==n.type?t.value="":"function"==typeof n.type&&(n.__d=f)):f&&y.__e==f&&f.parentNode!=t&&(f=a(y))}if(n.__e=b,null!=c&&"function"!=typeof n.type)for(d=c.length;d--;)null!=c[d]&&r(c[d]);for(d=w;d--;)null!=S[d]&&E(S[d],S[d]);if(x)for(d=0;d<x.length;d++)C(x[d],x[++d],x[++d])}function h(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?F.concat.apply([],t.map(h)):[t]}function v(t,e,n,o,r,_,u){var l,i,c;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(r==n||_!=u||null==_.parentNode)t:if(null==u||u.parentNode!==t)t.appendChild(_),l=null;else{for(i=u,c=0;(i=i.nextSibling)&&c<o.length;c+=2)if(i==_)break t;t.insertBefore(_,u),l=u}return void 0!==l?l:_.nextSibling}function y(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===R.test(e)?n+"px":null==n?"":n}function m(t,e,n,o,r){var _,u,l,i,c;if(r?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(_=t.style,"string"==typeof n)_.cssText=n;else{if("string"==typeof o&&(_.cssText="",o=null),o)for(i in o)n&&i in n||y(_,i,"");if(n)for(c in n)o&&n[c]===o[c]||y(_,c,n[c])}else"o"===e[0]&&"n"===e[1]?(u=e!==(e=e.replace(/Capture$/,"")),l=e.toLowerCase(),e=(l in t?l:e).slice(2),n?(o||t.addEventListener(e,g,u),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,g,u)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!r&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function g(t){this.l[t.type](H.event?H.event(t):t)}function b(t,e,n){var o,r;for(o=0;o<t.__k.length;o++)(r=t.__k[o])&&(r.__=t,r.__e&&("function"==typeof r.type&&r.__k.length>1&&b(r,e,n),e=v(n,r,r,t.__k,null,r.__e,e),"function"==typeof t.type&&(t.__d=e)))}function k(t,e,n,r,_,u,l,a,s){var f,p,h,v,y,m,g,k,x,C,E,P=e.type;if(void 0!==e.constructor)return null;(f=H.__b)&&f(e);try{t:if("function"==typeof P){if(k=e.props,x=(f=P.contextType)&&r[f.__c],C=f?x?x.props.value:f.__:r,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in P&&P.prototype.render?e.__c=p=new P(k,C):(e.__c=p=new c(k,C),p.constructor=P,p.render=w),x&&x.sub(p),p.props=k,p.state||(p.state={}),p.context=C,p.__n=r,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=o({},p.__s)),o(p.__s,P.getDerivedStateFromProps(k,p.__s))),v=p.props,y=p.state,h)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,C)||e.__v===n.__v){p.props=k,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,p.__h.length&&l.push(p),b(e,a,t);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}p.context=C,p.props=k,p.state=p.__s,(f=H.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(r=o(o({},r),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),E=null!=f&&f.type==i&&null==f.key?f.props.children:f,d(t,Array.isArray(E)?E:[E],e,n,r,_,u,l,a,s),p.base=e.__e,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=S(n.__e,e,n,r,_,u,l,s);(f=H.diffed)&&f(e)}catch(t){e.__v=null,H.__e(t,e,n)}return e.__e}function x(t,e){H.__c&&H.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){H.__e(t,e.__v)}}))}function S(t,e,n,o,r,_,u,l){var i,c,a,s,f,p=n.props,h=e.props;if(r="svg"===e.type||r,null!=_)for(i=0;i<_.length;i++)if(null!=(c=_[i])&&((null===e.type?3===c.nodeType:c.localName===e.type)||t==c)){t=c,_[i]=null;break}if(null==t){if(null===e.type)return document.createTextNode(h);t=r?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,h.is&&{is:h.is}),_=null,l=!1}if(null===e.type)p!==h&&t.data!=h&&(t.data=h);else{if(null!=_&&(_=F.slice.call(t.childNodes)),a=(p=n.props||U).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!l){if(null!=_)for(p={},f=0;f<t.attributes.length;f++)p[t.attributes[f].name]=t.attributes[f].value;(s||a)&&(s&&a&&s.__html==a.__html||(t.innerHTML=s&&s.__html||""))}(function(t,e,n,o,r){var _;for(_ in n)"children"===_||"key"===_||_ in e||m(t,_,null,n[_],o);for(_ in e)r&&"function"!=typeof e[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===e[_]||m(t,_,e[_],n[_],o)})(t,h,p,r,l),s?e.__k=[]:(i=e.props.children,d(t,Array.isArray(i)?i:[i],e,n,o,"foreignObject"!==e.type&&r,_,u,U,l)),l||("value"in h&&void 0!==(i=h.value)&&i!==t.value&&m(t,"value",i,p.value,!1),"checked"in h&&void 0!==(i=h.checked)&&i!==t.checked&&m(t,"checked",i,p.checked,!1))}return t}function C(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){H.__e(t,n)}}function E(t,e,n){var o,_,u;if(H.unmount&&H.unmount(t),(o=t.ref)&&(o.current&&o.current!==t.__e||C(o,null,e)),n||"function"==typeof t.type||(n=null!=(_=t.__e)),t.__e=t.__d=void 0,null!=(o=t.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(t){H.__e(t,e)}o.base=o.__P=null}if(o=t.__k)for(u=0;u<o.length;u++)o[u]&&E(o[u],e,n);null!=_&&r(_)}function w(t,e,n){return this.constructor(t,n)}function P(t,e,n){var o,r,u;H.__&&H.__(t,e),r=(o=n===j)?null:n&&n.__k||e.__k,t=_(i,null,[t]),u=[],k(e,(o?e:n||e).__k=t,r||U,U,void 0!==e.ownerSVGElement,n&&!o?[n]:r?null:e.childNodes.length?F.slice.call(e.childNodes):null,u,n||U,o),x(u,t)}function A(t,e){P(t,e,j)}function M(t,e){var n,r;for(r in e=o(o({},t.props),e),arguments.length>2&&(e.children=F.slice.call(arguments,2)),n={},e)"key"!==r&&"ref"!==r&&(n[r]=e[r]);return u(t.type,n,e.key||t.key,e.ref||t.ref,null)}function N(t){var e={},n={__c:"__cC"+L++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var o,r=this;return this.getChildContext||(o=[],this.getChildContext=function(){return e[n.__c]=r,e},this.shouldComponentUpdate=function(t){r.props.value!==t.value&&o.some((function(e){e.context=t.value,f(e)}))},this.sub=function(t){o.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){o.splice(o.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}n.r(e),n.d(e,"render",(function(){return P})),n.d(e,"hydrate",(function(){return A})),n.d(e,"createElement",(function(){return _})),n.d(e,"h",(function(){return _})),n.d(e,"Fragment",(function(){return i})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return T})),n.d(e,"Component",(function(){return c})),n.d(e,"cloneElement",(function(){return M})),n.d(e,"createContext",(function(){return N})),n.d(e,"toChildArray",(function(){return h})),n.d(e,"__u",(function(){return E})),n.d(e,"options",(function(){return H}));var H,T,O,D,W,j,L,U={},F=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;H={__e:function(t,e){for(var n,o;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(o=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(o=!0,n.componentDidCatch(t)),o)return f(n.__E=n)}catch(e){t=e}throw t}},T=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&o(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),f(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),f(this))},c.prototype.render=i,O=[],D="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,j=U,L=0},mdyV:function(t,e,n){"use strict";n.r(e);var o=n("hosL");const{h:r,render:_,hydrate:u}=o,l=t=>t&&t.default?t.default:t;if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let e=l(n("QfWi")),o={};const i=document.querySelector('[type="__PREACT_CLI_DATA__"]');i&&(o=JSON.parse(decodeURI(i.innerHTML)).preRenderData||o);const c=o.url?"/"===(a=o.url)[a.length-1]?a:a+"/":"";var a;const s=u&&c===location.pathname;t=(s?u:_)(r(e,{CLI_DATA:{preRenderData:o}}),document.body,t)})()}}});
//# sourceMappingURL=bundle.69459.esm.js.map