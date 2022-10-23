const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "wzl"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

// ע��ɹ���Ҫ�����������Դ�б�
// ���建���б���gulpfile.js�����ã�������
workbox.precaching.precacheAndRoute([{"revision":"78341bd4a14751921b6c5a9df0990d48","url":"./index.html"},{"revision":"b28662bf81abe2838d20faf2980f0034","url":"./js/main.js"},{"revision":"72dcc49118407056f56bdcd8aa9bf586","url":"./css/index.css"}],{
    directoryIndex: null
});

// ��չ��ڻ���
workbox.precaching.cleanupOutdatedCaches();

// ͼƬ��Դ����ѡ������Ҫ��ע�͵���
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// �����ļ�����ѡ������Ҫ��ע�͵���
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// �ȸ����壨��ѡ������Ҫ��ע�͵���
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// jsdelivr��CDN��Դ����ѡ������Ҫ��ע�͵���
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();