// Habitude service worker v1.0.0
// Caches the app shell for offline use and supports the in-app update check.

const CACHE_PREFIX = "habitude-cache-";
const CACHE_NAME = CACHE_PREFIX + "v1.0.1";

const ASSETS = [
  "./",
  "./index.html",
  "./Readme.html",
  "./Readme.md",
  "./privacy.html",
  "./terms.html",
  "./LICENSE",
  "./manifest.json",
  "./habitude-pwa-192.png",
  "./habitude-pwa-512.png",
  "./habitude-pwa-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

function ownCacheMatch(request) {
  return caches.open(CACHE_NAME)
    .then((cache) => cache.match(request, { ignoreSearch: true }));
}

function offlineFallback(cachedResponse, isShell) {
  if (cachedResponse) return cachedResponse;
  const failure = () => new Response(
    "Offline and nothing cached yet. Please reload.",
    { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
  if (!isShell) return failure();
  return ownCacheMatch("./index.html").then((shell) => shell || failure());
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== "GET") return;

  event.respondWith(
    ownCacheMatch(event.request).then((cached) => {
      const isAppShell =
        url.pathname.endsWith("/index.html") ||
        url.pathname.endsWith("/") ||
        url.pathname.endsWith("/habitude");
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return response;
        })
        .catch(() => offlineFallback(cached, isAppShell));
      // Prefer network for the app shell so users can discover published updates.
      return isAppShell ? networkFetch : (cached || networkFetch);
    })
  );
});
