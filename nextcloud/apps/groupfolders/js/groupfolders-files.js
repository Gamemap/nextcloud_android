/*! For license information please see groupfolders-files.js.LICENSE.txt */
(()=>{var e,t,r={79753:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRootUrl=t.generateFilePath=t.imagePath=t.generateUrl=t.generateOcsUrl=t.generateRemoteUrl=t.linkTo=void 0,r(32359);t.linkTo=(e,t)=>o(e,"",t);t.generateRemoteUrl=e=>window.location.protocol+"//"+window.location.host+(e=>i()+"/remote.php/"+e)(e);t.generateOcsUrl=(e,t,r)=>{const o=1===Object.assign({ocsVersion:2},r||{}).ocsVersion?1:2;return window.location.protocol+"//"+window.location.host+i()+"/ocs/v"+o+".php"+n(e,t,r)};const n=(e,t,r)=>{const n=Object.assign({escape:!0},r||{});return"/"!==e.charAt(0)&&(e="/"+e),o=(o=t||{})||{},e.replace(/{([^{}]*)}/g,(function(e,t){var r=o[t];return n.escape?"string"==typeof r||"number"==typeof r?encodeURIComponent(r.toString()):encodeURIComponent(e):"string"==typeof r||"number"==typeof r?r.toString():e}));var o};t.generateUrl=(e,t,r)=>{const o=Object.assign({noRewrite:!1},r||{});return!0!==OC.config.modRewriteWorking||o.noRewrite?i()+"/index.php"+n(e,t,r):i()+n(e,t,r)};t.imagePath=(e,t)=>-1===t.indexOf(".")?o(e,"img",t+".svg"):o(e,"img",t);const o=(e,t,r)=>{const n=-1!==OC.coreApps.indexOf(e);let o=i();return"php"!==r.substring(r.length-3)||n?"php"===r.substring(r.length-3)||n?(o+="settings"!==e&&"core"!==e&&"search"!==e||"ajax"!==t?"/":"/index.php/",n||(o+="apps/"),""!==e&&(o+=e+="/"),t&&(o+=t+"/"),o+=r):(o=OC.appswebroots[e],t&&(o+="/"+t+"/"),"/"!==o.substring(o.length-1)&&(o+="/"),o+=r):(o+="/index.php/apps/"+e,"index.php"!==r&&(o+="/",t&&(o+=encodeURI(t+"/")),o+=r)),o};t.generateFilePath=o;const i=()=>OC.webroot;t.getRootUrl=i},12310:(e,t,r)=>{"use strict";var n=r(35642).charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},96943:(e,t,r)=>{var n=r(57199);e.exports=function(e){if(!n(e))throw TypeError(String(e)+" is not an object");return e}},33893:(e,t,r)=>{var n=r(18947),o=r(79917),i=r(3242),a=function(e){return function(t,r,a){var s,c=n(t),l=o(c.length),u=i(a,l);if(e&&r!=r){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===r)return e||u||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},61672:e=>{var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},22530:(e,t,r)=>{var n=r(90918),o=r(39652),i=r(63369),a=r(54769);e.exports=function(e,t){for(var r=o(t),s=a.f,c=i.f,l=0;l<r.length;l++){var u=r[l];n(e,u)||s(e,u,c(t,u))}}},78816:(e,t,r)=>{var n=r(19300),o=r(54769),i=r(33535);e.exports=n?function(e,t,r){return o.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},33535:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},19300:(e,t,r)=>{var n=r(83349);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},25085:(e,t,r)=>{var n=r(43005),o=r(57199),i=n.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},73785:(e,t,r)=>{var n=r(22679);e.exports=n("navigator","userAgent")||""},50218:(e,t,r)=>{var n,o,i=r(43005),a=r(73785),s=i.process,c=s&&s.versions,l=c&&c.v8;l?o=(n=l.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),e.exports=o&&+o},38063:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},30935:(e,t,r)=>{var n=r(43005),o=r(63369).f,i=r(78816),a=r(35140),s=r(79398),c=r(22530),l=r(94049);e.exports=function(e,t){var r,u,p,f,d,g=e.target,v=e.global,h=e.stat;if(r=v?n:h?n[g]||s(g,{}):(n[g]||{}).prototype)for(u in t){if(f=t[u],p=e.noTargetGet?(d=o(r,u))&&d.value:r[u],!l(v?u:g+(h?".":"#")+u,e.forced)&&void 0!==p){if(typeof f==typeof p)continue;c(f,p)}(e.sham||p&&p.sham)&&i(f,"sham",!0),a(r,u,f,e)}}},83349:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},93748:(e,t,r)=>{"use strict";r(80500);var n=r(35140),o=r(45960),i=r(83349),a=r(58064),s=r(78816),c=a("species"),l=RegExp.prototype;e.exports=function(e,t,r,u){var p=a(e),f=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),d=f&&!i((function(){var t=!1,r=/a/;return"split"===e&&((r={}).constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!f||!d||r){var g=/./[p],v=t(p,""[e],(function(e,t,r,n,i){var a=t.exec;return a===o||a===l.exec?f&&!i?{done:!0,value:g.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}));n(String.prototype,e,v[0]),n(l,p,v[1])}u&&s(l[p],"sham",!0)}},22679:(e,t,r)=>{var n=r(21146),o=r(43005),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(n[e])||i(o[e]):n[e]&&n[e][t]||o[e]&&o[e][t]}},70572:(e,t,r)=>{var n=r(44561),o=Math.floor,i="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,c,l,u){var p=r+e.length,f=c.length,d=s;return void 0!==l&&(l=n(l),d=a),i.call(u,d,(function(n,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(p);case"<":a=l[i.slice(1,-1)];break;default:var s=+i;if(0===s)return n;if(s>f){var u=o(s/10);return 0===u?n:u<=f?void 0===c[u-1]?i.charAt(1):c[u-1]+i.charAt(1):n}a=c[s-1]}return void 0===a?"":a}))}},43005:(e,t,r)=>{var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},90918:(e,t,r)=>{var n=r(44561),o={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return o.call(n(e),t)}},51418:e=>{e.exports={}},14922:(e,t,r)=>{var n=r(22679);e.exports=n("document","documentElement")},3723:(e,t,r)=>{var n=r(19300),o=r(83349),i=r(25085);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},23833:(e,t,r)=>{var n=r(83349),o=r(61672),i="".split;e.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},739:(e,t,r)=>{var n=r(57454),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(e){return o.call(e)}),e.exports=n.inspectSource},11864:(e,t,r)=>{var n,o,i,a=r(18442),s=r(43005),c=r(57199),l=r(78816),u=r(90918),p=r(57454),f=r(82051),d=r(51418),g="Object already initialized",v=s.WeakMap;if(a||p.state){var h=p.state||(p.state=new v),m=h.get,y=h.has,b=h.set;n=function(e,t){if(y.call(h,e))throw new TypeError(g);return t.facade=e,b.call(h,e,t),t},o=function(e){return m.call(h,e)||{}},i=function(e){return y.call(h,e)}}else{var O=f("state");d[O]=!0,n=function(e,t){if(u(e,O))throw new TypeError(g);return t.facade=e,l(e,O,t),t},o=function(e){return u(e,O)?e[O]:{}},i=function(e){return u(e,O)}}e.exports={set:n,get:o,has:i,enforce:function(e){return i(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!c(t)||(r=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}}}},94049:(e,t,r)=>{var n=r(83349),o=/#|\.prototype\./,i=function(e,t){var r=s[a(e)];return r==l||r!=c&&("function"==typeof t?n(t):!!t)},a=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",l=i.POLYFILL="P";e.exports=i},57199:e=>{e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},58057:e=>{e.exports=!1},19950:(e,t,r)=>{var n=r(50218),o=r(83349);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},18442:(e,t,r)=>{var n=r(43005),o=r(739),i=n.WeakMap;e.exports="function"==typeof i&&/native code/.test(o(i))},2863:(e,t,r)=>{var n,o=r(96943),i=r(14229),a=r(38063),s=r(51418),c=r(14922),l=r(25085),u=r(82051),p=u("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"</"+"script>"},g=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;g=n?function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t}(n):((t=l("iframe")).style.display="none",c.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F);for(var r=a.length;r--;)delete g.prototype[a[r]];return g()};s[p]=!0,e.exports=Object.create||function(e,t){var r;return null!==e?(f.prototype=o(e),r=new f,f.prototype=null,r[p]=e):r=g(),void 0===t?r:i(r,t)}},14229:(e,t,r)=>{var n=r(19300),o=r(54769),i=r(96943),a=r(30967);e.exports=n?Object.defineProperties:function(e,t){i(e);for(var r,n=a(t),s=n.length,c=0;s>c;)o.f(e,r=n[c++],t[r]);return e}},54769:(e,t,r)=>{var n=r(19300),o=r(3723),i=r(96943),a=r(87509),s=Object.defineProperty;t.f=n?s:function(e,t,r){if(i(e),t=a(t,!0),i(r),o)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},63369:(e,t,r)=>{var n=r(19300),o=r(91183),i=r(33535),a=r(18947),s=r(87509),c=r(90918),l=r(3723),u=Object.getOwnPropertyDescriptor;t.f=n?u:function(e,t){if(e=a(e),t=s(t,!0),l)try{return u(e,t)}catch(e){}if(c(e,t))return i(!o.f.call(e,t),e[t])}},32787:(e,t,r)=>{var n=r(32307),o=r(38063).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},32659:(e,t)=>{t.f=Object.getOwnPropertySymbols},32307:(e,t,r)=>{var n=r(90918),o=r(18947),i=r(33893).indexOf,a=r(51418);e.exports=function(e,t){var r,s=o(e),c=0,l=[];for(r in s)!n(a,r)&&n(s,r)&&l.push(r);for(;t.length>c;)n(s,r=t[c++])&&(~i(l,r)||l.push(r));return l}},30967:(e,t,r)=>{var n=r(32307),o=r(38063);e.exports=Object.keys||function(e){return n(e,o)}},91183:(e,t)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);t.f=o?function(e){var t=n(this,e);return!!t&&t.enumerable}:r},39652:(e,t,r)=>{var n=r(22679),o=r(32787),i=r(32659),a=r(96943);e.exports=n("Reflect","ownKeys")||function(e){var t=o.f(a(e)),r=i.f;return r?t.concat(r(e)):t}},21146:(e,t,r)=>{var n=r(43005);e.exports=n},35140:(e,t,r)=>{var n=r(43005),o=r(78816),i=r(90918),a=r(79398),s=r(739),c=r(11864),l=c.get,u=c.enforce,p=String(String).split("String");(e.exports=function(e,t,r,s){var c,l=!!s&&!!s.unsafe,f=!!s&&!!s.enumerable,d=!!s&&!!s.noTargetGet;"function"==typeof r&&("string"!=typeof t||i(r,"name")||o(r,"name",t),(c=u(r)).source||(c.source=p.join("string"==typeof t?t:""))),e!==n?(l?!d&&e[t]&&(f=!0):delete e[t],f?e[t]=r:o(e,t,r)):f?e[t]=r:a(t,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||s(this)}))},60681:(e,t,r)=>{var n=r(61672),o=r(45960);e.exports=function(e,t){var r=e.exec;if("function"==typeof r){var i=r.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},45960:(e,t,r)=>{"use strict";var n,o,i=r(63807),a=r(95618),s=r(67857),c=r(2863),l=r(11864).get,u=r(24),p=r(27040),f=RegExp.prototype.exec,d=s("native-string-replace",String.prototype.replace),g=f,v=(n=/a/,o=/b*/g,f.call(n,"a"),f.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),h=a.UNSUPPORTED_Y||a.BROKEN_CARET,m=void 0!==/()??/.exec("")[1];(v||m||h||u||p)&&(g=function(e){var t,r,n,o,a,s,u,p=this,y=l(p),b=y.raw;if(b)return b.lastIndex=p.lastIndex,t=g.call(b,e),p.lastIndex=b.lastIndex,t;var O=y.groups,x=h&&p.sticky,P=i.call(p),_=p.source,E=0,C=e;if(x&&(-1===(P=P.replace("y","")).indexOf("g")&&(P+="g"),C=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(_="(?: "+_+")",C=" "+C,E++),r=new RegExp("^(?:"+_+")",P)),m&&(r=new RegExp("^"+_+"$(?!\\s)",P)),v&&(n=p.lastIndex),o=f.call(x?r:p,C),x?o?(o.input=o.input.slice(E),o[0]=o[0].slice(E),o.index=p.lastIndex,p.lastIndex+=o[0].length):p.lastIndex=0:v&&o&&(p.lastIndex=p.global?o.index+o[0].length:n),m&&o&&o.length>1&&d.call(o[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&O)for(o.groups=s=c(null),a=0;a<O.length;a++)s[(u=O[a])[0]]=o[u[1]];return o}),e.exports=g},63807:(e,t,r)=>{"use strict";var n=r(96943);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},95618:(e,t,r)=>{var n=r(83349),o=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=n((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},24:(e,t,r)=>{var n=r(83349);e.exports=n((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},27040:(e,t,r)=>{var n=r(83349);e.exports=n((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1992:e=>{e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},79398:(e,t,r)=>{var n=r(43005),o=r(78816);e.exports=function(e,t){try{o(n,e,t)}catch(r){n[e]=t}return t}},82051:(e,t,r)=>{var n=r(67857),o=r(38814),i=n("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},57454:(e,t,r)=>{var n=r(43005),o=r(79398),i="__core-js_shared__",a=n[i]||o(i,{});e.exports=a},67857:(e,t,r)=>{var n=r(58057),o=r(57454);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.15.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},35642:(e,t,r)=>{var n=r(84064),o=r(1992),i=function(e){return function(t,r){var i,a,s=String(o(t)),c=n(r),l=s.length;return c<0||c>=l?e?"":void 0:(i=s.charCodeAt(c))<55296||i>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):i:e?s.slice(c,c+2):a-56320+(i-55296<<10)+65536}};e.exports={codeAt:i(!1),charAt:i(!0)}},3242:(e,t,r)=>{var n=r(84064),o=Math.max,i=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):i(r,t)}},18947:(e,t,r)=>{var n=r(23833),o=r(1992);e.exports=function(e){return n(o(e))}},84064:e=>{var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},79917:(e,t,r)=>{var n=r(84064),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},44561:(e,t,r)=>{var n=r(1992);e.exports=function(e){return Object(n(e))}},87509:(e,t,r)=>{var n=r(57199);e.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},38814:e=>{var t=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++t+r).toString(36)}},93558:(e,t,r)=>{var n=r(19950);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},58064:(e,t,r)=>{var n=r(43005),o=r(67857),i=r(90918),a=r(38814),s=r(19950),c=r(93558),l=o("wks"),u=n.Symbol,p=c?u:u&&u.withoutSetter||a;e.exports=function(e){return i(l,e)&&(s||"string"==typeof l[e])||(s&&i(u,e)?l[e]=u[e]:l[e]=p("Symbol."+e)),l[e]}},80500:(e,t,r)=>{"use strict";var n=r(30935),o=r(45960);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},32359:(e,t,r)=>{"use strict";var n=r(93748),o=r(83349),i=r(96943),a=r(79917),s=r(84064),c=r(1992),l=r(12310),u=r(70572),p=r(60681),f=r(58064)("replace"),d=Math.max,g=Math.min,v="$0"==="a".replace(/./,"$0"),h=!!/./[f]&&""===/./[f]("a","$0");n("replace",(function(e,t,r){var n=h?"$":"$0";return[function(e,r){var n=c(this),o=null==e?void 0:e[f];return void 0!==o?o.call(e,n,r):t.call(String(n),e,r)},function(e,o){if("string"==typeof o&&-1===o.indexOf(n)&&-1===o.indexOf("$<")){var c=r(t,this,e,o);if(c.done)return c.value}var f=i(this),v=String(e),h="function"==typeof o;h||(o=String(o));var m=f.global;if(m){var y=f.unicode;f.lastIndex=0}for(var b=[];;){var O=p(f,v);if(null===O)break;if(b.push(O),!m)break;""===String(O[0])&&(f.lastIndex=l(v,a(f.lastIndex),y))}for(var x,P="",_=0,E=0;E<b.length;E++){O=b[E];for(var C=String(O[0]),T=d(g(s(O.index),v.length),0),R=[],S=1;S<O.length;S++)R.push(void 0===(x=O[S])?x:String(x));var A=O.groups;if(h){var w=[C].concat(R,T,v);void 0!==A&&w.push(A);var I=String(o.apply(void 0,w))}else I=u(C,v,T,R,A,o);T>=_&&(P+=v.slice(_,T)+I,_=T+C.length)}return P+v.slice(_)}]}),!!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!v||h)},5225:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n,o=r(10387),i=r(28074);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"},l=function(e){e._client.getPropertyBody=function(e,t){var r,n=this.parseClarkNotation(e);if(r=this.xmlNamespaces[n.namespace]?this.xmlNamespaces[n.namespace]+":"+n.name:"x:"+n.name+' xmlns:x="'+n.namespace+'"',Array.isArray(t)){var o="";for(var i in t)Object.prototype.hasOwnProperty.call(t[i],"type")&&Object.prototype.hasOwnProperty.call(t[i],"data")?o+=this.getPropertyBody(t[i].type,t[i].data):o+=this.getPropertyBody(i,t[i]);return"      <"+r+">"+o+"</"+r+">"}if("object"===s(t)){var a="";if(Object.prototype.hasOwnProperty.call(t,"type")&&Object.prototype.hasOwnProperty.call(t,"data"))return this.getPropertyBody(t.type,t.data);for(var l in t)a+=this.getPropertyBody(l,t[l]);return"      <"+r+">"+a+"</"+r+">"}return"d:resourcetype"!==r&&(t=(""+t).replace(/[<>&"']/g,(function(e){return c[e]}))),"      <"+r+">"+t+"</"+r+">"},e._client._renderPropSet=function(e){var t="  <d:set>\n   <d:prop>\n";for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t+=this.getPropertyBody(r,e[r]));return t+="    </d:prop>\n",t+="  </d:set>\n"}},u=function(e){for(var t=[],r=0;r<e.length;r++){var n={mask:0,permissions:0};for(var o in e[r].children){var i=e[r].children[o];if(i.nodeName)switch(i.nodeName.split(":")[1]||""){case"acl-mapping-id":n.mappingId=i.textContent||i.text;break;case"acl-mapping-type":n.mappingType=i.textContent||i.text;break;case"acl-mapping-display-name":n.mappingDisplayName=i.textContent||i.text;break;case"acl-mask":n.mask=parseInt(i.textContent||i.text,10);break;case"acl-permissions":n.permissions=parseInt(i.textContent||i.text,10)}}t.push(n)}return t},p={attach:function(e){(n=e.filesClient).addFileInfoParser((function(e){var t={},r=e.propStat[0].properties,n=r[o.Z.GROUP_FOLDER_ID];void 0!==n&&(t.groupFolderId=n);var i=r[o.Z.PROPERTY_ACL_ENABLED];void 0!==i&&(t.aclEnabled=!!i);var a=r[o.Z.PROPERTY_ACL_CAN_MANAGE];void 0!==a&&(t.aclCanManage=!!a);var s=r[o.Z.PROPERTY_ACL_LIST]||[],c=r[o.Z.PROPERTY_INHERITED_ACL_LIST]||[];return t.acl=u(s),t.inheritedAcls=u(c),t.acl.map((function(e){var r=t.inheritedAcls.find((function(t){return t.mappingType===e.mappingType&&t.mappingId===e.mappingId}));return r&&(e.permissions=e.permissions&e.mask|r.permissions&~e.mask),e})),t})),l(n)}};!function(e){Object.assign(e.Files.Client,o.Z)}(window.OC),OC.Plugins.register("OCA.Files.FileList",p);const f=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,s;return t=e,(r=[{key:"propFind",value:function(e){return n.getFileInfo(e.path+"/"+e.name,{properties:[o.Z.PROPERTY_ACL_LIST,o.Z.PROPERTY_INHERITED_ACL_LIST,o.Z.GROUP_FOLDER_ID,o.Z.PROPERTY_ACL_ENABLED,o.Z.PROPERTY_ACL_CAN_MANAGE]}).then((function(e,t){if(t){var r={},n={};for(var o in t.acl){var a=new i.Z;a.fromValues(t.acl[o].mappingType,t.acl[o].mappingId,t.acl[o].mappingDisplayName,t.acl[o].mask,t.acl[o].permissions),r[a.getUniqueMappingIdentifier()]=a}for(var s in t.inheritedAcls){var c=new i.Z;c.fromValues(t.inheritedAcls[s].mappingType,t.inheritedAcls[s].mappingId,t.inheritedAcls[s].mappingDisplayName,t.inheritedAcls[s].mask,t.inheritedAcls[s].permissions,!0);var l=c.getUniqueMappingIdentifier();n[l]=c,null==r[l]&&(r[l]=c)}return{acls:Object.values(r),inheritedAclsById:n,aclEnabled:t.aclEnabled,aclCanManage:t.aclCanManage,groupFolderId:t.groupFolderId}}return null}))}},{key:"propPatch",value:function(e,t){var r=[];for(var i in t)r.push({type:o.Z.PROPERTY_ACL_ENTRY,data:t[i].getProperties()});var a={};return a[o.Z.PROPERTY_ACL_LIST]=r,n._client.propPatch(n._client.baseUrl+e.path+"/"+e.name,a)}}])&&a(t.prototype,r),s&&a(t,s),e}())},10387:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={PROPERTY_ACL_LIST:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-list",PROPERTY_ACL_ENTRY:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl",PROPERTY_ACL_MAPPING_TYPE:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mapping-type",PROPERTY_ACL_MAPPING_ID:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mapping-id",PROPERTY_ACL_MASK:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-mask",PROPERTY_ACL_PERMISSIONS:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-permissions",PROPERTY_ACL_ENABLED:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-enabled",PROPERTY_ACL_CAN_MANAGE:"{"+OC.Files.Client.NS_NEXTCLOUD+"}acl-can-manage",PROPERTY_INHERITED_ACL_LIST:"{"+OC.Files.Client.NS_NEXTCLOUD+"}inherited-acl-list",GROUP_FOLDER_ID:"{"+OC.Files.Client.NS_NEXTCLOUD+"}group-folder-id"}},28074:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(10387);function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,i;return t=e,(r=[{key:"fromProperties",value:function(e){this.mappingType=e[n.Z.PROPERTY_ACL_MAPPING_TYPE],this.mappingId=e[n.Z.PROPERTY_ACL_MAPPING_ID],this.mask=e[n.Z.PROPERTY_ACL_MASK],this.permissions=e[n.Z.PROPERTY_ACL_PERMISSIONS]}},{key:"fromValues",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:31,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.mappingType=e,this.mappingId=t,this.mappingDisplayName=r,this.mask=n,this.permissions=o,this.inherited=i}},{key:"getProperties",value:function(){var e={};return e[n.Z.PROPERTY_ACL_MAPPING_TYPE]=this.mappingType,e[n.Z.PROPERTY_ACL_MAPPING_ID]=this.mappingId,e[n.Z.PROPERTY_ACL_MASK]=this.mask,e[n.Z.PROPERTY_ACL_PERMISSIONS]=this.permissions,e}},{key:"getUniqueMappingIdentifier",value:function(){return this.mappingType+":"+this.mappingId}},{key:"clone",value:function(){var t=this,r=new e;return Object.getOwnPropertyNames(this).forEach((function(e){r[e]=t[e]})),r}}])&&o(t.prototype,r),i&&o(t,i),e}()}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return r[e].call(i.exports,i,i.exports,o),i.exports}o.m=r,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>"groupfolders-"+e+".js?v="+{"vendors-node_modules_nextcloud_vue_dist_ncvuecomponents_js-node_modules_css-loader_dist_runti-78a4de":"d14d23ac915283b7644e",sharing:"26deff214ee47168b803"}[e],o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="groupfolders:",o.l=(r,n,i,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==r||p.getAttribute("data-webpack")==t+i){s=p;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var f=(t,n)=>{s.onerror=s.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/apps/groupfolders/js/",(()=>{o.b=document.baseURI||self.location.href;var e={files:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=i);var a=o.p+o.u(t),s=new Error;o.l(a,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,i,[a,s,c]=r,l=0;for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)c(o);for(t&&t(r);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0},r=self.webpackChunkgroupfolders=self.webpackChunkgroupfolders||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=o(79753);o(5225);o.nc=btoa(OC.requestToken),o.p=OC.linkTo("groupfolders","js/"),window.addEventListener("DOMContentLoaded",(function(){var t,r;OCA.Theming?OC.MimeType._mimeTypeIcons["dir-group"]=(0,e.generateUrl)("/apps/theming/img/groupfolders/folder-group.svg?v="+OCA.Theming.cacheBuster):OC.MimeType._mimeTypeIcons["dir-group"]=(0,e.imagePath)("groupfolders","folder-group"),null!==(t=OCA)&&void 0!==t&&null!==(r=t.Sharing)&&void 0!==r&&r.ShareTabSections&&Promise.all([o.e("vendors-node_modules_nextcloud_vue_dist_ncvuecomponents_js-node_modules_css-loader_dist_runti-78a4de"),o.e("sharing")]).then(o.bind(o,77975)).then((function(e){OCA.Sharing.ShareTabSections.registerSection((function(t,r){if("group"===r.mountType)return e.default}))}))}))})()})();
//# sourceMappingURL=groupfolders-files.js.map?v=d0c0a68b7db624362929