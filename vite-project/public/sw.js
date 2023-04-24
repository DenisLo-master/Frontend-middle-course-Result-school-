const staticCacheName = 'static-site-v3'
const dynamicCacheName = 'dynamic-site-v3'

const ASSETS = [
  "/",
  "/index.html",
  "/offline.html",
  "/assets/CharactersUI-e0a8f6d7.js",
  "/assets/EpisodeUI-8a8b73df.js",
  "/assets/LocationUI-38ec13da.js",
  "/assets/index-8cdbdd33.js",
  "/assets/index-bbff6e37.css"
];


self.addEventListener('install', async (event) => {
  const cache = await caches.open(staticCacheName)
  await cache.addAll(ASSETS)
})

// activate //---
self.addEventListener('activate', async (event) => {
  const cachesKeysArr = await caches.keys()
  await Promise.all(
    cachesKeysArr.filter((key) => key !== staticCacheName && key !== dynamicCacheName).map((key) => caches.delete(key)),
  )
})


self.addEventListener('fetch', (event) => {
  event.respondWith(cacheFirst(event.request)).then(function (response) {
    if (!event.request.url.includes('chrome-extension')) {
      cacheFirst(response)
    }
    return response;
  })
}
)


async function cacheFirst(request) {
  const cached = await caches.match(request)
  try {
    return cached ?? await fetch(request).then((response) => {
      networkFirst(request)
    })
  } catch {
    return networkFirst(request)

  }
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheName)
  try {
    const response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (error) {
    const cached = await cache.match(request)
    return cached ?? await caches.match('/offline.html')
  }
}
