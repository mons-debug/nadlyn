// Simple service worker for caching critical resources
const CACHE_NAME = 'nadlyn-v1';
const CRITICAL_RESOURCES = [
  '/',
  '/cropped-Nadlyn-Logo-01-tightest-cream-300x70.png',
  '/ChatGPT Image Jul 21, 2025, 11_42_19 PM.png',
  '/ChatGPT Image Jul 21, 2025, 11_44_21 PM.png',
  '/3f723df2-54dd-47f1-91f0-6692a9a42daf.png',
  '/4a566c53-572d-4866-9a6c-38a86faa7c1c.png',
  '/f38f25be-8765-424b-a071-f3aae9c13eb8.png'
];

// Install event - cache critical resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CRITICAL_RESOURCES))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache when possible
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Handle image requests with cache first strategy
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request).then(response => {
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          });
        })
        .catch(() => {
          // Fallback for offline scenario
          return new Response('Image not available offline', {
            status: 200,
            statusText: 'OK',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        })
    );
    return;
  }

  // Handle navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/')
        .then(response => response || fetch(event.request))
        .catch(() => caches.match('/'))
    );
    return;
  }

  // Default: network first, fallback to cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
}); 