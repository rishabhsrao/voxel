/*! modernizr 3.0.0-alpha.3 (Custom Build) | MIT *
 * http://v3.modernizr.com/download/#-cssremunit-csstransforms-csstransitions-fontface-mediaqueries-opacity-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in y){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?E[s[0]]=o:(!E[s[0]]||E[s[0]]instanceof Boolean||(E[s[0]]=new Boolean(E[s[0]])),E[s[0]][s[1]]=o),g.push((o?"":"no-")+s.join("-"))}}function i(e){var t=S.className,n=E._config.classPrefix||"";if(E._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}E._config.enableClasses&&(t+=" "+n+e.join(" "+n),S.className=t)}function a(){var e=t.body;return e||(e=b("body"),e.fake=!0),e}function s(e,t,n,r){var o,i,s,l,c="modernizr",u=b("div"),f=a();if(parseInt(n,10))for(;n--;)s=b("div"),s.id=r?r[n]:c+(n+1),u.appendChild(s);return o=["&#173;",'<style id="s',c,'">',e,"</style>"].join(""),u.id=c,(f.fake?f:u).innerHTML+=o,f.appendChild(u),f.fake&&(f.style.background="",f.style.overflow="hidden",l=S.style.overflow,S.style.overflow="hidden",S.appendChild(f)),i=t(u,e),f.fake?(f.parentNode.removeChild(f),S.style.overflow=l,S.offsetHeight):u.parentNode.removeChild(u),!!i}function l(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?u(o,n||t):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+d(t[o])+":"+r+")");return i=i.join(" or "),s("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function p(e,t,o,i){function a(){u&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var s=m(e,o);if(!r(s,"undefined"))return s}var u,f,d,p,h;for(N.style||(u=!0,N.modElem=b("modernizr"),N.style=N.modElem.style),d=e.length,f=0;d>f;f++)if(p=e[f],h=N.style[p],l(p,"-")&&(p=c(p)),N.style[p]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?p:!0;try{N.style[p]=o}catch(v){}if(N.style[p]!=h)return a(),"pfx"==t?p:!0}return a(),!1}function h(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+k.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?p(s,t,o,i):(s=(e+" "+F.join(a+" ")+a).split(" "),f(s,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var g=[];!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,c(t)}function i(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function c(e){e||(e=t);var r=i(e);return!C.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var u,f,d="3.7.2",m=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,f=!0}}();var C={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:m.shivCSS!==!1,supportsUnknownElements:f,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,c(t)}(this,t);var y=[],C={_version:"3.0.0-alpha.3",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},E=function(){};E.prototype=C,E=new E;var S=t.documentElement,b=function(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):t.createElement.apply(t,arguments)};E.addTest("cssremunit",function(){var e=b("div");try{e.style.fontSize="3rem"}catch(t){}return/rem/.test(e.style.fontSize)});var x=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=x,E.addTest("opacity",function(){var e=b("div"),t=e.style;return t.cssText=x.join("opacity:.55;"),/^0.55$/.test(t.opacity)});var w=C.testStyles=s,T=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||r}();T?E.addTest("fontface",!1):w('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),o=r.sheet||r.styleSheet,i=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",a=/src/i.test(i)&&0===i.indexOf(n.split(" ")[0]);E.addTest("fontface",a)});var _=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return s("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}(),z=C.mq=_;E.addTest("mediaqueries",z("only all"));var j="Moz O ms Webkit",k=C._config.usePrefixes?j.split(" "):[];C._cssomPrefixes=k;var F=C._config.usePrefixes?j.toLowerCase().split(" "):[];C._domPrefixes=F;var M={elem:b("modernizr")};E._q.push(function(){delete M.elem});var N={style:M.elem.style};E._q.unshift(function(){delete N.style}),C.testAllProps=h,C.testAllProps=v,E.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),E.addTest("csstransitions",v("transition","all",!0)),o(),i(g),delete C.addTest,delete C.addAsyncTest;for(var P=0;P<E._q.length;P++)E._q[P]();e.Modernizr=E}(window,document);