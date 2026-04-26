const CACHE_NAME = "challenge-10-games-v32";
const ASSETS = [
  "./",
  "index.html",
  "style.css",
  "data.json",
  "hunt-questions.js",
  "manifest.json",
  "sw.js",
  "media/logo_thegreenhunters.png",
  "media/SDG_1.jpg",
  "media/SDG_2.png",
  "media/SDG_3.jpg",
  "media/SDG_4.png",
  "media/SDG_5.jpg",
  "media/SDG_6.jpg",
  "media/SDG_7.jpg",
  "media/SDG_8.jpg",
  "media/SDG_9.jpg",
  "media/SDG_10.jpg",
  "media/SDG_11.jpg",
  "media/SDG_12.jpg",
  "media/SDG_13.jpg",
  "media/SDG_14.jpg",
  "media/SDG_15.jpg",
  "media/SDG_16.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const requestUrl = new URL(event.request.url);
  const shouldPreferNetwork =
    event.request.mode === "navigate" ||
    requestUrl.pathname.endsWith("/index.html") ||
    requestUrl.pathname.endsWith("/data.json") ||
    requestUrl.pathname.endsWith("/hunt-questions.js");

  if (shouldPreferNetwork) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
