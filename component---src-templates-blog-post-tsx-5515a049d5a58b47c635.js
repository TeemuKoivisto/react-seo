/*! For license information please see component---src-templates-blog-post-tsx-5515a049d5a58b47c635.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var o=i.apply(null,r);o&&e.push(o)}else if("object"===a)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},Tq89:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Se}));var r=n("MUpH"),i=n("dI71"),a=n("q1tI"),o=n.n(a),c=n("g46H"),l=n("YtSc"),u=n("Wbzz"),s=n("Tgqd");function f(){var e=Object(r.a)([""]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n  margin: 0;\n  &.m-left {\n    margin-left: 20px;\n    @media screen and (max-width: 400px) {\n      margin: 5px;\n    }\n  }\n  &.m-right {\n    margin-right: 20px;\n    @media screen and (max-width: 400px) {\n      margin: 5px;\n    }\n  }\n  & > p:first-child {\n    font-weight: bold;\n  }\n  & > p {\n    margin: 0;\n  }\n"]);return p=function(){return e},e}function d(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap-reverse;\n  margin-bottom: 2rem;\n  margin-top: -2rem; // Cool trick https://stackoverflow.com/questions/30887071/margin-top-only-when-the-flex-item-is-wrapped\n  padding: 20px;\n  @media screen and (max-width: 600px) {\n    padding: 0;\n  }\n  ",":last-child {\n    margin-left: auto\n  }\n"]);return d=function(){return e},e}function h(){var e=Object(r.a)(["\n  align-items: center;\n  color: black;\n  display: flex;\n  margin-top: 2rem;\n"]);return h=function(){return e},e}var m=Object(c.a)(u.a)(h()),w=c.a.div(d(),m),b=c.a.div(p()),g=Object(c.a)((function(e){var t=e.previous,n=e.next;return a.createElement(w,null,t.slug?a.createElement(m,{to:t.slug},a.createElement(s.a,{size:24}),a.createElement(b,{className:"m-left"},a.createElement("p",null,t.title),a.createElement("p",null,t.datePublished))):a.createElement("div",null),n.slug?a.createElement(m,{to:n.slug},a.createElement(b,{className:"m-right"},a.createElement("p",null,n.title),a.createElement("p",null,n.datePublished)),a.createElement(s.b,{size:24})):a.createElement("div",null))}))(f()),v=n("NIcq");function y(){var e=Object(r.a)([""]);return y=function(){return e},e}function x(){var e=Object(r.a)(["\n  font-size: 1rem;\n  font-weight: 300;\n  margin: 0 0 0 0;\n"]);return x=function(){return e},e}function O(){var e=Object(r.a)(["\n  background: #ff3354c9;\n  border-radius: 5px;\n  color: white;\n  font-size: 1rem;\n  margin: 0 5px 5px 0;\n  padding: 0 3px 0 3px;\n  ",";\n"]);return O=function(){return e},e}function j(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: 0;\n"]);return j=function(){return e},e}function E(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  "," {\n    padding-bottom: 3px; // Aligns the stupid svg icon to center\n  }\n"]);return E=function(){return e},e}function k(){var e=Object(r.a)(["\n  display: flex;\n  margin-right: 10px;\n"]);return k=function(){return e},e}function z(){var e=Object(r.a)(["\n  background: #607cff; // #081da9;\n  border-radius: 5px;\n  color: white;\n  font-size: 1rem;\n  padding: 0 3px;\n  ","\n"]);return z=function(){return e},e}function S(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  margin: 10px 20px 10px 0;\n  min-width: 130px; // Based on complex calculations and rocket science\n"]);return S=function(){return e},e}function C(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  margin: 8px 0 8px 0;\n  @media screen and (max-width: 550px) {\n    align-items: flex-start;\n    flex-direction: column;\n    margin: 8px 0 18px 0;\n  }\n"]);return C=function(){return e},e}function P(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  & > h1 {\n    color: ",";\n    font-size: 3rem;\n    line-height: 3.25rem;\n    margin-bottom: 0;\n    @media only screen and (max-width: 620px) {\n      font-size: 2rem;\n    }\n  }\n"]);return P=function(){return e},e}var _,H=c.a.header(P(),(function(e){return e.theme.color.primary})),N=c.a.div(C()),W=c.a.div(S()),M=c.a.time(z(),Object(c.b)(1)),A=c.a.div(k()),I=c.a.div(E(),A),R=c.a.ul(j()),q=c.a.li(O(),Object(c.b)(1)),L=c.a.h6(x()),V=Object(c.a)((function(e){var t=e.excerpt,n=e.frontmatter,r=n.title,i=n.datePublished,o=n.tags;return a.createElement(a.Fragment,null,a.createElement(H,null,a.createElement("h1",null,r),a.createElement(N,null,a.createElement(W,null,a.createElement(A,null,a.createElement(v.b,{size:24})),a.createElement(M,null,i)),a.createElement(I,null,a.createElement(A,null,a.createElement(v.c,{size:24})),a.createElement(R,null,o.map((function(e,t){return a.createElement(q,{key:t},e)}))))),a.createElement(L,null,t)),a.createElement("hr",null))}))(y()),B=(_=function(e,t){return(_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),D=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return B(t,e),t}(Error);function T(e,t){if(!e)throw new D(t)}function U(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var F=n("TSYQ"),Y=n.n(F),J=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Q=function(){return(Q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},G=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((r=r.apply(e,t||[])).next())}))},X=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},K=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},Z=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},$=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},ee=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function te(e,t,n){var r=t.height,i=t.width,a=K(t,["height","width"]),o=Q({height:r,width:i,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(o).map((function(e){return e+"="+o[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3);return c}var ne=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,i=n.windowHeight,a=void 0===i?400:i,o=n.windowPosition,c=void 0===o?"windowCenter":o,l=n.windowWidth,u=void 0===l?550:l;te(e,Q({height:a,width:u},"windowCenter"===c?$(u,a):ee(u,a)),r)},t.handleClick=function(e){return G(t,void 0,void 0,(function(){var t,n,r,i,a,o,c,l,u,s;return X(this,(function(f){switch(f.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,i=t.networkLink,a=t.onClick,o=t.url,c=t.openShareDialogOnClick,l=t.opts,u=i(o,l),r?[2]:(e.preventDefault(),n?(s=n(),Z(s)?[4,s]:[3,2]):[3,2]);case 1:f.sent(),f.label=2;case 2:return c&&this.openShareDialog(u),a&&a(e,u),[2]}}))}))},t}return J(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,a=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),u=e.style,s=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,K(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=Y()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=Q(Q(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},u),r&&i);return o.a.createElement("button",Q({},s,{"aria-label":s["aria-label"]||c,className:f,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(a.Component),re=function(){return(re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};var ie=function(e,t,n,r){function i(i,a){var c=n(i),l=re({},i);return Object.keys(c).forEach((function(e){delete l[e]})),o.a.createElement(ne,re({},r,l,{forwardedRef:a,networkName:e,networkLink:t,opts:n(i)}))}return i.displayName="ShareButton-"+e,Object(a.forwardRef)(i)};var ae=ie("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return T(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+U({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),oe=function(){return(oe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},ce=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function le(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,i=t.iconFillColor,a=t.round,c=t.size,l=ce(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",oe({viewBox:"0 0 64 64",width:c,height:c},l),a?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.a.createElement("path",{d:e.path,fill:i}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var ue=le({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var se=ie("twitter",(function(e,t){var n=t.title,r=t.via,i=t.hashtags,a=void 0===i?[]:i,o=t.related,c=void 0===o?[]:o;return T(e,"twitter.url"),T(Array.isArray(a),"twitter.hashtags is not an array"),T(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+U({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),fe=le({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var pe=ie("linkedin",(function(e,t){var n=t.title,r=t.summary,i=t.source;return T(e,"linkedin.url"),"https://linkedin.com/shareArticle"+U({url:e,mini:"true",title:n,summary:r,source:i})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),de=le({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var he=ie("reddit",(function(e,t){var n=t.title;return T(e,"reddit.url"),"https://www.reddit.com/submit"+U({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),me=le({color:"#5f99cf",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"});var we=ie("whatsapp",(function(e,t){var n=t.title,r=t.separator;return T(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+U({text:n?n+r+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),be=le({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});var ge=ie("telegram",(function(e,t){var n=t.title;return T(e,"telegram.url"),"https://telegram.me/share/"+U({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400}),ve=le({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"});var ye=ie("email",(function(e,t){var n=t.subject,r=t.body,i=t.separator;return"mailto:"+U({subject:n,body:r?r+i+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),xe=le({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"});function Oe(){var e=Object(r.a)([""]);return Oe=function(){return e},e}function je(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 10px;\n  & > div {\n    cursor: pointer;\n    margin-right: 5px;\n  }\n"]);return je=function(){return e},e}var Ee=c.a.div(je()),ke=Object(c.a)((function(e){var t=e.className,n=e.url,r=e.title;return a.createElement(Ee,{className:t},a.createElement(ae,{url:n,quote:r},a.createElement(ue,{size:40})),a.createElement(se,{url:n,title:r},a.createElement(fe,{size:40})),a.createElement(pe,{url:n,title:r,windowWidth:750,windowHeight:600},a.createElement(de,{size:40})),a.createElement(he,{url:n,title:r,windowWidth:660,windowHeight:460},a.createElement(me,{size:40})),a.createElement(we,{url:n,title:r},a.createElement(be,{size:40})),a.createElement(ge,{url:n,title:r},a.createElement(ve,{size:40})),a.createElement(ye,{url:n,subject:r,body:n},a.createElement(xe,{size:40})))}))(Oe());function ze(){var e=Object(r.a)(["\n\n"]);return ze=function(){return e},e}var Se=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=t.site,r=t.markdownRemark,i=t.seoImage,a=e.pageContext,c=n.siteMetadata.imgSiteUrl,u=""+n.siteMetadata.siteUrl+r.fields.slug,s=i&&i.landscape?""+c+i.landscape.fluid.src:r.frontmatter.images&&r.frontmatter.images.length>0?""+c+r.frontmatter.images[0].publicURL:n.siteMetadata.image,f=Object.assign({},n.siteMetadata,r.frontmatter,{image:s,imageAlt:r.frontmatter.imageAlt,publisher:n.siteMetadata.organization}),p=r.frontmatter.title,d=r.frontmatter.description||r.excerpt;return console.log(r),o.a.createElement(l.a,{title:p,seoBlogPost:f},o.a.createElement(Ce,null,o.a.createElement(V,{frontmatter:r.frontmatter,excerpt:d}),o.a.createElement("section",{className:"blog-post",dangerouslySetInnerHTML:{__html:r.html}}),o.a.createElement(g,{previous:a.previous,next:a.next}),o.a.createElement(ke,{url:u,title:p})))},t}(o.a.PureComponent),Ce=c.a.div(ze())}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-5515a049d5a58b47c635.js.map