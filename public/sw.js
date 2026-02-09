// Service Worker - Estratégia Visionária PWA
// Versão: 1.0.1 (Safe Init)

const CACHE_NAME = 'estrategia-visionaria-v1';

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

// self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Navegação SPA (páginas)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return response;
        })
        .catch(() => {
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Demais arquivos (css, js, imagens)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        });
    })
  );
});
