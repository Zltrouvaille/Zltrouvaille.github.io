/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2022/10/index.html","2f5f17f4883291a6fbf4b2e35de65bde"],["/archives/2022/11/index.html","1b9b7d54e104b1c38ed7b8252593e318"],["/archives/2022/index.html","41075c14a32a72faeb043303d2dd5c58"],["/archives/index.html","a6fdda7501134b98a097dad2ccc859db"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","1c0223ac7bd53f010f6c69ac9f6c829e"],["/categories/index.html","2482ce2a07887db4c44642446c02b3b1"],["/categories/前端/index.html","e29649a077e7bb89f5d05898707f2060"],["/comments/index.html","d40e3b6401d953507ca9c3b3fa3505ef"],["/css/custom.css","e8e9c6ea5bddd79c933041b06ee39db6"],["/css/index.css","95efb71e09de6f45dcaf4933404baa18"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","593be580ad241e838233ce84659c94a6"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/image-20220427220104115.png","7e4de65811d408a8aee924f397a2ba63"],["/img/image-20220427220152237.png","150f037bde60cb0f9ad00e0c1d285b1c"],["/img/image-20220428222212086.png","af9e780db8d8e4155b398403be5814cb"],["/img/image-20220429140221258.png","2b089a9b1040bb8419686ec362aabee1"],["/img/image-20220429141122222.png","e6e6d88b1d7565f2598e9f9a25f7d32f"],["/img/image-20220429142040506.png","1e6e8b5ecf74f3623151348f8ad0dea1"],["/img/image-20220429223004206.png","39412a5b611d42ec8e0ae79c67de65fb"],["/img/image-20220429223129391.png","6d4d6a5053e8e8f11d426240c45879f7"],["/img/image-20220429223247918.png","fe51cad97f2bf309cb9f19da76ab20e7"],["/img/siteicon/README.html","9c7c253e61e8689da5a7877cf00c7ad2"],["/img/siteicon/android-chrome-144x144.png","83ed0840685ae241bdc1244a49b9e319"],["/img/siteicon/android-chrome-192x192.png","d0360ad0845943785c009d033599da4f"],["/img/siteicon/android-chrome-256x256.png","7bad735b1787e284270994ba69ead947"],["/img/siteicon/android-chrome-36x36.png","25fc09637eacfdd2f1bc473fc8fd5a26"],["/img/siteicon/android-chrome-384x384.png","697d212d21555090122a60c04507ab9a"],["/img/siteicon/android-chrome-48x48.png","126ed2443633b4371bf9585584c97684"],["/img/siteicon/android-chrome-72x72.png","96ec97a39d67a6c8653d4610010cdfa2"],["/img/siteicon/android-chrome-96x96.png","6c5bd5e101ffa093f1bab2a5ed058917"],["/img/siteicon/apple-touch-icon.png","92654e12c45aa35dd1df7af1a4f98557"],["/img/siteicon/favicon-16x16.png","52ec322fee6ab1a1b8ddba03a46b236d"],["/img/siteicon/favicon-32x32.png","cbe56b4950cf83ab60b13fca48eec08a"],["/img/siteicon/mstile-150x150.png","343b342fb31d7fbe54e7fb60e4c299c6"],["/img/siteicon/safari-pinned-tab.svg","29cc901f63d202c6e27e30227217b21e"],["/img/wechat.jpg","3d0d433d91b58439315bf9e979d8d0d1"],["/img/xT8hB6.png","74684f51acfa40e9b191f5ba81b0f378"],["/index.html","b1e666d03478b4c84dedaf476285077f"],["/js/ali_font.js","08b3d076932e20bf24d8a90db183e21a"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","09fb9bd830650e899be6736960ac9775"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/48x48.png","5cec9db3fb639402427c7dab2dc89583"],["/medias/README.html","f55dfb16df63427c5cca478ae7f293ef"],["/medias/android-chrome-144x144.png","08fc79a9f8dc3f998a349b7b632fa522"],["/medias/android-chrome-192x192.png","6fea991dd699da23cc2ca5b5820f3a43"],["/medias/android-chrome-256x256.png","f1302d2cabf8a14d726d8e3101e8c2b1"],["/medias/android-chrome-36x36.png","a4ea92cd1094483da595c0e32f699c1a"],["/medias/android-chrome-384x384.png","45bdc7e32167bb4c4b2f3f9b96de46f1"],["/medias/android-chrome-512x512.png","77b8773f4e2bb9aa4b485a48e34c7bd0"],["/medias/android-chrome-72x72.png","283a649c22edaa9bfb8b0426890c9e71"],["/medias/android-chrome-96x96.png","3a271c76d9e3e8fe9886f618549ec703"],["/medias/apple-touch-icon.png","a1aef9df6b13c31269b041db43a538b3"],["/medias/favicon-16x16.png","babe7630336c99d73ae54b31ca49c712"],["/medias/favicon-32x32.png","da9811d5f7fc054098faf6a780956fa9"],["/medias/mstile-150x150.png","79db626eb7e64c4b636522caceb825ab"],["/medias/safari-pinned-tab.svg","7a087a2c5e4c3a581c6cf1dab94775e6"],["/posts/608487bc.html","c1d77c96cd33b81f7c36a300356f1f59"],["/posts/608487bc/image-20221102112041266.png","8e358432747795a6b285bfa3f045707a"],["/posts/608487bc/image-20221102113043930.png","3f3a170e8eb2fb149b1affa3ecfc279e"],["/posts/608487bc/image-20221102211948049-16675499197722.png","f4d0bb856b39788c76c20280b645cf24"],["/posts/608487bc/image-20221102211948049.png","f4d0bb856b39788c76c20280b645cf24"],["/posts/608487bc/image-20221102212007167-16675499197733.png","42a1fe33342488b15eca084b60958ebc"],["/posts/608487bc/image-20221102212007167.png","42a1fe33342488b15eca084b60958ebc"],["/posts/608487bc/image-20221102212512315-16675499197734.png","720c392fb02d9c6b085bd4162a04f7ee"],["/posts/608487bc/image-20221102212512315.png","720c392fb02d9c6b085bd4162a04f7ee"],["/posts/608487bc/image-20221102212536844-16675499197735.png","4d7783e153d035f64bd759467a944101"],["/posts/608487bc/image-20221102212536844.png","4d7783e153d035f64bd759467a944101"],["/posts/608487bc/image-20221103183419746-16675499197721.png","68e52a22ae3b975604a7f25b53768f48"],["/posts/608487bc/image-20221103183419746.png","68e52a22ae3b975604a7f25b53768f48"],["/posts/69c3279c.html","41bc5a1289d3a0e007911de12452878a"],["/posts/ef715bdc.html","37af045104f5a9ca85a006f4a6bd47f4"],["/posts/f8c08006.html","e236bb8a273d9506de45ef6b480131c4"],["/posts/f8c08006/image-20221103101736653.png","4ad17c88fab7ac5b3733198ff6ab5f73"],["/posts/f8c08006/image-20221103101853691.png","ceefbf65f07b256e84ea857af030f528"],["/posts/f8c08006/image-20221103104632546.png","1022e97e6ceffa012aa2dab248d21741"],["/posts/f8c08006/image-20221103110823381.png","1f4aaef7a20b3fbb70fcc3aa51a47aa5"],["/posts/f8c08006/image-20221103110926438.png","93e1028ccf8a05e29f1c78d8242bf5a9"],["/posts/f8c08006/image-20221103160033401.png","26ce28ce95a09e32c0bfa339694657a2"],["/posts/f8c08006/image-20221103160729208.png","9822912ab4719cdc3ceb5d89a24bd5bb"],["/posts/f8c08006/image-20221103162655650.png","0764aab05d263c6347ea7bb1ab8414a5"],["/posts/f8c08006/image-20221103181749051.png","53be8f5f0a0e3c9bb60a5ff1099a75d1"],["/posts/f8c08006/image-20221103181956609.png","cf3b6d751e129f6c9a524283f988119c"],["/posts/f8c08006/image-20221103185811586.png","4fae98ac380f4a2b2cf1d42383042fd8"],["/posts/f8c08006/image-20221103190623241.png","6cac336f7ce42d3bbd1915ebd11fd696"],["/posts/f8c08006/image-20221103191814073.png","a450d7b861ab2938399578adc743c3b1"],["/posts/f8c08006/image-20221103193718874.png","4a02599179360755a9fdd8bc827b114a"],["/posts/f8c08006/image-20221103204114217.png","a97dffb6052d7f0e16778f8a7a54d4ec"],["/posts/f8c08006/image-20221104085147541.png","12f67b66658e8d8ab863aaa3023e5d10"],["/posts/f8c08006/image-20221104085222157.png","a44426c92b5786c20abd303253bcce66"],["/posts/f8c08006/image-20221104085238083.png","bf3d7edcebb0f7a4b391caf9200a6875"],["/posts/f8c08006/image-20221104085657528.png","fbda360c7109b19e261d20ba48eca04d"],["/posts/f8c08006/image-20221104090304187.png","cb3ffbb55f0b360f058c83b4fab1e852"],["/posts/f8c08006/image-20221104090325427.png","09abaaa09ff14cd8aa61d0b4111ea6e1"],["/posts/f8c08006/image-20221104092637923.png","a8466385d9b874a0365770bb3e599f1e"],["/posts/f8c08006/image-20221104172443877.png","67b7154b4b235baf8aa98511dc07adbb"],["/posts/f8c08006/image-20221104172615409.png","94627bcd39483d5cc81e65515fab833a"],["/posts/f8c08006/image-20221104173251450.png","9b42c9e7be47a1b71ac998a07a461845"],["/posts/f8c08006/image-20221104174123726.png","7962fef9d42e3484e186eb932deb6c2d"],["/posts/f8c08006/image-20221104174503669.png","71f8dc375a883d64da5ac3c38eff4167"],["/posts/f8c08006/image-20221104192401838.png","7bdc6a3a0afdc395dc89c024990f97fa"],["/posts/f8c08006/image-20221104194831545.png","cf1f47bd2f85c54a61949cfa31917e03"],["/posts/f8c08006/image-20221104200044664.png","09069062b203f9a216eb8f4026c0d158"],["/posts/f8c08006/image-20221104200427177.png","0c3cc243aed886b0da0cac9d97cc4f8f"],["/posts/f8c08006/image-20221104200501980.png","a4a8a3f29991c1fd9e0191db5fe003cc"],["/posts/f8c08006/image-20221104204554426.png","4f47d899aa79a99a20cf6d6f13f5b479"],["/posts/f8c08006/image-20221104204840881.png","4f47d899aa79a99a20cf6d6f13f5b479"],["/posts/f8c08006/image-20221104204844320.png","4f47d899aa79a99a20cf6d6f13f5b479"],["/posts/f8c08006/image-20221104210513073.png","62ac8913532f563044d9e2b5815ac691"],["/posts/f8c08006/image-20221104210600178.png","0de9cc9e6c32fb96faefa47dbb2980dd"],["/posts/f8c08006/image-20221104213336084.png","7857c53d04d258321c08e8472b267d9d"],["/posts/f8c08006/image-20221104214445196.png","114a0755e32c20ee7359581fd1455824"],["/posts/f8c08006/image-20221104215432780.png","c59c69c6a0ffe38972f64b3304386921"],["/posts/f8c08006/image-20221104220150887.png","736b1d3751edbadaa19c076b67b8ba4c"],["/posts/f8c08006/image-20221104220931967.png","bd1f0f11542928cf7eb4da71f9d693fc"],["/posts/f8c08006/image-20221105132301794.png","803c3b1b2e774bfee9bbdc3747d39058"],["/posts/f8c08006/image-20221105133510907.png","8d82b02faed57e96495163de6503e2a1"],["/posts/f8c08006/image-20221105133518929.png","0a0287f2b06872665a5611850d193cdf"],["/posts/f8c08006/image-20221105133554337.png","c4c43dd98587ae1ee43e74dcbe75a77d"],["/posts/f8c08006/image-20221105143011718.png","5cf0f693d4f2dd639166a712415f48e4"],["/posts/f8c08006/image-20221105143139384.png","875143234412cf72903f940b9774b565"],["/posts/f8c08006/image-20221106144811330.png","626ca9f6a4cdd6c3d221df57f3656292"],["/posts/f8c08006/image-20221106145003769.png","fd5d508c011e46603731589de320bd68"],["/posts/f8c08006/image-20221106150615434.png","a57d491aab9faf6f876e81d7938be20e"],["/posts/f8c08006/image-20221106154835780.png","31496365f2e6cf02bdf1f82822c36d23"],["/posts/f8c08006/image-20221106155129643.png","5915e23e80ec64823b7350e289e10e9a"],["/posts/f8c08006/image-20221106155133411.png","5915e23e80ec64823b7350e289e10e9a"],["/posts/f8c08006/image-20221106160840891.png","640fa31de828d735bdf1101643db3ab5"],["/posts/f8c08006/image-20221106163423565.png","d2d7f6ba56e53d30f0eb0bd2bde48bfc"],["/posts/f8c08006/image-20221106163504348.png","056361feee75ba32d6e335debcb15cd5"],["/posts/f8c08006/image-20221106164600723.png","5970b4ed72d70dfd6ae437ff12bc7fbf"],["/posts/f8c08006/image-20221106165151916.png","609efdc3063cd5cbeec7d5a791ae1987"],["/posts/f8c08006/image-20221106170656926.png","ffea47929e41a08f73020e8de95264e5"],["/posts/f8c08006/image-20221107103929973.png","60c04a28269a3b282c184c879d957229"],["/posts/f8c08006/image-20221107104038807.png","f0e752d4e54ef533da43a5242832f083"],["/posts/f8c08006/image-20221107105358052.png","7fbab148e928eb5b742821d8e2d1a34f"],["/posts/f8c08006/image-20221107110907980.png","c32cb1d05df6fe4cdf1e609a6b32f882"],["/posts/f8c08006/image-20221107160448085.png","aa6a2f70e469b72e6535a3ecaf62c951"],["/posts/f8c08006/image-20221107160508324.png","f639bd5fc0b672a90512238eb433b08f"],["/posts/f8c08006/image-20221107160524852.png","1f6a8a7b7d6b94e2dacfcbc71ef242e5"],["/posts/f8c08006/image-20221107160639395.png","217a3c87f0d7a6030648fc9d29a03a6b"],["/posts/f8c08006/image-20221107161823936.png","e8ec91e5e920e47c54dee3c1afd21cc6"],["/posts/f8c08006/image-20221107162419493.png","cc51de22c61377bfced82ef1f03cb842"],["/posts/f8c08006/image-20221107164157437.png","59597ff3a3d4f5867ae50c895c64c216"],["/posts/f8c08006/image-20221107165505575.png","a8ceb922c2337a82363fbdeb66427621"],["/posts/f8c08006/image-20221107165510006.png","a8ceb922c2337a82363fbdeb66427621"],["/posts/f8c08006/image-20221107165622523.png","7f8a28321a1c7877594d8835518cf3eb"],["/posts/f8c08006/image-20221107165731309.png","f40ed185d4de814d87f5bdb8f6e5cd80"],["/posts/javasript.html","fcd212441a8612313c7b8ce6823bc431"],["/posts/javaweb.html","73b368ab34b54ec552b9461c9b408d29"],["/posts/javaweb/image-20220502140314660.png","5433a9eed3e79c069627b56a7d076d74"],["/posts/javaweb/image-20220502140727114.png","6fb51e49a2309f13fa971fb15d9ca84a"],["/posts/javaweb/image-20220502142232683.png","7ea3bda700dfb93b4988c701d726d7ab"],["/posts/javaweb/image-20220502143823099.png","97663b99aa2297d570f004d328bb40c8"],["/posts/javaweb/image-20220502144210434.png","c0749a90aafcfc73063c2d90ead0d82c"],["/posts/javaweb/image-20220504211103839.png","a2f13c1a6ef03391bc444445aba52a74"],["/posts/javaweb/image-20220507111424911-16673601179191.png","9337509bf3ba6b324dc73efb870898e3"],["/posts/javaweb/image-20220507111424911.png","9337509bf3ba6b324dc73efb870898e3"],["/posts/javaweb/image-20220624161858415.png","92eb04e7d57a12beee01b1a3fea83f68"],["/posts/javaweb/image-20220629100803516.png","cbb51fb6b984680db1a6b89364aa8859"],["/posts/javaweb/image-20221102113146065.png","4b974fdf51fff00a982384576bb67149"],["/posts/js.html","1ad8e28776da453fa9fac8be0031aa2b"],["/sw-register.js","615478c6e7abda467781d04e5c8ca287"],["/tags/git/index.html","d30e12a11ef7e62a633c8c7d3b0f3315"],["/tags/hexoi/index.html","e0f1914e01eecc24f868a0fc3a4bbf22"],["/tags/index.html","d818f98ffd84f19a59927f7048c8c6f2"],["/tags/javascipt/index.html","7fc78c93a5312dfafbc12bb1f2a8bad4"],["/tags/javaweb/index.html","ee32ca1be39c7786492289f996c40c5c"],["/tags/vue-html/index.html","b2cf8dce26e75532c08560703241dd4a"],["/tags/计算机组成原理/index.html","8299e5685161550b0e63b74f74597d7b"],["/tags/计算机网络/index.html","8bc099f9cf4853ebe01b4120fbfc9493"]];
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
