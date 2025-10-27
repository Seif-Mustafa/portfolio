'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "39de23066e197a75aeb30ea675043b54",
".git/config": "d45f134d82ddf06ba206b27ff4841848",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9abcc38ed3b4c4deaccc1d5eac07cd89",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2535e9c5dd91233f18573da9982e6b0a",
".git/logs/refs/heads/main": "ba5d60755e7f3e5de886324fc5069313",
".git/logs/refs/remotes/origin/main": "bdb22613ed2558361565a685742c0947",
".git/objects/02/925cac99fe5863f2f5834bee9cefdf7732086c": "f274f7d6ba831527ad7dbe5b4c8be774",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/13/d9b932bfd15d649f2ace997fcdcd29bb98dd3e": "fbaa0e9fbc482a63acd360df43f9c9cc",
".git/objects/1e/867634e74ba9e09ac38ba535c907a1b7f55f9f": "b9abe6bcea0536fbd13899c474d21e36",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2c/58473f3c12ea675c34288de5a85480770d819d": "20fe3ace8b7e08cc2244f6c894e4c34c",
".git/objects/40/1beaf316068e29d5bc55ff196afd72ea8b5119": "25fed09eb14c8cb66284a6a337f82b2a",
".git/objects/4f/d3ad153c71c21f9eeb31d0f7d29812ac1cd53f": "5028cf477b1daffc6cb1fde048a568d7",
".git/objects/5e/67c007e606bf3aa963af0aa8d6ea4a6265c598": "e85415a6887728d8f53762176c68f676",
".git/objects/61/11dacfea3d1a960c38156ebeeedc2f478d5b2f": "a0c239f655f2e5c1e531de5eab946d25",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/77/568e817669d0da5647989b451a9414486fff2e": "e086e0596df0215318659a18134c1841",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/93/dd67d2d0c57b902c70975ec6ecbeabc6a6aa0b": "c6256d0b312896582de93ec06372ddda",
".git/objects/95/6aa2729a130daaa2a628f92070633a2e0d3549": "aaebf779bf8f7da3dae6666007b372b2",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/7023b232e3c1c3e834c89da039bfe77598526e": "2507dd356a13a4685fdd1beee0ddd30e",
".git/objects/a0/ebabe614421542cd2764fbf36b96454118fa12": "c69a1ca161333b3b6b5208934a502190",
".git/objects/a3/45dd806267353354e180460f5758f650aa83cb": "f1201034e616245cd30ddbcbfff51b6c",
".git/objects/aa/d2cee9912b47da1d950705d3b24377a9ba5d35": "e232e8e8ce584df250b30871af599e12",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/92f6d38a457ef88fd730aee60525a93cc9d4ee": "f8cfe4195844c4f3ec88553af65e47a7",
".git/objects/b6/8c2933f4e595531163b78935e75d8266d11040": "928dd506eb32f8fc720cae45185861ee",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3963f125af6b59f675c11233541df18880e598": "24c3f5558d6be30827c96ff42a8c7929",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/cfe8fd779cc5b80f6cc32ee498ce4996b86bfe": "17b500ad5ae3f631f2935d74f985b038",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/4c72bd6ddbefab262554d9929912fc1ba2d5d6": "982e02a376de57ebacb6f528adb5ada1",
".git/objects/d3/db9923fcb06a8f4c015b5d83c51fb9e7093230": "4016267f71ab64d7036421e392c3976c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/dd/4b300ed3b68daa94dcdaefd3d46413583f76f1": "86f2c22a4d56232f50b13bdaf76b7e3f",
".git/objects/dd/60be23d267cecbf54f2762a15ebd717ba0dccf": "aa0c32590639c62d3579f6ae5f5de367",
".git/objects/e3/aec885b1c9b0c17812e2b710151f40b0722cac": "17aa36ed353425f032b31dfe9fa74e74",
".git/objects/eb/4384cb60a4706db5d7b5910bb1c3f14e5fe4df": "61726ca3a2203e8e9c35da6cdbe60e15",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "3f8d72aaa074007bd143effef6219770",
".git/refs/remotes/origin/main": "3f8d72aaa074007bd143effef6219770",
"assets/AssetManifest.bin": "29c173189b1da6db58ad5adb1fe68e2f",
"assets/AssetManifest.bin.json": "a6605bff9c305e2af4fd77b1c1eea292",
"assets/AssetManifest.json": "87416fd803ae26bb47a68550e4b3291a",
"assets/assets/data/data-analysis-certificates.json": "44dd0e28bc39641c3df53271cf6ecf1b",
"assets/assets/data/data-analysis-projects.json": "44dd0e28bc39641c3df53271cf6ecf1b",
"assets/assets/data/flutter-certificates.json": "44dd0e28bc39641c3df53271cf6ecf1b",
"assets/assets/data/flutter-projects.json": "44dd0e28bc39641c3df53271cf6ecf1b",
"assets/assets/data/json_file.json": "aa320465e812cfe08b2409e070ac5016",
"assets/assets/data/projects%2520(%2520Web%2520Development%2520).json": "3a1d0919425678778fbd3bd2df1822a7",
"assets/assets/data/python-projects.json": "44dd0e28bc39641c3df53271cf6ecf1b",
"assets/assets/data/user-categories.json": "ad8a845998789a1c1189b68b2cf33220",
"assets/assets/data/user-info.json": "ffd0e80e47e956a46638d139ca9f1fe4",
"assets/assets/data/user-major-certificates.json": "ad8a845998789a1c1189b68b2cf33220",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "748d74136245fe7ac1763d064084f94b",
"assets/NOTICES": "c9da4a0f5d3b462523436ecacc9d29e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "90b5aadcc78192ee5c2412f26a42d65c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "e6947f1ff219aa25ebcf7de6815e1f2e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0cdd85f679fccea679c556e7d713743",
"/": "b0cdd85f679fccea679c556e7d713743",
"main.dart.js": "01d6023ccc356946f19405a9973688d5",
"manifest.json": "3c69b21ccb8398d5fac7ce83e51a891a",
"version.json": "7f8ae41a16749007d15c82a568cc0f11"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
