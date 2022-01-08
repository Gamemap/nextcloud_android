try{self["workbox:core:6.2.4"]&&_()}catch(t){}const t=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class e extends Error{constructor(e,s){super(t(e,s)),this.name=e,this.details=s}}try{self["workbox:routing:6.2.4"]&&_()}catch(t){}const s=t=>t&&"object"==typeof t?t:{handle:t};class n{constructor(t,e,n="GET"){this.handler=s(e),this.match=t,this.method=n}setCatchHandler(t){this.catchHandler=s(t)}}class r extends n{constructor(t,e,s){super((({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)}),e,s)}}class i{constructor(){this.t=new Map,this.i=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map((e=>{"string"==typeof e&&(e=[e]);const s=new Request(...e);return this.handleRequest({request:s,event:t})})));t.waitUntil(s),t.ports&&t.ports[0]&&s.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const n=s.origin===location.origin,{params:r,route:i}=this.findMatchingRoute({event:e,request:t,sameOrigin:n,url:s});let a=i&&i.handler;const o=t.method;if(!a&&this.i.has(o)&&(a=this.i.get(o)),!a)return;let c;try{c=a.handle({url:s,request:t,event:e,params:r})}catch(t){c=Promise.reject(t)}const h=i&&i.catchHandler;return c instanceof Promise&&(this.o||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:s,request:t,event:e,params:r})}catch(t){t instanceof Error&&(n=t)}if(this.o)return this.o.handle({url:s,request:t,event:e});throw n}))),c}findMatchingRoute({url:t,sameOrigin:e,request:s,event:n}){const r=this.t.get(s.method)||[];for(const i of r){let r;const a=i.match({url:t,sameOrigin:e,request:s,event:n});if(a)return r=a,(Array.isArray(r)&&0===r.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(r=void 0),{route:i,params:r}}return{}}setDefaultHandler(t,e="GET"){this.i.set(e,s(t))}setCatchHandler(t){this.o=s(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new e("unregister-route-but-not-found-with-method",{method:t.method});const s=this.t.get(t.method).indexOf(t);if(!(s>-1))throw new e("unregister-route-route-not-registered");this.t.get(t.method).splice(s,1)}}let a;const o=()=>(a||(a=new i,a.addFetchListener(),a.addCacheListener()),a);const c={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},h=t=>[c.prefix,t,c.suffix].filter((t=>t&&t.length>0)).join("-"),u=t=>t||h(c.runtime);function f(t){t.then((()=>{}))}const l=new Set;function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}let d,p;const m=new WeakMap,y=new WeakMap,g=new WeakMap,v=new WeakMap,D=new WeakMap;let b={get(t,e,s){if(t instanceof IDBTransaction){if("done"===e)return y.get(t);if("objectStoreNames"===e)return t.objectStoreNames||g.get(t);if("store"===e)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return E(t[e])},set:(t,e,s)=>(t[e]=s,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function q(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(p||(p=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(x(this),e),E(m.get(this))}:function(...e){return E(t.apply(x(this),e))}:function(e,...s){const n=t.call(x(this),e,...s);return g.set(n,e.sort?e.sort():[e]),E(n)}}function R(t){return"function"==typeof t?q(t):(t instanceof IDBTransaction&&function(t){if(y.has(t))return;const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),n()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),n()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));y.set(t,e)}(t),e=t,(d||(d=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,b):t);var e}function E(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,s)=>{const n=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(E(t.result)),n()},i=()=>{s(t.error),n()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&m.set(e,t)})).catch((()=>{})),D.set(e,t),e}(t);if(v.has(t))return v.get(t);const e=R(t);return e!==t&&(v.set(t,e),D.set(e,t)),e}const x=t=>D.get(t);const I=["get","getKey","getAll","getAllKeys","count"],B=["put","add","delete","clear"],O=new Map;function C(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(O.get(e))return O.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,r=B.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!I.includes(s))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let a=i.store;return n&&(a=a.index(e.shift())),(await Promise.all([a[s](...e),r&&i.done]))[0]};return O.set(e,i),i}b=(t=>w({},t,{get:(e,s,n)=>C(e,s)||t.get(e,s,n),has:(e,s)=>!!C(e,s)||t.has(e,s)}))(b);try{self["workbox:expiration:6.2.4"]&&_()}catch(t){}const N=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class k{constructor(t){this.h=null,this.u=t}l(t){const e=t.createObjectStore("cache-entries",{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1})}p(t){this.l(t),this.u&&function(t,{blocked:e}={}){const s=indexedDB.deleteDatabase(t);e&&s.addEventListener("blocked",(()=>e())),E(s).then((()=>{}))}(this.u)}async setTimestamp(t,e){const s={url:t=N(t),timestamp:e,cacheName:this.u,id:this.m(t)},n=(await this.getDb()).transaction("cache-entries","readwrite",{durability:"relaxed"});await n.store.put(s),await n.done}async getTimestamp(t){const e=await this.getDb(),s=await e.get("cache-entries",this.m(t));return null==s?void 0:s.timestamp}async expireEntries(t,e){const s=await this.getDb();let n=await s.transaction("cache-entries").store.index("timestamp").openCursor(null,"prev");const r=[];let i=0;for(;n;){const s=n.value;s.cacheName===this.u&&(t&&s.timestamp<t||e&&i>=e?r.push(n.value):i++),n=await n.continue()}const a=[];for(const t of r)await s.delete("cache-entries",t.id),a.push(t.url);return a}m(t){return this.u+"|"+N(t)}async getDb(){return this.h||(this.h=await function(t,e,{blocked:s,upgrade:n,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),o=E(a);return n&&a.addEventListener("upgradeneeded",(t=>{n(E(a.result),t.oldVersion,t.newVersion,E(a.transaction))})),s&&a.addEventListener("blocked",(()=>s())),o.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}("workbox-expiration",1,{upgrade:this.p.bind(this)})),this.h}}class j{constructor(t,e={}){this.g=!1,this.v=!1,this.D=e.maxEntries,this.q=e.maxAgeSeconds,this.R=e.matchOptions,this.u=t,this.I=new k(t)}async expireEntries(){if(this.g)return void(this.v=!0);this.g=!0;const t=this.q?Date.now()-1e3*this.q:0,e=await this.I.expireEntries(t,this.D),s=await self.caches.open(this.u);for(const t of e)await s.delete(t,this.R);this.g=!1,this.v&&(this.v=!1,f(this.expireEntries()))}async updateTimestamp(t){await this.I.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.q){const e=await this.I.getTimestamp(t),s=Date.now()-1e3*this.q;return void 0===e||e<s}return!1}async delete(){this.v=!1,await this.I.expireEntries(1/0)}}function M(t,e){const s=new URL(t);for(const t of e)s.searchParams.delete(t);return s.href}class S{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}try{self["workbox:strategies:6.2.4"]&&_()}catch(t){}function T(t){return"string"==typeof t?new Request(t):t}class A{constructor(t,e){this.B={},Object.assign(this,e),this.event=e.event,this.O=t,this.C=new S,this.N=[],this._=[...t.plugins],this.k=new Map;for(const t of this._)this.k.set(t,{});this.event.waitUntil(this.C.promise)}async fetch(t){const{event:s}=this;let n=T(t);if("navigate"===n.mode&&s instanceof FetchEvent&&s.preloadResponse){const t=await s.preloadResponse;if(t)return t}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:s})}catch(t){if(t instanceof Error)throw new e("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const i=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this.O.fetchOptions);for(const e of this.iterateCallbacks("fetchDidSucceed"))t=await e({event:s,request:i,response:t});return t}catch(t){throw r&&await this.runCallbacks("fetchDidFail",{error:t,event:s,originalRequest:r.clone(),request:i.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=T(t);let s;const{cacheName:n,matchOptions:r}=this.O,i=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},r),{cacheName:n});s=await caches.match(i,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:n,matchOptions:r,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(t,s){const n=T(t);var r;await(r=0,new Promise((t=>setTimeout(t,r))));const i=await this.getCacheKey(n,"write");if(!s)throw new e("cache-put-with-no-response",{url:(a=i.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const o=await this.j(s);if(!o)return!1;const{cacheName:c,matchOptions:h}=this.O,u=await self.caches.open(c),f=this.hasCallback("cacheDidUpdate"),w=f?await async function(t,e,s,n){const r=M(e.url,s);if(e.url===r)return t.match(e,n);const i=Object.assign(Object.assign({},n),{ignoreSearch:!0}),a=await t.keys(e,i);for(const e of a)if(r===M(e.url,s))return t.match(e,n)}(u,i.clone(),["__WB_REVISION__"],h):null;try{await u.put(i,f?o.clone():o)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await async function(){for(const t of l)await t()}(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:c,oldResponse:w,newResponse:o.clone(),request:i,event:this.event});return!0}async getCacheKey(t,e){if(!this.B[e]){let s=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))s=T(await t({mode:e,request:s,event:this.event,params:this.params}));this.B[e]=s}return this.B[e]}hasCallback(t){for(const e of this.O.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.O.plugins)if("function"==typeof e[t]){const s=this.k.get(e),n=n=>{const r=Object.assign(Object.assign({},n),{state:s});return e[t](r)};yield n}}waitUntil(t){return this.N.push(t),t}async doneWaiting(){let t;for(;t=this.N.shift();)await t}destroy(){this.C.resolve(null)}async j(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())),function(t,s,i){let a;if("string"==typeof t){const e=new URL(t,location.href);a=new n((({url:t})=>t.href===e.href),s,i)}else if(t instanceof RegExp)a=new r(t,s,i);else if("function"==typeof t)a=new n(t,s,i);else{if(!(t instanceof n))throw new e("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=t}o().registerRoute(a)}(/^.*\/core\/preview\?fileId=.*/,new class extends class{constructor(t={}){this.cacheName=u(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,n="params"in t?t.params:void 0,r=new A(this,{event:e,request:s,params:n}),i=this.M(r,s,e);return[i,this.S(i,r,s,e)]}async M(t,s,n){let r;await t.runCallbacks("handlerWillStart",{event:n,request:s});try{if(r=await this.T(s,t),!r||"error"===r.type)throw new e("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const i of t.iterateCallbacks("handlerDidError"))if(r=await i({error:e,event:n,request:s}),r)break;if(!r)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))r=await e({event:n,request:s,response:r});return r}async S(t,e,s,n){let r,i;try{r=await t}catch(i){}try{await e.runCallbacks("handlerDidRespond",{event:n,request:s,response:r}),await e.doneWaiting()}catch(t){t instanceof Error&&(i=t)}if(await e.runCallbacks("handlerDidComplete",{event:n,request:s,response:r,error:i}),e.destroy(),i)throw i}}{async T(t,s){let n,r=await s.cacheMatch(t);if(!r)try{r=await s.fetchAndCachePut(t)}catch(t){t instanceof Error&&(n=t)}if(!r)throw new e("no-response",{url:t.url,error:n});return r}}({cacheName:"images",plugins:[new class{constructor(t={}){this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const r=this.A(n),i=this.U(s);f(i.expireEntries());const a=i.updateTimestamp(e.url);if(t)try{t.waitUntil(a)}catch(t){}return r?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.U(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.W=t,this.q=t.maxAgeSeconds,this.P=new Map,t.purgeOnQuotaError&&function(t){l.add(t)}((()=>this.deleteCacheAndMetadata()))}U(t){if(t===u())throw new e("expire-custom-caches-only");let s=this.P.get(t);return s||(s=new j(t,this.W),this.P.set(t,s)),s}A(t){if(!this.q)return!0;const e=this.L(t);if(null===e)return!0;return e>=Date.now()-1e3*this.q}L(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.P)await self.caches.delete(t),await e.delete();this.P=new Map}}({maxAgeSeconds:604800,maxEntries:1e4})]}),"GET");
