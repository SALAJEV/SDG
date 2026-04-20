const CACHE_NAME = "challenge-10-games-v6";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./data.json",
  "./manifest.json",
  "./sw.js",
  "./memes/IMG_2528_Edited.jpg",
  "./memes/IMG_2581_Edited.jpg",
  "./memes/%D0%93%D0%BE%D1%80%D1%8B.jpg",
  "./memes/%D0%97%D0%B8%D0%BC%D0%B0.jpg",
  "./memes/%D0%9C%D0%B8%D1%88%D0%BA%D0%B8.jpg",
  "./memes/%D0%9C%D0%BE%D1%80%D0%B5.jpg",
  "./memes/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.jpg",
  "./memes/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3.jpg"
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
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
