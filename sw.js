// Mudei o nome para v2 para forçar o celular a atualizar o cache!
const CACHE_NAME = 'v2'; 

const assets = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  // Adicionando os scripts do Firebase e as fontes para salvar offline!
  'https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
