if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/DKztwU2-IfO9YAmhShIDK/_buildManifest.js",revision:"e39269f017eb781090fb9e67508671ac"},{url:"/_next/static/DKztwU2-IfO9YAmhShIDK/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/675-73f8f675ff653281.js",revision:"73f8f675ff653281"},{url:"/_next/static/chunks/framework-bb5c596eafb42b22.js",revision:"bb5c596eafb42b22"},{url:"/_next/static/chunks/main-bd60e7e9049c7f9b.js",revision:"bd60e7e9049c7f9b"},{url:"/_next/static/chunks/pages/404-f3305a06212d9fbc.js",revision:"f3305a06212d9fbc"},{url:"/_next/static/chunks/pages/500-d4691c9f41f6b48d.js",revision:"d4691c9f41f6b48d"},{url:"/_next/static/chunks/pages/_app-ea630980e8f91b77.js",revision:"ea630980e8f91b77"},{url:"/_next/static/chunks/pages/_error-effe22be6ff34abe.js",revision:"effe22be6ff34abe"},{url:"/_next/static/chunks/pages/credits-d852b02726296322.js",revision:"d852b02726296322"},{url:"/_next/static/chunks/pages/howtogetstarted-21f83d27859bba21.js",revision:"21f83d27859bba21"},{url:"/_next/static/chunks/pages/index-84c724de29befb50.js",revision:"84c724de29befb50"},{url:"/_next/static/chunks/pages/privacy-f7e3c068664fdac1.js",revision:"f7e3c068664fdac1"},{url:"/_next/static/chunks/pages/repositories-386379f5f7c69464.js",revision:"386379f5f7c69464"},{url:"/_next/static/chunks/pages/tos-8d48668a99f817dc.js",revision:"8d48668a99f817dc"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-5752944655d749a0.js",revision:"5752944655d749a0"},{url:"/_next/static/css/2bb37d72569487e8.css",revision:"2bb37d72569487e8"},{url:"/_next/static/media/sparkles.2072133d.svg",revision:"a188414ce83f2454b9d71a47c3d95909"},{url:"/background-shapes.png",revision:"3983853d02dd90c3406b9ec99d5a29c7"},{url:"/background-shapes_null.png",revision:"d2e9fee503f4628c476a801598795916"},{url:"/css/customColors.css",revision:"a08f7d420b81c03e4bc6f67a1a5dd606"},{url:"/css/global.css",revision:"96d7f3b826b94efec7e066880be80770"},{url:"/css/nprogress.css",revision:"201e62ae02d517050a302d30e990426d"},{url:"/css/tippy.css",revision:"f14e4e01f7aaa1ad5f549d2d45d5dfe4"},{url:"/icon-192x192.png",revision:"dfdd93d6f270feffe4b1c85feb1f6080"},{url:"/icon-256x256.png",revision:"a591fe0fd13a077875f5d028a425300a"},{url:"/icon-384x384.png",revision:"a405e7cec64cbb78e54ef85d32d964f1"},{url:"/icon-512x512.png",revision:"44c402b359f249b0214316510c0e9fcd"},{url:"/img/favicon.png",revision:"852774def657461bfc56057c0790e362"},{url:"/img/favicon1.png",revision:"bf88d1ffed9d83e7aebc919a07ad0c8a"},{url:"/img/gift-left.png",revision:"86c3cb9b76f1663621b5e51b9f05f798"},{url:"/img/gift-right.png",revision:"8da932a24d1a1c6985f1d02e938f787d"},{url:"/img/giftixiconheart.png",revision:"7ab96f8f1cf72b9c3e53c3b004e34517"},{url:"/img/globe.svg",revision:"516bf0fae97628e22a3a3ec810a8c4ba"},{url:"/img/logo-1024.png",revision:"06ae32a0c11f5ba6a32760610da85b7a"},{url:"/img/logo-128.png",revision:"06ae32a0c11f5ba6a32760610da85b7a"},{url:"/img/logo-2048.png",revision:"06ae32a0c11f5ba6a32760610da85b7a"},{url:"/img/logo-256.png",revision:"06ae32a0c11f5ba6a32760610da85b7a"},{url:"/img/logo-4096.png",revision:"06ae32a0c11f5ba6a32760610da85b7a"},{url:"/img/logo-512.png",revision:"06ae32a0c11f5ba6a32760610da85b7a"},{url:"/img/logo-64.png",revision:"06ae32a0c11f5ba6a32760610da85b7a"},{url:"/img/logo.png",revision:"06ae32a0c11f5ba6a32760610da85b7a"},{url:"/img/logosmile.png",revision:"7c251aac0afabe52e1625c3c8f11e92c"},{url:"/img/tada.svg",revision:"b052a4bef57c1aa73cd7cff5bc4fb61d"},{url:"/js/main.js",revision:"26c24cb216037007713afc39daa998f4"},{url:"/manifest.json",revision:"d589a164d7a55f759de199d8af6abfb5"},{url:"/sparkles.svg",revision:"a188414ce83f2454b9d71a47c3d95909"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
