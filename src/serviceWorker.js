


document.addEventListener('install', (event) => {
    const urlsToCache = [
      '/',
      '/index.html',

    ];
  
    event.waitUntil(
      caches.open('bougeons-ensemble-cache')
        .then((cache) => {
          return cache.addAll(urlsToCache);
        })
    );
  });
  
  
 document.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
  
          return fetch(event.request);
        })
    );
  });