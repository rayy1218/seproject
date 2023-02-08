'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"manifest.json": "75aff5a3acdde4089b9dee4bde800be7",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "db402fcddc4c0b2acd8d49a899df0edb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/unicons/icons/UniconsSolid.ttf": "630f8bd494e53400fa9cda3a4eb8ec10",
"assets/packages/unicons/icons/UniconsLine.ttf": "b6a7ecc47d2853caf153cc1aa5cf93ec",
"assets/packages/unicons/icons/UniconsThinline.ttf": "fe40541d1f998ea2122a68d072f8e254",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "b75e0dc6e58d2cbefc10b41bc035201f",
"assets/FontManifest.json": "08c2a268a8ca1751181968354ad85639",
"assets/shaders/ink_sparkle.frag": "6ddca61f03944b33ce9eb6974f399db8",
"assets/NOTICES": "3c40d132f709d59981455f54461a0b2d",
"main.dart.js": "819fe0d8662c10263d71fe534f710353",
"index.html": "b868101faee26545ef440df03f4bb571",
"/": "b868101faee26545ef440df03f4bb571",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/FETCH_HEAD": "1f3058fc90e647bbdabd20e00cef9ea0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/index": "3bb5cc17328a4d5239c31186ef85187e",
".git/ORIG_HEAD": "e36e02f51e3dd2fe92ec55823f543d45",
".git/objects/9f/fe9c8267a8d3327c9df2563296607f8b649505": "4fe075caea2297ed01a269e8eb2d2d11",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7a/5fa00c28e042ad6b3f2bdd5b2b5bbf89899445": "9df059fceacf79b1d3e1776086b71b39",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/a7/59e4a9fa971e63e3702da37dd573802dc93441": "cadc760e3d806ccffd544fdd55804355",
".git/objects/52/52c4370a9ab4eaa416073010ce8cf9159905da": "b78d6c3fd1cb5f31cd97f6c86bfd24a7",
".git/objects/ed/b6c51ec432c77db7a8aa649cd42733a74663be": "d53fac61c555a106b9ccc59209b0d8e5",
".git/objects/f6/7448dd91331a34a0125e9b0a61aa24a4aaddaa": "4f3ab395605a9a21091e2d9938d38955",
".git/objects/f6/cfdddae8a5ca633bc3611bd61a6489935c7dc0": "5a8c6c0ea8501d2bd4faa7bf089f62c2",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d5/66c6d9fb46823b14b9c5d46c1a079de0d2ff23": "beceeb185692f9f022e71caaaa27885e",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/11/55fbb41ae656bcc6d9333a0d72aeef3d6879fd": "07f50229210559d0be1d7fcbff3d8d92",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/0e/1d82b6a416d4cb59f17a4d21afe7e4cf73df7c": "14df9d14c8eaeb3327f566a6fdea98c4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/59/d99beb265fbf0ba12d952b156e4dd7cf3e27e2": "92f17f83297c2cba854adf70da1d2da1",
".git/objects/3f/78cff74b784e244050c674466a706afae264ee": "99f0a869759e3becc115edd5072d2445",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/22/6d05faf50cd78710f7fb32bf19bfd26e7ce784": "c1a628d67061a84830989b678171ee8d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/1b/0f9a552089525a6088fbf087f7f0bc806cc827": "fa22d760c8c1f0fe76e12eb2fc4bddb7",
".git/objects/1b/440f6c104692a23ab2ab708d876ab137cbf8d9": "cd169e9a54309c59e7d7895b247ca48c",
".git/objects/91/0d86b028fb7eaa538ac61fc5d45f612da6dd52": "164fd20d1c5fa80cf35180864c386630",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/080cbb8b5dfd4c2eaab1b7083ce45bad26c5ad": "c0f4a634ec47bcdd0dc17cc8cbdadaf5",
".git/objects/5b/fb802a46ecb1ae05fc504b931be69f11f4fd07": "e0ace348ff747e607d8055d14388f6e1",
".git/objects/5b/4369de3d67332827dbbeaf45d78b2caf2c8224": "1c674014ff8d924723f7945975a2bd8e",
".git/objects/31/2edf03157d18a26621086dc205ab453730a434": "98b8b761d84fb716d9b5225044080660",
".git/objects/a3/ea37da76809ad598dc991c282e17896d689abc": "fc4afe1027ea8b7ae49c7951bea47fc4",
".git/objects/9e/b37c7eea880b2e7e48742de4b045edf952536b": "ea2005c56b30615c64e213e8ce5c4cda",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/28/d511d489810e5d850bbd0f2f020636dcd6078e": "0525aa67a8f4de62cd364e4579d17320",
".git/objects/72/4502daf57eebf52cb87bc4c61d2121aff1dac3": "c92334f2ec5f91377e245e936fcc4543",
".git/objects/af/062e2d9dd67f82aded3e0971548f6f7312b2de": "1965ddab195b0b5c916a23d8fa261948",
".git/objects/85/b9e623e9aa7f20f39bb755023bf225ff4bfd52": "af6d00b22f0c5cd4b06989e8fbb36266",
".git/objects/19/3261311d1fc2f2a722aa7e98fa3898308ffb77": "538dbcef22b41017f74a8c174fcd786a",
".git/objects/65/d057a9eac35a0d62dbf21fc6f56064f6c32078": "ce8e3fb60669000fc7ce3db7264497b2",
".git/objects/1c/755d1b589168454f3d09e0193fd28af33b2d40": "3103bd5a08f00cf8da32881b5882ac83",
".git/objects/fe/081af919a36149c1a5ceb2d36975588ba156c7": "107075f32f10f2c1c01057d8f2a293cd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bc773d8fe9330d137bc1f57057d7668e5f9068": "ee119394663fe043738a20b2ecb2f934",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/config": "ea269c6caeb8d4ff6285e5b38c517fd0",
".git/logs/refs/heads/main": "8852e935ad746dc54248be9320fce6ae",
".git/logs/refs/remotes/origin/main": "37202b18378207e9627160506a5cb2eb",
".git/logs/HEAD": "3d7c6e9c5b21b787fc4cf96a99055c33",
".git/refs/heads/main": "4565b56d110c12df15dc34228f051ec7",
".git/refs/remotes/origin/main": "941ba2daed0a89542c93931c7d8c4a5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "2d0d9e19256e9f1f7f310bbad3a2978d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
