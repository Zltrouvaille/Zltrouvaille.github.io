/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2022/10/index.html","f89fc81758cc3e62d41e7660cb06138d"],["/archives/2022/11/index.html","507aedad20e9f819cd1994f49a506974"],["/archives/2022/index.html","3ed4c47965e3be0afa085cb8ad0bdf23"],["/archives/index.html","f7d5e9dadca5bd7245182286a679fef2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","79ec49f7a2778bb1c23094274305fa15"],["/categories/index.html","d1c140afd918d59231aa71128ffbee98"],["/categories/前端/index.html","661e4cee9001e2124d1d01bd07e90115"],["/comments/index.html","3a0bb1482c75429acb1cd44c3dbdc846"],["/css/custom.css","e8e9c6ea5bddd79c933041b06ee39db6"],["/css/index.css","95efb71e09de6f45dcaf4933404baa18"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","593be580ad241e838233ce84659c94a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/image-20220427220104115.png","7e4de65811d408a8aee924f397a2ba63"],["/img/image-20220427220152237.png","150f037bde60cb0f9ad00e0c1d285b1c"],["/img/image-20220428222212086.png","af9e780db8d8e4155b398403be5814cb"],["/img/image-20220429140221258.png","2b089a9b1040bb8419686ec362aabee1"],["/img/image-20220429141122222.png","e6e6d88b1d7565f2598e9f9a25f7d32f"],["/img/image-20220429142040506.png","1e6e8b5ecf74f3623151348f8ad0dea1"],["/img/image-20220429223004206.png","39412a5b611d42ec8e0ae79c67de65fb"],["/img/image-20220429223129391.png","6d4d6a5053e8e8f11d426240c45879f7"],["/img/image-20220429223247918.png","fe51cad97f2bf309cb9f19da76ab20e7"],["/img/siteicon/README.html","224bccecdacdd1b74bbd791766277fb8"],["/img/siteicon/android-chrome-144x144.png","83ed0840685ae241bdc1244a49b9e319"],["/img/siteicon/android-chrome-192x192.png","d0360ad0845943785c009d033599da4f"],["/img/siteicon/android-chrome-256x256.png","7bad735b1787e284270994ba69ead947"],["/img/siteicon/android-chrome-36x36.png","25fc09637eacfdd2f1bc473fc8fd5a26"],["/img/siteicon/android-chrome-384x384.png","697d212d21555090122a60c04507ab9a"],["/img/siteicon/android-chrome-48x48.png","126ed2443633b4371bf9585584c97684"],["/img/siteicon/android-chrome-72x72.png","96ec97a39d67a6c8653d4610010cdfa2"],["/img/siteicon/android-chrome-96x96.png","6c5bd5e101ffa093f1bab2a5ed058917"],["/img/siteicon/apple-touch-icon.png","92654e12c45aa35dd1df7af1a4f98557"],["/img/siteicon/favicon-16x16.png","52ec322fee6ab1a1b8ddba03a46b236d"],["/img/siteicon/favicon-32x32.png","cbe56b4950cf83ab60b13fca48eec08a"],["/img/siteicon/mstile-150x150.png","343b342fb31d7fbe54e7fb60e4c299c6"],["/img/siteicon/safari-pinned-tab.svg","29cc901f63d202c6e27e30227217b21e"],["/img/wechat.jpg","3d0d433d91b58439315bf9e979d8d0d1"],["/img/xT8hB6.png","74684f51acfa40e9b191f5ba81b0f378"],["/index.html","21e700220f635960c49402331c478673"],["/js/ali_font.js","08b3d076932e20bf24d8a90db183e21a"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","4dc885650aea8aa6fbc362ee2d0c29e7"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/48x48.png","5cec9db3fb639402427c7dab2dc89583"],["/medias/README.html","f55dfb16df63427c5cca478ae7f293ef"],["/medias/android-chrome-144x144.png","08fc79a9f8dc3f998a349b7b632fa522"],["/medias/android-chrome-192x192.png","6fea991dd699da23cc2ca5b5820f3a43"],["/medias/android-chrome-256x256.png","f1302d2cabf8a14d726d8e3101e8c2b1"],["/medias/android-chrome-36x36.png","a4ea92cd1094483da595c0e32f699c1a"],["/medias/android-chrome-384x384.png","45bdc7e32167bb4c4b2f3f9b96de46f1"],["/medias/android-chrome-512x512.png","77b8773f4e2bb9aa4b485a48e34c7bd0"],["/medias/android-chrome-72x72.png","283a649c22edaa9bfb8b0426890c9e71"],["/medias/android-chrome-96x96.png","3a271c76d9e3e8fe9886f618549ec703"],["/medias/apple-touch-icon.png","a1aef9df6b13c31269b041db43a538b3"],["/medias/favicon-16x16.png","babe7630336c99d73ae54b31ca49c712"],["/medias/favicon-32x32.png","da9811d5f7fc054098faf6a780956fa9"],["/medias/mstile-150x150.png","79db626eb7e64c4b636522caceb825ab"],["/medias/safari-pinned-tab.svg","7a087a2c5e4c3a581c6cf1dab94775e6"],["/posts/608487bc.html","0126e878de43cf9d8e9a31eb39f5994a"],["/posts/608487bc/image-20221102112041266.png","8e358432747795a6b285bfa3f045707a"],["/posts/608487bc/image-20221102113043930.png","3f3a170e8eb2fb149b1affa3ecfc279e"],["/posts/608487bc/image-20221102211948049-16675499197722.png","f4d0bb856b39788c76c20280b645cf24"],["/posts/608487bc/image-20221102211948049.png","f4d0bb856b39788c76c20280b645cf24"],["/posts/608487bc/image-20221102212007167-16675499197733.png","42a1fe33342488b15eca084b60958ebc"],["/posts/608487bc/image-20221102212007167.png","42a1fe33342488b15eca084b60958ebc"],["/posts/608487bc/image-20221102212512315-16675499197734.png","720c392fb02d9c6b085bd4162a04f7ee"],["/posts/608487bc/image-20221102212512315.png","720c392fb02d9c6b085bd4162a04f7ee"],["/posts/608487bc/image-20221102212536844-16675499197735.png","4d7783e153d035f64bd759467a944101"],["/posts/608487bc/image-20221102212536844.png","4d7783e153d035f64bd759467a944101"],["/posts/608487bc/image-20221103183419746-16675499197721.png","68e52a22ae3b975604a7f25b53768f48"],["/posts/608487bc/image-20221103183419746.png","68e52a22ae3b975604a7f25b53768f48"],["/posts/69c3279c.html","4df425d8d01451b9c163b95cc3d8b831"],["/posts/ef715bdc.html","681b2ec7a83305b6f57ff5335df580c9"],["/posts/javasript.html","0fce135b7b1ca411175245f598a2b274"],["/posts/javaweb.html","a8cc043f9d175ec4d6671d4ca06b14c1"],["/posts/javaweb/image-20220502140314660.png","5433a9eed3e79c069627b56a7d076d74"],["/posts/javaweb/image-20220502140727114.png","6fb51e49a2309f13fa971fb15d9ca84a"],["/posts/javaweb/image-20220502142232683.png","7ea3bda700dfb93b4988c701d726d7ab"],["/posts/javaweb/image-20220502143823099.png","97663b99aa2297d570f004d328bb40c8"],["/posts/javaweb/image-20220502144210434.png","c0749a90aafcfc73063c2d90ead0d82c"],["/posts/javaweb/image-20220504211103839.png","a2f13c1a6ef03391bc444445aba52a74"],["/posts/javaweb/image-20220507111424911-16673601179191.png","9337509bf3ba6b324dc73efb870898e3"],["/posts/javaweb/image-20220507111424911.png","9337509bf3ba6b324dc73efb870898e3"],["/posts/javaweb/image-20220624161858415.png","92eb04e7d57a12beee01b1a3fea83f68"],["/posts/javaweb/image-20220629100803516.png","cbb51fb6b984680db1a6b89364aa8859"],["/posts/javaweb/image-20221102113146065.png","4b974fdf51fff00a982384576bb67149"],["/posts/js.html","299133f4dba54d2a32e286e7535c0ba3"],["/sw-register.js","65b57ab420bb28e9a52997345fb41954"],["/tags/git/index.html","171415f532b64ba4163874b3ef776eab"],["/tags/hexoi/index.html","ec8cc21d8547c5930f2111ddaf4f2328"],["/tags/index.html","b95a813a729a227d14e5bb11cb188e4d"],["/tags/javascipt/index.html","7e72e1acd2c4cf8d331b7e4283ac28a3"],["/tags/javaweb/index.html","9c15ff104056aa5e782713cf91a5ba05"],["/tags/vue-html/index.html","b620851c2537007abfc35785416e5369"],["/tags/计算机网络/index.html","7ab1f82cbc00ebe2e58709c1b2fbc01a"]];
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
