const CACHE_NAME = 'sidu-chishui-sandbox-v4-map-embed-compliance';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './README.md', './DEPLOY_GITHUB_PAGES.md', './IP_NOTICE.md', './NOTICE.md', './LICENSE-内部使用声明.md', './assets/icon-192.png', './assets/icon-512.png', './assets/original-terrain.svg', './assets/original-terrain.png', './MAP_LICENSE_NOTE.md'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // 百度地图、Google地图等第三方在线脚本/瓦片/静态图不做离线缓存，避免缓存鉴权失败页面。
  if (url.origin !== location.origin) return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
      const clone = resp.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
