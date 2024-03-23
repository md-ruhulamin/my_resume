'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"version.json": "9b818ca9511483c901bed1545384376c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0d6984675b9a77df0ab83ca6592cede8",
"/": "0d6984675b9a77df0ab83ca6592cede8",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/NOTICES": "53e2a4d7405a684e72866a29e673eacd",
"assets/FontManifest.json": "1fac14e78e2b1ceb3ea775aef7a3c260",
"assets/fonts/MaterialIcons-Regular.otf": "88c0acef43f05e3f0ff6e28b854e97a6",
"assets/packages/social_media_flutter/fonts/icons.ttf": "7dae615e8df7bf5bf381bf713850ac33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.json": "ec785f04d75c972796b2ed44c83f0935",
"assets/AssetManifest.bin": "f91c1d0bf463411963732b7bd55ee512",
"assets/AssetManifest.bin.json": "bf1696781d1bbfa70c0bdaed4f2df4bf",
"assets/assets/fonts/LobsterTwo_Regular.ttf": "6d3f44fa5b7f6ce27aea91f8ea715069",
"assets/assets/images/appdevelopment.png": "aefd051fa76180328755f1cd0177428c",
"assets/assets/images/maxresdefault-3.webp": "302f155bcbf54a10297cd9ab7474ed67",
"assets/assets/images/github2.png": "cade5116bfc8dd80298b7301584337ed",
"assets/assets/images/linkedin2.png": "be6c5ec9a6efaa948b7af2d8210e7efb",
"assets/assets/images/sqlr.png": "27ed940649e1dd5a0f04e486bbdc4606",
"assets/assets/images/appdevelopment2.png": "094b6c63b0a04fc667ff68106d6d41c1",
"assets/assets/images/foodapp1.png": "5b47b35585d66207deea4370627fb0cd",
"assets/assets/images/healthcare.png": "c8dfe57af264ac18c4026075a266b500",
"assets/assets/images/dart.png": "7068b181af5c86021b31a6ecf51672b3",
"assets/assets/images/bias.png": "90c40d7b057df097d51962233a139e95",
"assets/assets/images/flutterlogo.png": "1ef04636950db02582884d45c796142d",
"assets/assets/images/leetcode.png": "72917c2234a9c41baf796c0b1fcbc200",
"assets/assets/images/fortest.png": "293834dd1d02244bd618a89c4ed35bb4",
"assets/assets/images/website.png": "9bc4ec65763268869baed3f461d0ffba",
"assets/assets/images/flutter.png": "149f3e8d69f98d21151f6693ee171f52",
"assets/assets/images/java.png": "623da67c01822105e5b19506c6c95e4b",
"assets/assets/images/python.jpeg": "ae2887a915f95eea0e1725996cfa2a90",
"assets/assets/images/url.png": "07a0b88b779d184a8ab1db5f0c047b32",
"assets/assets/images/uxdesign.png": "c860f2e6d09fbba6004aeab1bd6b9d37",
"assets/assets/images/javascript.png": "6e9527fd71d013e60d60c783ec0ededa",
"assets/assets/images/appss1.png": "5a787d9f69e92f516a3ca2b1f6ee1251",
"assets/assets/images/cppr.png": "9f4ed0d24098421d3a032d3d9ad355bb",
"assets/assets/images/genderbias.png": "17a82fa40f1952891bd61adc4c4f134a",
"assets/assets/images/github.png": "fc93290eec9e599ace6161dd6eabe7cf",
"assets/assets/images/panjabirbg2.png": "a071e792f6827566f2d9d8fd7dd04f47",
"assets/assets/images/javascript2.png": "94ae2dcd4fa410811cab4e1fbb403340",
"assets/assets/images/delicious.png": "f12c12f3b33c96457f59d59c869d9791",
"assets/assets/images/short.mp4": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/tshirt.png": "14860d78fb4571a673b4ca9edee67b5c",
"assets/assets/images/python.png": "95b2fafa1a12d9df3013cf813db64fca",
"assets/assets/images/instagram.png": "8a770507298d728a1e3e039a0507dd8e",
"assets/assets/images/linkedin.png": "5a2ad12f0ae655dc053ecb12810c00d3",
"assets/assets/images/github.webp": "c1a856f0dc1bc39b9962130dfc8b7338",
"assets/assets/images/pc.png": "2ec3c289e2f64ab663c945ff842d9958",
"assets/assets/images/sql.png": "bf0bc470436ed6891f9ca5d084623b1e",
"assets/assets/images/profile1.jpg": "6032778db4199d191edfb0a40032d3fe",
"assets/assets/images/profile.jpg": "e35c961f88b230a7b1b8de6d4629fef7",
"assets/assets/images/panjabirbg.png": "a071e792f6827566f2d9d8fd7dd04f47",
"assets/assets/images/cpp.png": "e66227d836d29b95b779b610bb345c15",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"main.dart.js": "d834218ac00e28eec89be71296b6f976"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
