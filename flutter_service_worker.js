'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6cdb8a011f1c21d3e902e021243d7220",
".git/config": "0710b780749a24e30747a91f28b7242d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "2b8625c53a275e2cfd1627aae66ee35c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29a477b614629f4555e77f3ca916c6f7",
".git/logs/refs/heads/master": "29a477b614629f4555e77f3ca916c6f7",
".git/logs/refs/remotes/origin/master": "e3134514361515360cbbf6eb3c7592c7",
".git/objects/0e/a6e23cd696c689fbfe9f1b0b29f9ca771b54d1": "4729c762d986f05a60902783273ae873",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/44ef30cf1db3f295598dedb601d98227ec29bc": "6832f41482eac8fde5fc7548745572c7",
".git/objects/29/d5f7419bd5a91f113861f1ccd615afdbce712f": "e3ac6ec442953675f750009ff701de51",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/b03166fb2d2fc7e0f2c6c1f79bef14f6f9abb6": "51f6e10d3f75422be0702617a45fcd14",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/41/c4b15a14cb88f287ee48e281ec4e2eec469aab": "4669a65ea193453597ca2e04fe443547",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/47/23cd2e2bcc62e0f27c2b4e1794ded4c5c18429": "7ddbfeb2b5edf63e41eb4b73fc415b6a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/50/36a0478fe4ba6fdce7d9fbb8a0ed43fbc5ac44": "e7d8b0e620d1436424b8de48b60054cd",
".git/objects/5c/73d2fff83d33a48749c8974a61c9fb8b058c14": "fd08b9e84a306a8a23bdf303f5051560",
".git/objects/62/d8285f5f9c4a16872e99a3a86873eb39a1cbfe": "3c3e33f1a715a1869f6c393e0385d310",
".git/objects/63/c30f8e98bc5ad28a3abde4aefd6fca65ea5211": "d2e6ee8eb5d8c300c95fd5f6227c6c7f",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/66/ac0d2af382c9338ceda4ff4b506994059a7873": "7ef6b2c08e9d7d90b77577ba3070e454",
".git/objects/6f/9279daefbb746564babab403af1204dfbbf2df": "a67c16500511997bd6210b7bf25d7b08",
".git/objects/74/3571a9ecf2ccc78756aa3d9e69dc191f50a1fd": "936d9db394dcce13b9429480103ed659",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/d1fe485207e8a561af87c7ec372bc934dccb84": "ad8c4d4038797c9128cb2965518c1b5c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/30b296d8ef20789da3d7e2522d8a2b5219c22c": "7926a9d99624ae012f36ef6fc31a50f5",
".git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
".git/objects/95/23edb3d6d887ef0ee80eaf4ff07d203fe2bde4": "f53cc82176a3f43d8b687477228c8144",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/abf02cdf2f233750ee607ca39ec68b97bcd7af": "e14101bc5cb709b146157e27c5fb34f5",
".git/objects/a9/520b78ac4635319aafe2cc88f1b40c8289b1c8": "f268f08f109671711197a41d2104993e",
".git/objects/ac/3c34857516777e8d94007b23f6690447d73515": "46d674220fc19c3b4458ad3a66beaa54",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/b2/a9bf557a4f15b6b3878624104d4b282bd195ad": "dd25ae5c56b0984fdd181c0433440fc6",
".git/objects/b5/e7236d2f3f5281ebc45fba57346861847d6a0b": "9dbd82f043004b4eaf33bff0a9ea3892",
".git/objects/b6/291cd80b597a6ea4d6bdc7a4987c44e3e8536f": "6d9c373c34d64ed4212370cdc361b66f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1008931638da058823109b2a5b45fbc96556b7": "5fea84123251ad5eecf5f151fc0b5d63",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c1/3eb219209dbb7c38b915655a43f3a636aef912": "27cc7c64a34b6dc6f75848b2bc91503d",
".git/objects/c5/e57c6406be0ac898746cffda416584fe5a58ab": "b47676e0889763e45c7fa7a4653419b3",
".git/objects/c6/3277e0b8a7e34136c4a3f76a608d08f2a65c30": "dd5c734c747d266ba2424bf712c5c28f",
".git/objects/cb/6d1925f4375b2d33f5e87fd9f44d2a8933e7cd": "1eafb0d81a73e3be9ef9b8a5ed86dabc",
".git/objects/cd/ffbd34de015e7d25228d529f4bd27ff5b7ebe5": "bc41514c90240875aa7afe076e654747",
".git/objects/d0/18e0209cc5befa8cea4af7eb4a367568f0f163": "6f4d06d6ed49f7ad7e4fb2e6172784df",
".git/objects/d4/36582fcfd8a9da22929d7035cf11d4f43e83f0": "4daa88404cf5d43c858939cd5683315c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/a251c7c46441b9ac1e2c6d176a217c16595460": "87bbd68e89ce9dcc855f173e0802d66b",
".git/objects/d8/a41547c9f04524cf72677ee32037cc8f1abb25": "0dd99422b76ceffd7264f07781d5549b",
".git/objects/d9/12b88f7d7b8cb5f0858621e8d064092da9ec5c": "d00bc1bdc7b97ac8c246caeeb0943623",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/e2/e64456c7f8e6b714d699a912bda3fc21583f44": "abcb9efd018b8bc75a096cf323207f04",
".git/objects/e3/92492abdb3640da80637c8e69d7049e9ed3c41": "457c98db190edf70f51f43c67464a919",
".git/objects/e4/8461ad39793c03f0c7b79dd3a5e03788e00dae": "8d710d3bf45218d4719c34fab37203e5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/2d3dcfd0581125892827f28c9ef998fe19ba94": "38e4d43dd5b484cad67361de10e8839b",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/ea/fe29c3af7738a74053839fe9a08d0843f43da3": "fa7b4cb065dd32220429be4538dc3474",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fdd707e55e1d050595f4c58c45ae4ab44d000d": "f75fb9db9bc528e1ca887c240e413a32",
".git/objects/ee/6238251f406e932d4d3479d7f1627d1b70bf69": "196937910c1004cc3277e8897c92a3e2",
".git/objects/f5/c0fdd5313d1b65ab554124ba302fca992134ca": "cd7f02aa634edd5f4821629d12367180",
".git/objects/fc/768369aa058c7ee7b720b9d78e6616ffdef333": "5480a84b426dd0c1056888c3dd8b37fe",
".git/refs/heads/master": "0404e8abf8b9b4af248d9ac92635f6bd",
".git/refs/remotes/origin/master": "0404e8abf8b9b4af248d9ac92635f6bd",
"assets/AssetManifest.json": "2fe363584b5398fb09c15e9a836f6d6f",
"assets/assets/about.jpg": "e2391df1dd69929ebe1b244ca0f0fc39",
"assets/assets/logo.png": "0ca436a97daebd3161ece9ccc7bd79ca",
"assets/assets/logoa.png": "1cd005debd14e9b9e5f22497c3491e0d",
"assets/assets/pict/afivah.jpeg": "6bea0445aba873a4cb228e7a831766be",
"assets/assets/pict/fajar.jpeg": "16502849e61bedbe9794ee818bca5b42",
"assets/assets/pict/Intan.jpeg": "e3379bb83153b4a8e23afb440e82f782",
"assets/assets/pict/lutfi.jpeg": "4008f406e02f88eda5ddde782c34e428",
"assets/assets/pict/me.jpeg": "559439b079f60173a179721eab232edd",
"assets/assets/pict/nur.jpeg": "d0fd9d65d397925d7316a1044c4b7c12",
"assets/assets/pict/sinta.jpeg": "c252c179f507b5731bdf7db6384151d1",
"assets/assets/start.png": "d6eef019a7a6c6f5ff53dbbbc8478c32",
"assets/FontManifest.json": "3e2169716893d4f5155d9df6e2c69f49",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/fonts/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/fonts/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/fonts/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/fonts/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/fonts/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/NOTICES": "bafe22ec52cd4f439fe27e3e9521048c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6f35751b2119811c45bf2eecf20fd958",
"/": "6f35751b2119811c45bf2eecf20fd958",
"main.dart.js": "521bb69afb917fc2be5b39026314164f",
"manifest.json": "7e9ce43205efb2c03dc392db57226779",
"version.json": "730efbeb507f02272d69ea68e24efcdf"
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
