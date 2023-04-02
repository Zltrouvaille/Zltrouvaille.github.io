/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e4c116a45088459f980b704ae684765d"],["/anzhiyu/random.js","40174635f9ea8127407e85ce131781eb"],["/archives/2023/04/index.html","7af8cd0d15e471d1f86f942503cbc92d"],["/archives/2023/index.html","147551bc88b9a2bb29b1810b2353c57b"],["/archives/index.html","003c9c947236c522bb7062cabf8303a5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","9a4319f674272a5fdd882494343a5af8"],["/comments/index.html","20f6ddfd1dfdbce261b5b706f2313790"],["/css/index.css","bc0ff14176836f0621c7a93d74e9e364"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","c2d4a57cd6abff978d2c52ee974c74a9"],["/img/badge/CDN-多吉云-3693F3.svg","0e72dbd2b0587257b942f44afce3d51a"],["/img/badge/CDN-百度云-orange.svg","3b1053dbc6168b9a367c3270b0d146c2"],["/img/badge/Copyright-BY-NC-SA.svg","77f0a6d80f5b049ecd8377de31fff3d9"],["/img/badge/Frame-Hexo.svg","4c529e432a05854034c8120c20d9812c"],["/img/badge/Source-Github.svg","c7d5c1efd84c41246fc809a44e4e0a2e"],["/img/badge/Theme-Butterfly.svg","973244a3db55c1dcdd9f158158082cd5"],["/img/badge/安知鱼-上班摸鱼中.svg","2ddf9b883002495b3d9cfdd205d2c529"],["/img/badge/安知鱼-下班啦.svg","0f95fbacb8ca0f4210816ae2833bf531"],["/img/badge/湘ICP备-2022004213号.svg","49cffe71021b807277d99471b52e7d04"],["/img/banner/autumn/bilibili-autumn-1.png","d0126c2f77be1c05db18ae232d32d5d6"],["/img/banner/autumn/bilibili-autumn-2.png","d2a39ea27e84a748cc5d7ed797fa812a"],["/img/banner/autumn/bilibili-autumn-3.png","87dc02c34361e01a003e25c080bb0e58"],["/img/banner/autumn/bilibili-autumn-4.png","1e55fb613db45320eb1dc04437e93126"],["/img/banner/autumn/bilibili-autumn-5.png","5d41b2f5acbc6815185c68b7ac291f4b"],["/img/banner/autumn/bilibili-autumn-6.png","ca7b16bf03dddc687e7e657d523bd5ec"],["/img/banner/spring/bg1.png","fc80b886dac11da0356cea9491eadb99"],["/img/banner/spring/bg2.png","f9b601453fcd8f34f892cd401e85929f"],["/img/banner/spring/bg3.png","fe2729481f92c585d19519ed4fa34f74"],["/img/banner/spring/bg4.png","5551eaf16113b5733cd8b6e33e434400"],["/img/banner/spring/bg5.png","fc2aa2f34ccdf40d1f2e9d9645dbc7ed"],["/img/banner/spring/bg6.png","1a6a0973d6d444858fb0c916f2794ac8"],["/img/banner/spring/bg7.png","9ca5e2415767bbae62539a16f2e4c68f"],["/img/banner/spring/bg8.png","ae2eeaa9f8206b0d709c87e6e4f5e898"],["/img/banner/spring/f1.png","3d4fa2d7ae6e58c52f39c4096c8f9602"],["/img/banner/spring/f2.png","3d4fa2d7ae6e58c52f39c4096c8f9602"],["/img/banner/spring/p1.png","7fa348a13ff9581e4e3bd587c7c5d32f"],["/img/banner/spring/p2.png","748c9bb81b6f21bb6a455d1b21e888ae"],["/img/banner/spring/p3.png","7a1e1cb50eb0cbcc4526e35f357a8893"],["/img/banner/spring/p4.png","a5b3209d4f46abd1390f93fba3090088"],["/img/banner/spring/t1.png","15ec44cde98052779e25011b02b46b60"],["/img/banner/spring/t2.png","4bb66365c14b4cb11e50cf997fcd6497"],["/img/banner/spring/t3.png","11fe26fb3c7e8170346963a7feaec803"],["/img/banner/winter/bilibili-winter-ball.png","941b1b6c5a67b44438a89418c7a6fad9"],["/img/banner/winter/bilibili-winter-tree-1.png","90d05064751ae6222659948f3de40442"],["/img/banner/winter/bilibili-winter-tree-2.png","9f21321f1e24d84f2fe956cf1b157e2d"],["/img/banner/winter/bilibili-winter-tree-3.png","79939bcd998761c525747bbcfad61e89"],["/img/banner/winter/bilibili-winter-view-1.jpg","43e982a914abbf4eb9f5f53773cfdca3"],["/img/banner/winter/bilibili-winter-view-2.jpg","6a60e5a66466357a9e5ca49ef9fd3337"],["/img/banner/winter/bilibili-winter-view-3-snow.png","99d5ddb9f3623b1f523bf3d3a3341569"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/default_cover.jpg","569c7962afb937ba6e3ccd21934b5e47"],["/img/favicon.png","d8499ef17be10a92728a69f02f2cf947"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/people/open-peeps-sheet.png","ee23df8517f3c3e3efc4145658269c06"],["/img/siteicon/128.png","e692372c5042285f19f1dafcfbce2dd6"],["/img/siteicon/144.png","11720d7a2dc84f1cad3116b70d129831"],["/img/siteicon/144a.png","11720d7a2dc84f1cad3116b70d129831"],["/img/siteicon/16.png","56ff65c5baf4d7d935b66685417f88c6"],["/img/siteicon/192.png","bb7a5ef1d26476b312e0a1d0ce2e275b"],["/img/siteicon/192a.png","bb7a5ef1d26476b312e0a1d0ce2e275b"],["/img/siteicon/32.png","d8499ef17be10a92728a69f02f2cf947"],["/img/siteicon/48.png","18d620a799194d49c3cbb84da1a13474"],["/img/siteicon/512.png","c4c78c105bba3b9651bd5bcd24e958cb"],["/img/siteicon/64.png","b555cec0f98a9371a14ca48f3f17c626"],["/img/siteicon/apple-touch-icon.png","c4c78c105bba3b9651bd5bcd24e958cb"],["/img/siteicon/splashIcons/icon_1125x2436.png","b2f890d6b9fa042e9152585e17041e3f"],["/img/siteicon/splashIcons/icon_1136x640.png","671649cd535adfc4553411ca7a61b374"],["/img/siteicon/splashIcons/icon_1242x2208.png","eb5d45c9c5256b1f1fca13bec104b623"],["/img/siteicon/splashIcons/icon_1242x2688.png","604d3163e9277de0a352c0c7c185daeb"],["/img/siteicon/splashIcons/icon_1334x750.png","c0221818c38df6cc9480dcfb62dc96b1"],["/img/siteicon/splashIcons/icon_1536x2048.png","b4f17174bd61f4ac3d4dcaa42f3f444f"],["/img/siteicon/splashIcons/icon_1668x2224.png","97c4041d4e0e3c1fa1f677fbaf9011c3"],["/img/siteicon/splashIcons/icon_1668x2388.png","37c6c01618a42d1a3531724b5c38e2a3"],["/img/siteicon/splashIcons/icon_1792x828.png","bbb4168d1f66f974bbfdbb3f99fe4965"],["/img/siteicon/splashIcons/icon_2048x1536.png","5338f20ffa4939c21408ae286562fd1e"],["/img/siteicon/splashIcons/icon_2048x2732.png","707236819aee3816a27fb8898f09d9b9"],["/img/siteicon/splashIcons/icon_2208x1242.png","462945f6ef09e0a3188ddf14720762d6"],["/img/siteicon/splashIcons/icon_2224x1668.png","31f54cdd65a9bff95ce23cb8a3a506f7"],["/img/siteicon/splashIcons/icon_2388x1668.png","357fbba8fcba969b00334fbcc080c25b"],["/img/siteicon/splashIcons/icon_2436x1125.png","42697a2988bbc4cd36bd8ebfe082a335"],["/img/siteicon/splashIcons/icon_2688x1242.png","7ce3bd96e8933de6242ac212648cfa13"],["/img/siteicon/splashIcons/icon_2732x2048.png","f87f22a489511d9346b2696d1afc7050"],["/img/siteicon/splashIcons/icon_640x1136.png","441c175c92c4e99206d5f930882deb0a"],["/img/siteicon/splashIcons/icon_750x1334.png","b70cc0c5557f6451ea7fa494233373cc"],["/img/siteicon/splashIcons/icon_828x1792.png","c1305b7f1b6d0cb161e5d5c0dff1a520"],["/img/svg/ESFJ-A.svg","fcc716f3b79d0caa8e6f19fa09ffbc0c"],["/img/svg/node-logo.svg","c4107e0227b4aae4135b53a4fb7a6755"],["/img/svg/pinia-logo.svg","03831fda115330606b4b8c058e84f0e8"],["/img/svg/vite-logo.svg","86f0c9163c4eb30ebc3516a4565cce5a"],["/index.html","fb99629821381811cf3a5e2b759aafff"],["/js/anzhiyu.js","bc1f9c9da92c3bcb1f76dd19903ac8de"],["/js/anzhiyuOnlyOne.js","88f20d3e1aec722bc15f90717ca2a0f1"],["/js/anzhiyufunction.js","93c5b376e62905b08e0b591742701b95"],["/js/main.js","11a2246ff885bf1781168253e94e1980"],["/js/search/algolia.js","6fdef0f4853b5017723c48a26f89bc97"],["/js/search/local-search.js","a99ce0bac3c0fa457e1cbaacb53e8c57"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","f4218341126d71a8060ba832d5a76807"],["/js/utils.js","6c09ef32d5c069a1113ec31a015e62c6"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/posts/4a17b156.html","3dd356482facfaf48fddf7b72f9ee0fb"],["/sw-register.js","10933b21ebc7c2bbd7abec1b1bc4992f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
