// Chess64 Service Worker — v2 (network-first, busts stale cache)
const CACHE = 'chess64-v2';

self.addEventListener('install', function(e){
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var url = e.request.url;
  if(e.request.method !== 'GET') return;
  if(url.includes('firestore.googleapis.com')) return;
  if(url.includes('identitytoolkit.googleapis.com')) return;
  if(url.includes('firebase')) return;
  if(url.includes('lichess.org')) return;
  if(url.includes('2700chess.com')) return;

  // NETWORK-FIRST: always fetch fresh, only fall back to cache if offline
  e.respondWith(
    fetch(e.request).then(function(response){
      if(response.ok){
        var clone = response.clone();
        caches.open(CACHE).then(function(cache){ cache.put(e.request, clone); });
      }
      return response;
    }).catch(function(){
      return caches.match(e.request);
    })
  );
});
