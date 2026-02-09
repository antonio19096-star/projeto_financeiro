// Service Worker - Estratégia Visionária PWA
// Versão: 1.0.2 (Stable)

const CACHE_NAME = 'estrategia-visionaria-v1';
const OFFLINE_URL = '/offline.html';

// Instalação
self.addEventListener('install', () => {
  console.log('[SW] Instalado');
  self.skipWaiting();
});

// Ativação
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativado');
  event.waitUntil(self.clients.claim());
});

// Interceptação de requisições
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Navegação SPA
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(OFFLINE_URL);
      })
    );
    return;
  }

  // Assets (css, js, imagens)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, clone);
        });
        return response;
      });
    })
  );
});
