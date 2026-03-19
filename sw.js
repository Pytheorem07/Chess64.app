// Chess64 Service Worker — enables offline use and PWA install
const CACHE = 'chess64-v1';
const ASSETS = [
  '/Chess64.app/',
  '/Chess64.app/index.html',
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(cache){
      return cache.addAll(ASSETS).catch(function(){ /* offline, skip */ });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e){
  // Network-first for API calls
  if(e.request.url.includes('firestore.googleapis.com') ||
     e.request.url.includes('identitytoolkit') ||
     e.request.url.includes('firebaseapp')) {
    return; // Don't intercept Firebase calls
  }
  // Cache-first for app shell
  e.respondWith(
    caches.match(e.request).then(function(cached){
      if(cached) return cached;
      return fetch(e.request).then(function(response){
        if(response.ok && e.request.method==='GET'){
          var clone = response.clone();
          caches.open(CACHE).then(function(cache){ cache.put(e.request, clone); });
        }
        return response;
      }).catch(function(){
        if(e.request.destination==='document'){
          return caches.match('/Chess64.app/');
        }
      });
    })
  );
});
