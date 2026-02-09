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

// Fetch básico (necessário para PWA)
self.addEventListener('fetch', () => {});
