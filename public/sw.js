// Service Worker - Estratégia Visionária PWA
// Versão: 1.0.4 (Offline OK)

const CACHE_NAME = 'estrategia-visionaria-v1';
const OFFLINE_URL = '/offline.html';

// Arquivos essenciais
const PRECACHE = [
  '/',
  OFFLINE_URL,
  '/manifest.json'
];

// Instalação: cachea o offline.html
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE);
    })
  );
  self.skipWaiting();
});

// Ativação
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Fetch
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Navegação (SPA)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match(OFFLINE_URL)
      )
    );
    return;
  }

  // Assets
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
          return response;
        })
      );
    })
  );
});
