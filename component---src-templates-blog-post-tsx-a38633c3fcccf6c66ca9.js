(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/8Fb":function(t,e,n){var r=n("XKFU"),i=n("UExd")(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},"1gqn":function(t,e,n){n("bHtr"),t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},"9lTW":function(t,e,n){"use strict";(function(e){n("rGqo"),n("yt8O"),n("RW0V"),n("Vd3H"),n("NO8f"),n("Tdpu"),n("Y9lz"),n("V+eJ"),n("SRfc"),n("Ji/l"),n("a1Th"),n("h7Nl"),n("Btvt"),n("f3/d");var r=n("MgzW");function i(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0}function o(t){return e.Buffer&&"function"==typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var a=n("MCLT"),c=Object.prototype.hasOwnProperty,u=Array.prototype.slice,l="foo"===function(){}.name;function s(t){return Object.prototype.toString.call(t)}function f(t){return!o(t)&&("function"==typeof e.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var p=t.exports=w,d=/\s*function\s+([^\(\s]*)\s*/;function h(t){if(a.isFunction(t)){if(l)return t.name;var e=t.toString().match(d);return e&&e[1]}}function m(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function g(t){if(l||!a.isFunction(t))return a.inspect(t);var e=h(t);return"[Function"+(e?": "+e:"")+"]"}function y(t,e,n,r,i){throw new p.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:i})}function w(t,e){t||y(t,!0,e,"==",p.ok)}function b(t,e,n,r){if(t===e)return!0;if(o(t)&&o(e))return 0===i(t,e);if(a.isDate(t)&&a.isDate(e))return t.getTime()===e.getTime();if(a.isRegExp(t)&&a.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"==typeof t||null!==e&&"object"==typeof e){if(f(t)&&f(e)&&s(t)===s(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===i(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(o(t)!==o(e))return!1;var c=(r=r||{actual:[],expected:[]}).actual.indexOf(t);return-1!==c&&c===r.expected.indexOf(e)||(r.actual.push(t),r.expected.push(e),function(t,e,n,r){if(null==t||null==e)return!1;if(a.isPrimitive(t)||a.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=v(t),o=v(e);if(i&&!o||!i&&o)return!1;if(i)return t=u.call(t),e=u.call(e),b(t,e,n);var c,l,s=O(t),f=O(e);if(s.length!==f.length)return!1;for(s.sort(),f.sort(),l=s.length-1;l>=0;l--)if(s[l]!==f[l])return!1;for(l=s.length-1;l>=0;l--)if(c=s[l],!b(t[c],e[c],n,r))return!1;return!0}(t,e,n,r))}return n?t===e:t==e}function v(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function E(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(n){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function x(t,e,n,r){var i;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),i=function(t){var e;try{t()}catch(n){e=n}return e}(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!i&&y(i,n,"Missing expected exception"+r);var o="string"==typeof r,c=!t&&i&&!n;if((!t&&a.isError(i)&&o&&E(i,n)||c)&&y(i,n,"Got unwanted exception"+r),t&&i&&n&&!E(i,n)||!t&&i)throw i}p.AssertionError=function(t){var e;this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=m(g((e=this).actual),128)+" "+e.operator+" "+m(g(e.expected),128),this.generatedMessage=!0);var n=t.stackStartFunction||y;if(Error.captureStackTrace)Error.captureStackTrace(this,n);else{var r=new Error;if(r.stack){var i=r.stack,o=h(n),a=i.indexOf("\n"+o);if(a>=0){var c=i.indexOf("\n",a+1);i=i.substring(c+1)}this.stack=i}}},a.inherits(p.AssertionError,Error),p.fail=y,p.ok=w,p.equal=function(t,e,n){t!=e&&y(t,e,n,"==",p.equal)},p.notEqual=function(t,e,n){t==e&&y(t,e,n,"!=",p.notEqual)},p.deepEqual=function(t,e,n){b(t,e,!1)||y(t,e,n,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(t,e,n){b(t,e,!0)||y(t,e,n,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(t,e,n){b(t,e,!1)&&y(t,e,n,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function t(e,n,r){b(e,n,!0)&&y(e,n,r,"notDeepStrictEqual",t)},p.strictEqual=function(t,e,n){t!==e&&y(t,e,n,"===",p.strictEqual)},p.notStrictEqual=function(t,e,n){t===e&&y(t,e,n,"!==",p.notStrictEqual)},p.throws=function(t,e,n){x(!0,t,e,n)},p.doesNotThrow=function(t,e,n){x(!1,t,e,n)},p.ifError=function(t){if(t)throw t},p.strict=r((function t(e,n){e||y(e,!0,n,"==",t)}),p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var O=Object.keys||function(t){var e=[];for(var n in t)c.call(t,n)&&e.push(n);return e}}).call(this,n("yLpj"))},"Ji/l":function(t,e,n){var r=n("XKFU");r(r.G+r.W+r.F*!n("D4iV").ABV,{DataView:n("7Qtz").DataView})},KKCa:function(t,e,n){n("hHhE"),"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},MCLT:function(t,e,n){(function(t){n("WLL4"),n("/SS/"),n("VRzm"),n("HAE/"),n("rE2o"),n("ioFf"),n("LK8F"),n("DNiP"),n("KKXr"),n("SRfc"),n("bWfx"),n("a1Th"),n("h7Nl"),n("f3/d"),n("V+eJ"),n("8+KV"),n("Oyvg"),n("xfY5"),n("pIFo"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("jm62");var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},i=/%[sdj%]/g;e.format=function(t){if(!y(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,o=r.length,a=String(t).replace(i,(function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}})),u=r[n];n<o;u=r[++n])m(u)||!v(u)?a+=" "+u:a+=" "+c(u);return a},e.deprecate=function(n,r){if(void 0!==t&&!0===t.noDeprecation)return n;if(void 0===t)return function(){return e.deprecate(n,r).apply(this,arguments)};var i=!1;return function(){if(!i){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}};var o,a={};function c(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&e._extend(r,n),w(r.showHidden)&&(r.showHidden=!1),w(r.depth)&&(r.depth=2),w(r.colors)&&(r.colors=!1),w(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),s(r,t,r.depth)}function u(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function l(t,e){return t}function s(t,n,r){if(t.customInspect&&n&&O(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return y(i)||(i=s(t,i,r)),i}var o=function(t,e){if(w(e))return t.stylize("undefined","undefined");if(y(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(g(e))return t.stylize(""+e,"number");if(h(e))return t.stylize(""+e,"boolean");if(m(e))return t.stylize("null","null")}(t,n);if(o)return o;var a=Object.keys(n),c=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),x(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(n);if(0===a.length){if(O(n)){var u=n.name?": "+n.name:"";return t.stylize("[Function"+u+"]","special")}if(b(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(E(n))return t.stylize(Date.prototype.toString.call(n),"date");if(x(n))return f(n)}var l,v="",j=!1,S=["{","}"];(d(n)&&(j=!0,S=["[","]"]),O(n))&&(v=" [Function"+(n.name?": "+n.name:"")+"]");return b(n)&&(v=" "+RegExp.prototype.toString.call(n)),E(n)&&(v=" "+Date.prototype.toUTCString.call(n)),x(n)&&(v=" "+f(n)),0!==a.length||j&&0!=n.length?r<0?b(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=j?function(t,e,n,r,i){for(var o=[],a=0,c=e.length;a<c;++a)N(e,String(a))?o.push(p(t,e,n,r,String(a),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(p(t,e,n,r,i,!0))})),o}(t,n,r,c,a):a.map((function(e){return p(t,n,r,c,e,j)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(l,v,S)):S[0]+v+S[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,i,o){var a,c,u;if((u=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?c=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(c=t.stylize("[Setter]","special")),N(r,i)||(a="["+i+"]"),c||(t.seen.indexOf(u.value)<0?(c=m(n)?s(t,u.value,null):s(t,u.value,n-1)).indexOf("\n")>-1&&(c=o?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n")):c=t.stylize("[Circular]","special")),w(a)){if(o&&i.match(/^\d+$/))return c;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+c}function d(t){return Array.isArray(t)}function h(t){return"boolean"==typeof t}function m(t){return null===t}function g(t){return"number"==typeof t}function y(t){return"string"==typeof t}function w(t){return void 0===t}function b(t){return v(t)&&"[object RegExp]"===j(t)}function v(t){return"object"==typeof t&&null!==t}function E(t){return v(t)&&"[object Date]"===j(t)}function x(t){return v(t)&&("[object Error]"===j(t)||t instanceof Error)}function O(t){return"function"==typeof t}function j(t){return Object.prototype.toString.call(t)}function S(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(w(o)&&(o={}.NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var r=t.pid;a[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else a[n]=function(){};return a[n]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=h,e.isNull=m,e.isNullOrUndefined=function(t){return null==t},e.isNumber=g,e.isString=y,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=w,e.isRegExp=b,e.isObject=v,e.isDate=E,e.isError=x,e.isFunction=O,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n("1gqn");var k=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function z(){var t=new Date,e=[S(t.getHours()),S(t.getMinutes()),S(t.getSeconds())].join(":");return[t.getDate(),k[t.getMonth()],e].join(" ")}function N(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",z(),e.format.apply(e,arguments))},e.inherits=n("KKCa"),e._extend=function(t,e){if(!e||!v(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var C="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(C&&t[C]){var e;if("function"!=typeof(e=t[C]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,C,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,i)}catch(a){n(a)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),C&&Object.defineProperty(e,C,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=C,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var i=n.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var o=this,a=function(){return i.apply(o,arguments)};e.apply(this,n).then((function(e){t.nextTick(a,null,e)}),(function(e){t.nextTick(P,e,a)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n("8oxB"))},NO8f:function(t,e,n){n("7DDg")("Uint8",1,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},TSYQ:function(t,e,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function i(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&t.push(a)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(i.default=i,t.exports=i):void 0===(r=function(){return i}.apply(e,[]))||(t.exports=r)}()},Tdpu:function(t,e,n){n("7DDg")("Float64",8,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},Tq89:function(t,e,n){"use strict";n.r(e);n("91GP");var r=n("q1tI"),i=n.n(r),o=n("g46H"),a=n("YtSc"),c=n("Wbzz"),u=n("Lnxd"),l=function(t){return Object(u.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"11 17 6 12 11 7"}},{tag:"polyline",attr:{points:"18 17 13 12 18 7"}}]})(t)};l.displayName="FiChevronsLeft";var s=function(t){return Object(u.a)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"13 17 18 12 13 7"}},{tag:"polyline",attr:{points:"6 17 11 12 6 7"}}]})(t)};s.displayName="FiChevronsRight";function f(){var t=m([""]);return f=function(){return t},t}function p(){var t=m(["\n  margin: 0;\n  &.m-left {\n    margin-left: 20px;\n    @media screen and (max-width: 400px) {\n      margin: 5px;\n    }\n  }\n  &.m-right {\n    margin-right: 20px;\n    @media screen and (max-width: 400px) {\n      margin: 5px;\n    }\n  }\n  & > p:first-child {\n    font-weight: bold;\n  }\n  & > p {\n    margin: 0;\n  }\n"]);return p=function(){return t},t}function d(){var t=m(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap-reverse;\n  margin-bottom: 2rem;\n  margin-top: -2rem; // Cool trick https://stackoverflow.com/questions/30887071/margin-top-only-when-the-flex-item-is-wrapped\n  padding: 20px;\n  @media screen and (max-width: 600px) {\n    padding: 0;\n  }\n  ",":last-child {\n    margin-left: auto\n  }\n"]);return d=function(){return t},t}function h(){var t=m(["\n  align-items: center;\n  color: black;\n  display: flex;\n  margin-top: 2rem;\n"]);return h=function(){return t},t}function m(t,e){return e||(e=t.slice(0)),t.raw=e,t}var g=Object(o.a)(c.a)(h()),y=o.a.div(d(),g),w=o.a.div(p()),b=Object(o.a)((function(t){var e=t.previous,n=t.next;return r.createElement(y,null,e.slug?r.createElement(g,{to:e.slug},r.createElement(l,{size:24}),r.createElement(w,{className:"m-left"},r.createElement("p",null,e.title),r.createElement("p",null,e.datePublished))):r.createElement("div",null),n.slug?r.createElement(g,{to:n.slug},r.createElement(w,{className:"m-right"},r.createElement("p",null,n.title),r.createElement("p",null,n.datePublished)),r.createElement(s,{size:24})):r.createElement("div",null))}))(f()),v=n("NIcq");function E(){var t=F([""]);return E=function(){return t},t}function x(){var t=F(["\n  font-size: 1rem;\n  font-weight: 300;\n  margin: 0 0 0 0;\n"]);return x=function(){return t},t}function O(){var t=F(["\n  background: #ff3354c9;\n  border-radius: 5px;\n  color: white;\n  font-size: 1rem;\n  margin: 0 5px 5px 0;\n  padding: 0 3px 0 3px;\n  ",";\n"]);return O=function(){return t},t}function j(){var t=F(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n"]);return j=function(){return t},t}function S(){var t=F(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  "," {\n    padding-bottom: 3px; // Aligns the stupid svg icon to center\n  }\n"]);return S=function(){return t},t}function k(){var t=F(["\n  display: flex;\n  margin-right: 10px;\n"]);return k=function(){return t},t}function z(){var t=F(["\n  background: #607cff; // #081da9;\n  border-radius: 5px;\n  color: white;\n  font-size: 1rem;\n  padding: 0 3px;\n  ","\n"]);return z=function(){return t},t}function N(){var t=F(["\n  align-items: center;\n  display: flex;\n  margin: 10px 20px 10px 0;\n  min-width: 130px; // Based on complex calculations and rocket science\n"]);return N=function(){return t},t}function C(){var t=F(["\n  align-items: center;\n  display: flex;\n  margin: 8px 0 8px 0;\n  @media screen and (max-width: 550px) {\n    align-items: flex-start;\n    flex-direction: column;\n    margin: 8px 0 18px 0;\n  }\n"]);return C=function(){return t},t}function P(){var t=F(["\n  display: flex;\n  flex-direction: column;\n  & > h1 {\n    color: ",";\n    font-size: 3rem;\n    line-height: 3.25rem;\n    margin-bottom: 0;\n    @media only screen and (max-width: 620px) {\n      font-size: 2rem;\n    }\n  }\n"]);return P=function(){return t},t}function F(t,e){return e||(e=t.slice(0)),t.raw=e,t}var D=o.a.header(P(),(function(t){return t.theme.color.primary})),q=o.a.div(C()),A=o.a.div(N()),T=o.a.time(z(),Object(o.b)(1)),I=o.a.div(k()),_=o.a.div(S(),I),H=o.a.ul(j()),V=o.a.li(O(),Object(o.b)(1)),M=o.a.h6(x()),W=Object(o.a)((function(t){var e=t.excerpt,n=t.frontmatter,i=n.title,o=n.datePublished,a=n.tags;return r.createElement(r.Fragment,null,r.createElement(D,null,r.createElement("h1",null,i),r.createElement(q,null,r.createElement(A,null,r.createElement(I,null,r.createElement(v.b,{size:24})),r.createElement(T,null,o)),r.createElement(_,null,r.createElement(I,null,r.createElement(v.c,{size:24})),r.createElement(H,null,a.map((function(t,e){return r.createElement(V,{key:e},t)}))))),r.createElement(M,null,e)),r.createElement("hr",null))}))(E()),B=n("9lTW"),R=n.n(B);n("rGqo"),n("yt8O"),n("Btvt"),n("/8Fb"),n("0l/t"),n("bWfx");function L(t){var e=Object.entries(t).filter((function(t){var e=t[1];return null!=e})).map((function(t){var e=t[0],n=t[1];return encodeURIComponent(e)+"="+encodeURIComponent(String(n))}));return e.length>0?"?"+e.join("&"):""}n("RW0V"),n("V+eJ"),n("rE2o"),n("ioFf"),n("VRzm"),n("hHhE"),n("/SS/");var U,J=n("TSYQ"),K=n.n(J),G=(U=function(t,e){return(U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}U(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),X=function(){return(X=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},Y=function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{u(r.next(t))}catch(e){o(e)}}function c(t){try{u(r.throw(t))}catch(e){o(e)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))},Q=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},Z=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},$=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then},tt=function(t,e){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-t/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-e/2}},et=function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}};function nt(t,e,n){var r=e.height,i=e.width,o=Z(e,["height","width"]),a=X({height:r,width:i,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),c=window.open(t,"",Object.keys(a).map((function(t){return t+"="+a[t]})).join(", "));if(n)var u=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(u),n(c))}catch(t){console.error(t)}}),1e3);return c}var rt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n=e.props,r=n.onShareWindowClose,i=n.windowHeight,o=void 0===i?400:i,a=n.windowPosition,c=void 0===a?"windowCenter":a,u=n.windowWidth,l=void 0===u?550:u;nt(t,X({height:o,width:l},"windowCenter"===c?tt(l,o):et(l,o)),r)},e.handleClick=function(t){return Y(e,void 0,void 0,(function(){var e,n,r,i,o,a,c,u,l,s;return Q(this,(function(f){switch(f.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,i=e.networkLink,o=e.onClick,a=e.url,c=e.openShareDialogOnClick,u=e.opts,l=i(a,u),r?[2]:(t.preventDefault(),n?(s=n(),$(s)?[4,s]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(l),o&&o(t,l),[2]}}))}))},e}return G(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,r=t.disabled,o=t.disabledStyle,a=t.forwardedRef,c=(t.networkLink,t.networkName),u=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),l=t.style,s=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,Z(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=K()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=X(X(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),r&&o);return i.a.createElement("button",X({},s,{"aria-label":s["aria-label"]||c,className:f,onClick:this.handleClick,ref:a,style:p}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(r.Component),it=function(){return(it=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};var ot=function(t,e,n,o){function a(r,a){return i.a.createElement(rt,it({},o,r,{forwardedRef:a,networkName:t,networkLink:e,opts:n(r)}))}return a.displayName="ShareButton-"+t,Object(r.forwardRef)(a)};var at=ot("facebook",(function(t,e){var n=e.quote,r=e.hashtag;return R()(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+L({u:t,quote:n,hashtag:r})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400}),ct=function(){return(ct=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},ut=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};function lt(t){var e=function(e){var n=e.bgStyle,r=e.borderRadius,o=e.iconFillColor,a=e.round,c=e.size,u=ut(e,["bgStyle","borderRadius","iconFillColor","round","size"]);return i.a.createElement("svg",ct({viewBox:"0 0 64 64",width:c,height:c},u),a?i.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:t.color,style:n}):i.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:t.color,style:n}),i.a.createElement("path",{d:t.path,fill:o}))};return e.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},e}var st=lt({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});n("LK8F");var ft=ot("twitter",(function(t,e){var n=e.title,r=e.via,i=e.hashtags,o=void 0===i?[]:i;return R()(t,"twitter.url"),R()(Array.isArray(o),"twitter.hashtags is not an array"),"https://twitter.com/share"+L({url:t,text:n,via:r,hashtags:o.join(",")})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via}}),{windowWidth:550,windowHeight:400}),pt=lt({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var dt=ot("linkedin",(function(t,e){var n=e.title,r=e.summary,i=e.source;return R()(t,"linkedin.url"),"https://linkedin.com/shareArticle"+L({url:t,mini:"true",title:n,summary:r,source:i})}),(function(t){return{title:t.title,summary:t.summary,source:t.source}}),{windowWidth:750,windowHeight:600}),ht=lt({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var mt=ot("reddit",(function(t,e){var n=e.title;return R()(t,"reddit.url"),"https://www.reddit.com/submit"+L({url:t,title:n})}),(function(t){return{title:t.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),gt=lt({color:"#5f99cf",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"});var yt=ot("whatsapp",(function(t,e){var n=e.title,r=e.separator;return R()(t,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+L({text:n?n+r+t:t})}),(function(t){return{title:t.title,separator:t.separator}}),{separator:" ",windowWidth:550,windowHeight:400}),wt=lt({color:"#2cb742",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});var bt=ot("telegram",(function(t,e){var n=e.title;return R()(t,"telegram.url"),"https://telegram.me/share/"+L({url:t,text:n})}),(function(t){return{title:t.title}}),{windowWidth:550,windowHeight:400}),vt=lt({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"});var Et=ot("email",(function(t,e){var n=e.subject,r=e.body,i=e.separator;return"mailto:"+L({subject:n,body:r?r+i+t:t})}),(function(t){return{subject:t.subject,body:t.body,separator:t.separator}}),{separator:" ",openShareDialogOnClick:!1,onClick:function(t,e){window.location.href=e}}),xt=lt({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"});function Ot(){var t=St([""]);return Ot=function(){return t},t}function jt(){var t=St(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 10px;\n  & > div {\n    cursor: pointer;\n    margin-right: 5px;\n  }\n"]);return jt=function(){return t},t}function St(t,e){return e||(e=t.slice(0)),t.raw=e,t}var kt=o.a.div(jt()),zt=Object(o.a)((function(t){var e=t.className,n=t.url,i=t.title;return r.createElement(kt,{className:e},r.createElement(at,{url:n,quote:i},r.createElement(st,{size:40})),r.createElement(ft,{url:n,title:i},r.createElement(pt,{size:40})),r.createElement(dt,{url:n,title:i,windowWidth:750,windowHeight:600},r.createElement(ht,{size:40})),r.createElement(mt,{url:n,title:i,windowWidth:660,windowHeight:460},r.createElement(gt,{size:40})),r.createElement(yt,{url:n,title:i},r.createElement(wt,{size:40})),r.createElement(bt,{url:n,title:i},r.createElement(vt,{size:40})),r.createElement(Et,{url:n,subject:i,body:n},r.createElement(xt,{size:40})))}))(Ot());function Nt(){var t=function(t,e){e||(e=t.slice(0));return t.raw=e,t}(["\n\n"]);return Nt=function(){return t},t}n.d(e,"default",(function(){return Ct})),n.d(e,"pageQuery",(function(){return Ft}));var Ct=function(t){var e,n;function r(){return t.apply(this,arguments)||this}return n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.render=function(){var t=this.props,e=t.data,n=e.site,r=e.markdownRemark,o=e.seoImage,c=t.pageContext,u=n.siteMetadata.imgSiteUrl,l=""+n.siteMetadata.siteUrl+r.fields.slug,s=o&&o.landscape?""+u+o.landscape.fluid.src:r.frontmatter.images&&r.frontmatter.images.length>0?r.frontmatter.images[0]:n.siteMetadata.image,f=Object.assign({},n.siteMetadata,{},r.frontmatter,{},{url:l,image:s,publisher:n.siteMetadata.organization}),p=r.frontmatter.title,d=r.frontmatter.description||r.excerpt;return i.a.createElement(a.a,{title:p,seoBlogPost:f},i.a.createElement(Pt,null,i.a.createElement(W,{frontmatter:r.frontmatter,excerpt:d}),i.a.createElement("section",{className:"blog-post",dangerouslySetInnerHTML:{__html:r.html}}),i.a.createElement(b,{previous:c.previous,next:c.next}),i.a.createElement(zt,{url:l,title:p})))},r}(i.a.PureComponent),Pt=o.a.div(Nt()),Ft="2338282854"},UExd:function(t,e,n){var r=n("nh4g"),i=n("DVgA"),o=n("aCFj"),a=n("UqcF").f;t.exports=function(t){return function(e){for(var n,c=o(e),u=i(c),l=u.length,s=0,f=[];l>s;)n=u[s++],r&&!a.call(c,n)||f.push(t?[n,c[n]]:c[n]);return f}}},WLL4:function(t,e,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperties:n("FJW5")})},Y9lz:function(t,e,n){n("7DDg")("Float32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},bHtr:function(t,e,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},jm62:function(t,e,n){var r=n("XKFU"),i=n("mQtv"),o=n("aCFj"),a=n("EemH"),c=n("8a7r");r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,n,r=o(t),u=a.f,l=i(r),s={},f=0;l.length>f;)void 0!==(n=u(r,e=l[f++]))&&c(s,e,n);return s}})},mQtv:function(t,e,n){var r=n("kJMx"),i=n("JiEa"),o=n("y3w9"),a=n("dyZX").Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(o(t)),n=i.f;return n?e.concat(n(t)):e}},xfY5:function(t,e,n){"use strict";var r=n("dyZX"),i=n("aagx"),o=n("LZWt"),a=n("Xbzi"),c=n("apmT"),u=n("eeVq"),l=n("kJMx").f,s=n("EemH").f,f=n("hswa").f,p=n("qncB").trim,d=r.Number,h=d,m=d.prototype,g="Number"==o(n("Kuth")(m)),y="trim"in String.prototype,w=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,o=(e=y?e.trim():p(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,u=e.slice(2),l=0,s=u.length;l<s;l++)if((a=u.charCodeAt(l))<48||a>i)return NaN;return parseInt(u,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(g?u((function(){m.valueOf.call(n)})):"Number"!=o(n))?a(new h(w(e)),n,d):w(e)};for(var b,v=n("nh4g")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;v.length>E;E++)i(h,b=v[E])&&!i(d,b)&&f(d,b,s(h,b));d.prototype=m,m.constructor=d,n("KroJ")(r,"Number",d)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-a38633c3fcccf6c66ca9.js.map