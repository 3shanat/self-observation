const CACHE_NAME = "self-observation-v139";

const LOCAL_FILES = [
  "./",
  "./index.html",
  "./styles.css?v=139",
  "./script.js?v=139",
  "./manifest.webmanifest?v=139",
  "./assets/SelfObservationAppIcon1024.png?v=139",
  "./assets/fruits/durian.png?v=2",
  "./assets/fruits/grapefruit.png?v=2",
  "./assets/fruits/jackfruit.png?v=2",
  "./assets/fruits/juice.png?v=4",
  "./assets/fruits/mangosteen.png?v=2",
  "./assets/fruits/muran.png?v=2",
  "./assets/fruits/papaya.png?v=2",
  "./assets/fruits/rambutan.png?v=2",
  "./assets/fruits/water.png?v=1"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(LOCAL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cached) => cached || fetch(event.request))
  );
});
