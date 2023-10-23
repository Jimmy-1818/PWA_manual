const version = 8

const assets = [
    // '/',
    // '/index.html',
    '/script/script.js',
    '/style/style.css',
    '/images/monkey_192.png',
    '/images/monkey_512.png',
    '/manifest.json'
]


self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(assets);
        })
)});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});