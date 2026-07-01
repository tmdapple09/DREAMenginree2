
const VERSION = 'dreamengin-offline-v1';
const SHELL_CACHE = `${VERSION}:shell`;
const DATA_CACHE = `${VERSION}:data`;

const SHELL_ASSETS = [
  '/',
  '/manifest.webmanifest',
  '/manifest.json',
  '/logo-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => !key.startsWith(VERSION)).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

function isNavigation(request) {
  return request.mode === 'navigate' || (request.headers.get('accept') || '').includes('text/html');
}

function shouldCacheGet(requestUrl) {
  if (requestUrl.origin !== self.location.origin) return false;
  if (requestUrl.pathname.startsWith('/_next/')) return true;
  if (requestUrl.pathname.startsWith('/api/')) return true;
  return requestUrl.pathname.endsWith('.js')
    || requestUrl.pathname.endsWith('.css')
    || requestUrl.pathname.endsWith('.png')
    || requestUrl.pathname.endsWith('.jpg')
    || requestUrl.pathname.endsWith('.jpeg')
    || requestUrl.pathname.endsWith('.webp')
    || requestUrl.pathname.endsWith('.svg')
    || requestUrl.pathname.endsWith('.ico')
    || requestUrl.pathname.endsWith('.woff2')
    || requestUrl.pathname === '/manifest.webmanifest'
    || requestUrl.pathname === '/manifest.json';
}

async function networkFirst(request) {
  const cache = await caches.open(DATA_CACHE);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone()).catch(() => undefined);
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw error;
  }
}

async function cacheFirst(request) {
  const requestUrl = new URL(request.url);
  const cache = await caches.open(requestUrl.pathname.startsWith('/api/') ? DATA_CACHE : SHELL_CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) {
    cache.put(request, response.clone()).catch(() => undefined);
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const requestUrl = new URL(request.url);
  if (isNavigation(request)) {
    event.respondWith(networkFirst(request).catch(() => caches.match('/')));
    return;
  }

  if (shouldCacheGet(requestUrl)) {
    event.respondWith(cacheFirst(request));
  }
});
