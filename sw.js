const CACHE_NAME='family-pl-predictor-v9';
const APP_SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url);
 if(u.hostname.includes('thesportsdb.com')||u.hostname.includes('sporting-events.org')||u.hostname.includes('espn.com')){
   e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))); return;
 }
 e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));
});
