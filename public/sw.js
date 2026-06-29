// Service worker — sawahlunto.id
// Strategi: cache-first untuk aset statis & halaman, network-first untuk navigasi baru.
// R2 (r2.kotague.id) ikut di-cache saat pertama kali berhasil dimuat (cache-as-you-browse).

const CACHE_NAME = "sawahlunto-v1";

// Aset inti yang di-pre-cache saat install (shell PWA)
const PRECACHE_URLS = [
  "/",
  "/id/",
  "/en/",
  "/offline.html",
  // Aset peta (sprite kecil, ~50KB) di-precache supaya peta sungguhan tidak blank saat pertama offline
  "/maps/sprites/light.json",
  "/maps/sprites/light.png",
  "/maps/sprites/light@2x.json",
  "/maps/sprites/light@2x.png",
];

// ─── Install ─────────────────────────────────────────────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

// ─── Activate ────────────────────────────────────────────────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ─── Fetch ───────────────────────────────────────────────────────────────────
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Lewati request non-GET
  if (request.method !== "GET") return;

  // Lewati chrome-extension dan request internal SW
  if (url.protocol === "chrome-extension:" || url.pathname === "/sw.js") return;

  const isSameOrigin = url.origin === self.location.origin;
  const isR2 = url.hostname === "r2.kotague.id";
  const isNextChunk = url.pathname.startsWith("/_next/static/");
  const isNavigation = request.mode === "navigate";

  // ── Aset statis Next.js (_next/static/) → cache-first ──────────────────────
  if (isSameOrigin && isNextChunk) {
    event.respondWith(cacheFirst(request));
    return;
  }

  // ── Gambar R2 → cache-first, terima opaque response ────────────────────────
  // Opaque response (cross-origin tanpa CORS) diizinkan browser masuk cache,
  // ukurannya dilaporkan 0 byte tapi konten tetap tersimpan.
  // SafeImage/onError di React tetap jadi fallback visual jika gagal.
  if (isR2) {
    event.respondWith(cacheFirstOpaque(request));
    return;
  }

  // ── Navigasi halaman → network-first, fallback ke cache ────────────────────
  if (isNavigation && isSameOrigin) {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  // ── Same-origin lainnya → cache-first ──────────────────────────────────────
  if (isSameOrigin) {
    event.respondWith(cacheFirst(request));
  }

  // Request cross-origin lain (font CDN dsb.) → lewati (biarkan browser handle)
});

// ─── Strategi helper ─────────────────────────────────────────────────────────

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }
  return response;
}

async function cacheFirstOpaque(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    // mode: 'no-cors' menghasilkan opaque response — status = 0, tapi bisa di-cache
    const response = await fetch(request, { mode: "no-cors" });
    if (response.type === "opaque" || response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    // Jaringan gagal dan tidak ada cache → biarkan browser tampilkan error
    // SafeImage onError di React akan render ImagePlaceholder sebagai fallback visual
    return new Response(null, { status: 408, statusText: "Request Timeout" });
  }
}

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    // Fallback halaman offline jika ada
    const offline = await caches.match("/offline.html");
    return offline ?? new Response("Offline", { status: 503 });
  }
}
