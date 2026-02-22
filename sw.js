const CACHE_NAME = 'mahakal-clock-v1.1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Fetch Assets
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
