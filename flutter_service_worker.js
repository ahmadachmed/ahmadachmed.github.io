'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "10b91ca1ce3b57f467cc0d88c6f15463",
"index.html": "4c6821efeeef05eeac31add1ccbc2329",
"/": "4c6821efeeef05eeac31add1ccbc2329",
"main.dart.js": "2158d54c6390423623cd2784ce94ec3b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "389a576ca0f0bfa81b9451555672541c",
"assets/AssetManifest.json": "80f70c031e640f32d2600d53927b2d25",
"assets/NOTICES": "9337068ea495cab378033df3b2593199",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/bgphone.png": "56d1528ed1d192777976f3b023d2e674",
"assets/assets/images/married.png": "09b79988fed04fb17ce4339926eeb7df",
"assets/assets/images/bg.png": "9fee855fb044c53c303bb8439dd1ef6e",
"assets/assets/icons/inputtamu.png": "6a5fee2aa14c501bbe4ae05a2ca9e699",
"assets/assets/icons/preview.png": "c8baad9063cf1d16dd3c663b70d68014",
"assets/assets/icons/settings.png": "2541513590391569e7f933f6c9bae7dd",
"assets/assets/icons/user.png": "db932b81cd0e3530dbdc40f5bacf0a53",
"assets/assets/icons/wordpressconnect.png": "1e4052187eba684482e74249935fe538",
"assets/assets/icons/search.png": "a7e5614dbe85233bb7d0bceed0947f74",
"assets/assets/icons/menu.png": "12ff514a0ece325fbbb4b7cf6a5ba61d",
"assets/assets/icons/userguide.png": "4187cacbd8ca43de3477c1b88705866a",
"assets/assets/icons/listtamu.png": "6300c225a1892c70116b5fb704ad3dbd",
"assets/assets/icons/logo_ver_grad.svg": "b85434078947f632c38ddb780a509971",
"assets/assets/icons/whatsapp.svg": "ca72307d6126792c618babbc43317a03",
"assets/assets/icons/accesscode.png": "0123aa3cb1718b8ab201d037d0adc372",
"assets/assets/icons/wa.svg": "9ada85f9dbfdef5734ee3e4e2abb40d0",
"assets/assets/icons/wa_icon.svg": "3764293649e2790f431339303677696d",
"assets/assets/icons/bukutamu.png": "57d9d5d5c9bba274b81655a872ff351a",
"assets/assets/icons/screenwelcome.png": "565e443028fb8a9bc9428de80d762a41",
"assets/assets/icons/bukutamu.svg": "0c3a1e628222d551a72e2c002065eaa1",
"assets/assets/icons/wa_icon.png": "ce879adf8b08c164bab28ad1341a06ac",
"assets/assets/icons/logo_icons.png": "e4137f88f9a7b8d4271af19969b9fa70",
"assets/assets/icons/logo_icon.svg": "e6351f9f87416123cbbc1e510b4dfefc",
"assets/assets/icons/logo_ver_grad.png": "f251dfb5f197e0fff31e49b9f5b2ea2f",
"assets/assets/icons/barcode.png": "73773ec8808b7ff4015b29bc9de733a3",
"assets/assets/icons/masterdatatamu.png": "722e88f038ec4cdeaca480bfa782ccea",
"assets/assets/fonts/google_fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/google_fonts/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/assets/fonts/google_fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/google_fonts/Roboto-MediumItalic.ttf": "cabdb4a12e5de710afde298809306937",
"assets/assets/fonts/google_fonts/Roboto-ThinItalic.ttf": "7384da64612787e3662872e9d19cbc2d",
"assets/assets/fonts/google_fonts/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/assets/fonts/google_fonts/Roboto-LightItalic.ttf": "2ffc058ddedacfeaa23542026c8108e2",
"assets/assets/fonts/google_fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/assets/fonts/google_fonts/LICENSE.txt": "d273d63619c9aeaf15cdaf76422c4f87",
"assets/assets/fonts/google_fonts/Roboto-BlackItalic.ttf": "c470ca2b5b4f4437a3fe71b113a289a2",
"assets/assets/fonts/google_fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/fonts/google_fonts/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/assets/fonts/google_fonts/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
