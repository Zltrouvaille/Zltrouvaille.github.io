/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","ae765ed2457ed5e91f56c42623cd2932"],["/anzhiyu/random.js","7e338af41e2c0d816642da3bbe629868"],["/archives/2023/03/index.html","39c1ea24a908e3fd147c6f67fdfdc929"],["/archives/2023/04/index.html","964407b8c0274c3416255afaca1ac6e2"],["/archives/2023/04/page/2/index.html","8ac9c3d0481600703046ad51bf60495a"],["/archives/2023/04/page/3/index.html","b5a3e8b1e9a795ee6a6859afcdc832d7"],["/archives/2023/05/index.html","60f680173d491a0c8722cf27975ba706"],["/archives/2023/07/index.html","50dfa4e7e7e7f54f5988d32f124fbb8b"],["/archives/2023/index.html","df6759e8272fb1ebfaa26833833d8054"],["/archives/2023/page/2/index.html","33637bfbb556d1474de325c65bad0280"],["/archives/2023/page/3/index.html","ea3ee6fb6bcef11e67f3189ddf74cb79"],["/archives/2023/page/4/index.html","64caf16b5b4fdd872cec6a9e638e8794"],["/archives/index.html","bca41a3778bca7b64af89b955e9d0113"],["/archives/page/2/index.html","359f2ca39ebc83a510a810935cd25398"],["/archives/page/3/index.html","62b3d2c48929d5bd0be95b677e1e60b9"],["/archives/page/4/index.html","58db943e19b6271fa1e0779dc4e8a8fc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bangumis/index.html","6362214559ad8744ba6c8bacd18f5719"],["/categories/index.html","70e966364668623bb1b4b5773f4f0a66"],["/categories/python/index.html","758547ce557ec66a779a7e69f32b8e3d"],["/categories/分布式/index.html","fd61bb9a345547892223a690a0b2465a"],["/categories/前端/index.html","e736d5d19b8abb1ecd3287f61b20317b"],["/categories/可以昂/index.html","6eaf56daf0cb68af6b73b8fec9119066"],["/categories/安装/index.html","80e4fe6630d46ca2945850e591c9ca35"],["/categories/数据库/index.html","f5e858758d310fc6c0d8360772022db6"],["/categories/算法/index.html","144d55141c4a0b9899f126302791011e"],["/categories/面/index.html","1290e5fe1a4a0f94b3e2dc219f023bf9"],["/comments/index.html","00acc42d61d9a52ca64f873bf83a72a2"],["/css/index.css","bc0ff14176836f0621c7a93d74e9e364"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","422dbdbb226591426ba3137dce50f1a7"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.jpg","c2d4a57cd6abff978d2c52ee974c74a9"],["/img/badge/CDN-多吉云-3693F3.svg","0e72dbd2b0587257b942f44afce3d51a"],["/img/badge/CDN-百度云-orange.svg","3b1053dbc6168b9a367c3270b0d146c2"],["/img/badge/Copyright-BY-NC-SA.svg","77f0a6d80f5b049ecd8377de31fff3d9"],["/img/badge/Frame-Hexo.svg","4c529e432a05854034c8120c20d9812c"],["/img/badge/Source-Github.svg","c7d5c1efd84c41246fc809a44e4e0a2e"],["/img/badge/Theme-Butterfly.svg","973244a3db55c1dcdd9f158158082cd5"],["/img/badge/安知鱼-上班摸鱼中.svg","2ddf9b883002495b3d9cfdd205d2c529"],["/img/badge/安知鱼-下班啦.svg","0f95fbacb8ca0f4210816ae2833bf531"],["/img/badge/湘ICP备-2022004213号.svg","49cffe71021b807277d99471b52e7d04"],["/img/banner/autumn/bilibili-autumn-1.png","d0126c2f77be1c05db18ae232d32d5d6"],["/img/banner/autumn/bilibili-autumn-2.png","d2a39ea27e84a748cc5d7ed797fa812a"],["/img/banner/autumn/bilibili-autumn-3.png","87dc02c34361e01a003e25c080bb0e58"],["/img/banner/autumn/bilibili-autumn-4.png","1e55fb613db45320eb1dc04437e93126"],["/img/banner/autumn/bilibili-autumn-5.png","5d41b2f5acbc6815185c68b7ac291f4b"],["/img/banner/autumn/bilibili-autumn-6.png","ca7b16bf03dddc687e7e657d523bd5ec"],["/img/banner/spring/bg1.png","fc80b886dac11da0356cea9491eadb99"],["/img/banner/spring/bg2.png","f9b601453fcd8f34f892cd401e85929f"],["/img/banner/spring/bg3.png","fe2729481f92c585d19519ed4fa34f74"],["/img/banner/spring/bg4.png","5551eaf16113b5733cd8b6e33e434400"],["/img/banner/spring/bg5.png","fc2aa2f34ccdf40d1f2e9d9645dbc7ed"],["/img/banner/spring/bg6.png","1a6a0973d6d444858fb0c916f2794ac8"],["/img/banner/spring/bg7.png","9ca5e2415767bbae62539a16f2e4c68f"],["/img/banner/spring/bg8.png","ae2eeaa9f8206b0d709c87e6e4f5e898"],["/img/banner/spring/f1.png","3d4fa2d7ae6e58c52f39c4096c8f9602"],["/img/banner/spring/f2.png","3d4fa2d7ae6e58c52f39c4096c8f9602"],["/img/banner/spring/p1.png","7fa348a13ff9581e4e3bd587c7c5d32f"],["/img/banner/spring/p2.png","748c9bb81b6f21bb6a455d1b21e888ae"],["/img/banner/spring/p3.png","7a1e1cb50eb0cbcc4526e35f357a8893"],["/img/banner/spring/p4.png","a5b3209d4f46abd1390f93fba3090088"],["/img/banner/spring/t1.png","15ec44cde98052779e25011b02b46b60"],["/img/banner/spring/t2.png","4bb66365c14b4cb11e50cf997fcd6497"],["/img/banner/spring/t3.png","11fe26fb3c7e8170346963a7feaec803"],["/img/banner/winter/bilibili-winter-ball.png","941b1b6c5a67b44438a89418c7a6fad9"],["/img/banner/winter/bilibili-winter-tree-1.png","90d05064751ae6222659948f3de40442"],["/img/banner/winter/bilibili-winter-tree-2.png","9f21321f1e24d84f2fe956cf1b157e2d"],["/img/banner/winter/bilibili-winter-tree-3.png","79939bcd998761c525747bbcfad61e89"],["/img/banner/winter/bilibili-winter-view-1.jpg","43e982a914abbf4eb9f5f53773cfdca3"],["/img/banner/winter/bilibili-winter-view-2.jpg","6a60e5a66466357a9e5ca49ef9fd3337"],["/img/banner/winter/bilibili-winter-view-3-snow.png","99d5ddb9f3623b1f523bf3d3a3341569"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/default_cover.jpg","569c7962afb937ba6e3ccd21934b5e47"],["/img/favicon.png","d8499ef17be10a92728a69f02f2cf947"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/people/open-peeps-sheet.png","ee23df8517f3c3e3efc4145658269c06"],["/img/siteicon/128.png","e692372c5042285f19f1dafcfbce2dd6"],["/img/siteicon/144.png","11720d7a2dc84f1cad3116b70d129831"],["/img/siteicon/144a.png","11720d7a2dc84f1cad3116b70d129831"],["/img/siteicon/16.png","56ff65c5baf4d7d935b66685417f88c6"],["/img/siteicon/192.png","bb7a5ef1d26476b312e0a1d0ce2e275b"],["/img/siteicon/192a.png","bb7a5ef1d26476b312e0a1d0ce2e275b"],["/img/siteicon/32.png","d8499ef17be10a92728a69f02f2cf947"],["/img/siteicon/48.png","18d620a799194d49c3cbb84da1a13474"],["/img/siteicon/512.png","c4c78c105bba3b9651bd5bcd24e958cb"],["/img/siteicon/64.png","b555cec0f98a9371a14ca48f3f17c626"],["/img/siteicon/apple-touch-icon.png","c4c78c105bba3b9651bd5bcd24e958cb"],["/img/siteicon/splashIcons/icon_1125x2436.png","b2f890d6b9fa042e9152585e17041e3f"],["/img/siteicon/splashIcons/icon_1136x640.png","671649cd535adfc4553411ca7a61b374"],["/img/siteicon/splashIcons/icon_1242x2208.png","eb5d45c9c5256b1f1fca13bec104b623"],["/img/siteicon/splashIcons/icon_1242x2688.png","604d3163e9277de0a352c0c7c185daeb"],["/img/siteicon/splashIcons/icon_1334x750.png","c0221818c38df6cc9480dcfb62dc96b1"],["/img/siteicon/splashIcons/icon_1536x2048.png","b4f17174bd61f4ac3d4dcaa42f3f444f"],["/img/siteicon/splashIcons/icon_1668x2224.png","97c4041d4e0e3c1fa1f677fbaf9011c3"],["/img/siteicon/splashIcons/icon_1668x2388.png","37c6c01618a42d1a3531724b5c38e2a3"],["/img/siteicon/splashIcons/icon_1792x828.png","bbb4168d1f66f974bbfdbb3f99fe4965"],["/img/siteicon/splashIcons/icon_2048x1536.png","5338f20ffa4939c21408ae286562fd1e"],["/img/siteicon/splashIcons/icon_2048x2732.png","707236819aee3816a27fb8898f09d9b9"],["/img/siteicon/splashIcons/icon_2208x1242.png","462945f6ef09e0a3188ddf14720762d6"],["/img/siteicon/splashIcons/icon_2224x1668.png","31f54cdd65a9bff95ce23cb8a3a506f7"],["/img/siteicon/splashIcons/icon_2388x1668.png","357fbba8fcba969b00334fbcc080c25b"],["/img/siteicon/splashIcons/icon_2436x1125.png","42697a2988bbc4cd36bd8ebfe082a335"],["/img/siteicon/splashIcons/icon_2688x1242.png","7ce3bd96e8933de6242ac212648cfa13"],["/img/siteicon/splashIcons/icon_2732x2048.png","f87f22a489511d9346b2696d1afc7050"],["/img/siteicon/splashIcons/icon_640x1136.png","441c175c92c4e99206d5f930882deb0a"],["/img/siteicon/splashIcons/icon_750x1334.png","b70cc0c5557f6451ea7fa494233373cc"],["/img/siteicon/splashIcons/icon_828x1792.png","c1305b7f1b6d0cb161e5d5c0dff1a520"],["/img/svg/ESFJ-A.svg","fcc716f3b79d0caa8e6f19fa09ffbc0c"],["/img/svg/node-logo.svg","c4107e0227b4aae4135b53a4fb7a6755"],["/img/svg/pinia-logo.svg","03831fda115330606b4b8c058e84f0e8"],["/img/svg/vite-logo.svg","86f0c9163c4eb30ebc3516a4565cce5a"],["/index.html","e66c4dc6e54eb73a2b2748aeedcd169f"],["/js/anzhiyu.js","bc1f9c9da92c3bcb1f76dd19903ac8de"],["/js/anzhiyuOnlyOne.js","88f20d3e1aec722bc15f90717ca2a0f1"],["/js/anzhiyufunction.js","93c5b376e62905b08e0b591742701b95"],["/js/main.js","11a2246ff885bf1781168253e94e1980"],["/js/search/algolia.js","6fdef0f4853b5017723c48a26f89bc97"],["/js/search/local-search.js","a99ce0bac3c0fa457e1cbaacb53e8c57"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/js/tw_cn.js","f4218341126d71a8060ba832d5a76807"],["/js/utils.js","6c09ef32d5c069a1113ec31a015e62c6"],["/link/index.html","edd26fb82830c34ce7f4dd24e013b4ea"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","9df1d96109de14b617547f6fe1d4f079"],["/page/2/index.html","3f20af8935b0b0199617ba77eea957b5"],["/page/3/index.html","0497cdf136b338001921d01fad27a974"],["/page/4/index.html","2c5fa99619982848b2d4cf9efe9ab6b7"],["/posts/146ef55a.html","03a89f699607f3d38caa7cf8a4ff43f4"],["/posts/146ef55a/image-20230403103452840.png","341ea40cef03e00f87b79a61dee6124a"],["/posts/146ef55a/image-20230403103813610.png","141ffbb67eb7293b3af63bf3aef7fcc9"],["/posts/207b1172.html","9aa2725751fbe569735a80dceb79343e"],["/posts/22e30075.html","4fa548ef05e988c469349ebd9a168528"],["/posts/22e30075/image-20230409214241782.png","781fa8e0d791b9ae2c2710cad903aca1"],["/posts/299e1693.html","f5746998f38c3db4eedde2ff78e513cd"],["/posts/33115a55.html","b72174749c4fe3aed108f63237c9ade8"],["/posts/386a367.html","dacd2de49fa09ba30b5091926118e252"],["/posts/3ad834c9.html","2f3cb69b7d8c9c76700e261e35a98fce"],["/posts/3f00482b.html","81575711bb4c9dedfb560a331675e396"],["/posts/460c1130.html","5d339eb463a6a76480ec71c4a77c1d54"],["/posts/5f64e705.html","ed875b1ff9058e0be81a94fc063532f2"],["/posts/608487bc.html","c8d8fd3b7ef6fc315d146e11afb0364c"],["/posts/6758e0f8.html","837707df8f34958cae38e1a2acd9d78b"],["/posts/6e827460.html","d01da2a45d09566797f09ef319248d55"],["/posts/7ade1d5c.html","d00da9e260575fd84dd70409eeb4875f"],["/posts/7ade1d5c/image-20230410190126855.png","75e3bdec0453092616314a23ea67098c"],["/posts/7ade1d5c/image-20230410204213213.png","9995baee68e797160a08f71096666ecc"],["/posts/7ade1d5c/image-20230410204304068.png","06a9d703a0ccf84a93d5617198e8f8b5"],["/posts/7ade1d5c/image-20230410204407459.png","c2f9c5d6d8434f545881fcb14482fa94"],["/posts/7ade1d5c/image-20230410204412457.png","c2f9c5d6d8434f545881fcb14482fa94"],["/posts/7ade1d5c/image-20230410204542932.png","c276cc5a11b5c2c4830c57ca204d1716"],["/posts/7ade1d5c/image-20230410205255352.png","9c2d8877b1db2950cc36f59c2739e4dd"],["/posts/7ade1d5c/image-20230410205511577.png","5c52933065f62c1202a104414e4224fb"],["/posts/7ade1d5c/image-20230410205727276.png","85f94d612f8b304c6215b50b39f6ded2"],["/posts/7ade1d5c/image-20230410210324001.png","a553296ec7d8c756223afb9366133997"],["/posts/89399289.html","1d0b14593fbbe520e2ea4237ade3c36e"],["/posts/9a707413.html","f885dbc8d1f04e6317d5ee2bc16d151a"],["/posts/a2e2c4e5.html","e98d9f9ff920af18d54df48053841d22"],["/posts/a4d4b8b8.html","8ecdb6967db1390e6917e4742f0296df"],["/posts/a4d4b8b8/image-20230408153526981.png","5b6949e26b442307588b3c4812c402d8"],["/posts/a4d4b8b8/image-20230409155154145.png","8975d6e767e34ed6ee2fec601aad9146"],["/posts/b0a4ab20.html","d01caa523579e043481d37540e19c2e8"],["/posts/b0a4ab20/image-20201115230900504.png","3b93cbf544674c6f6edf98623615db0a"],["/posts/b0a4ab20/image-20210109105135812.png","05df0bd45f102d23c41a7c5b1d70ee15"],["/posts/b0a4ab20/image-20210506101053676.png","fb7a0dcd11fc569fabbb6538102e3d54"],["/posts/b0a4ab20/image-20210506102630393.png","d6e6a36152674d504b876298c27db488"],["/posts/b0a4ab20/image-20210506110249144.png","354b2be9163b2ff6d4741663ab2161a5"],["/posts/b0a4ab20/image-20210506110704293.png","d0c1f5317de86d1256bceee954781924"],["/posts/b0a4ab20/image-20210506112225508.png","300fe0eafa193fa785d8a03ec1afe28a"],["/posts/b0a4ab20/image-20210510165308064.png","34766b9e632fa0c8916bed7f8014d6a5"],["/posts/b543ced0.html","02b505a9d1911c1d8cbdacb5f888477b"],["/posts/b543ced0/image-20230412204244516.png","c340851559102207c5d944c2208585ee"],["/posts/b543ced0/image-20230412204251104.png","d47930551a7b94ab891c7fb12e5fd16f"],["/posts/b543ced0/image-20230412204353365.png","989d06535d4c0d496981f9589a507700"],["/posts/b543ced0/image-20230412204514016.png","989d06535d4c0d496981f9589a507700"],["/posts/b543ced0/image-20230412210648299.png","ddbfd77369c0f182faec39267b905985"],["/posts/b7e144d1.html","8c506a287b161a3eff4e4d88ee50c49a"],["/posts/c0155143.html","2ba8f626d22eaedd2a0aa622edfb877d"],["/posts/c0add594.html","d9db92a2b3fbb0f933ea347391b71c7f"],["/posts/c0add594/image-20230421103931849.png","1ba5a9782d743a46c36eab5ed6006303"],["/posts/c0add594/image-20230421104014908.png","64bf1b9c154b9976368257df212c6cbb"],["/posts/c6e613d8.html","b6bc13fe0d0df48b5678dbbae108c477"],["/posts/c6e613d8/image-20230412092406065.png","470036fa1476ff486d7791807640b824"],["/posts/c6e613d8/image-20230412093843599.png","174371dc5cea35c53c0de5b1186a3ac6"],["/posts/c6e613d8/image-20230412094540218.png","4537c61f4c6996632abe4e3a32da6e55"],["/posts/c6e613d8/image-20230412101418577.png","99d462acc6bd5eb5b35cabc994232ef4"],["/posts/c6e613d8/image-20230412101421996.png","99d462acc6bd5eb5b35cabc994232ef4"],["/posts/d48132d3.html","6bab5c6136f56fd182a59dbe9d1f68b5"],["/posts/d48132d3/DKV9HZbVS6.gif","6795efdd944fa1c426ac9ef94755671b"],["/posts/d48132d3/image-20200104124440086-5602723.png","e3e8914f1418efc3923e087ce2667e11"],["/posts/d48132d3/image-20200104124551912.png","0f744585940501b4513e67af778f62cf"],["/posts/d48132d3/image-20210720212933362.png","4dffe65c08acc54dc1d90a39236727d8"],["/posts/d48132d3/image-20210720213345003.png","90271358c4c654c5081fd4c717710c45"],["/posts/d48132d3/image-20210720213634918.png","6de90e8734a5264a82467b4be37806db"],["/posts/d48132d3/image-20210720214555863.png","7bae3ecb97ae1c5dd7c29e5b231a3b09"],["/posts/d48132d3/image-20210720220400297.png","14a779aed78a68805716dcc6fe91d38d"],["/posts/d48132d3/image-20210720220503411.png","51325d809e1054b4595e2480fab31879"],["/posts/d48132d3/image-20210720220647541.png","39d47f423ee822471702ea5feb4c9b56"],["/posts/d48132d3/image-20210720222110126.png","7360702d9cdc7a5fc190e441bfe6016c"],["/posts/d48132d3/image-20210720222221516.png","125d32d4f8d9e97f8626a153c10a8c61"],["/posts/d48132d3/image-20210720223049408.png","b7918e434a7a69c4685fb72507d1d8b6"],["/posts/d48132d3/image-20210720230027240.png","d085d94aa2e0de6a2d7cf6edfabea043"],["/posts/d48132d3/image-20210720230811674.png","a8ab4919d78338095a53c4b1872e320a"],["/posts/d48132d3/image-20210720231040875.png","09ee45d68105d508ecb6e2d17c85c88d"],["/posts/d48132d3/image-20210720232105943.png","a1394986d2cad0cf871b54286194fc4e"],["/posts/d48132d3/image-20210720232431383.png","a406babb441c9f161174ba159397d7f9"],["/posts/d48132d3/image-20210721165326938.png","2772dd4e247422c05a6664c610a0ccbc"],["/posts/d48132d3/image-20210721170455419.png","2e4d8d83e1b42419cc1b98531ac8eb94"],["/posts/d48132d3/image-20210721170720691.png","c58882da320876fbdb8376ce836b1424"],["/posts/d48132d3/image-20210721171655308.png","f15a2c607bbe44a327ecb91f9986f8b8"],["/posts/d48132d3/image-20210721171838378.png","e3e38f794b6a3f992a118519fe094fa4"],["/posts/d48132d3/image-20210721172307172.png","0ccfbe699698e3035d8c3ac53e419df6"],["/posts/d48132d3/image-20210721172645103.png","17f680fdf58fadade3c1cdc3d4652f5f"],["/posts/d48132d3/image-20210721172654880.png","99c0abdf0b4385cca080b5787a83ba51"],["/posts/d48132d3/image-20210721175443234.png","371a48cbc86f0a38ef5f654fbfeaf3c2"],["/posts/d48132d3/image-20210721182031475.png","ab822bfbafc605e68bd2cc63ddb2e847"],["/posts/d48132d3/image-20210721190152134.png","38e403dde3400e46a4c744cc426a898d"],["/posts/d48132d3/image-20210721190416214.png","a5fd50f4bde9781e180d709a326d71fc"],["/posts/d48132d3/image-20210721190907320.png","cd7f640648ed2ab4279d5a2b4cc789d2"],["/posts/d48132d3/image-20210721191144560.png","9056502803356095ac7f9426e0ac7638"],["/posts/d48132d3/image-20210721191544750.png","3dec05e6a6a32bfd565e839ef940988d"],["/posts/d48132d3/image-20210721193152520.png","c4788e753f9de76bdf53cc0ec6a5173e"],["/posts/d48132d3/image-20210721193458182.png","472061c36824449536721243bc7c0ae1"],["/posts/d48132d3/image-20210721193822848.png","593536c5c5a274604cec4601b88ef4c5"],["/posts/d48132d3/image-20210721194744183.png","de11b1ab5d09c8d82b9cf64ffed7dff0"],["/posts/d48132d3/image-20210721195728306.png","f9b729b54388adcfcd55a24bae50857a"],["/posts/d48132d3/image-20210721200214690.png","12a875fb2262e01004ed57229b029e3b"],["/posts/d48132d3/image-20210721200643029.png","68e7d13f5897b8290481311ade96293a"],["/posts/d48132d3/image-20210721201003229.png","096d3bee880a371e2abbb7d48f6b5ec6"],["/posts/d48132d3/image-20210721202705030.png","403967979ad28b7b80b9bf30c770b010"],["/posts/d48132d3/image-20210721203349633.png","29ab343c7024ef88ccbc3f0760217fc5"],["/posts/d48132d3/image-20210721203657850.png","3ade73d67fe36137c1777f9c95262b9d"],["/posts/d48132d3/image-20210721203950559.png","c9f494586aac95d1f898629d895c44b0"],["/posts/d48132d3/image-20210721214221057.png","d273adf7a6d8a98a15eb64a9a2406f1f"],["/posts/d48132d3/image-20210721215640790.png","30f6625172c4ed8c28db7bafaaf251ba"],["/posts/d48132d3/image-20210721215729236.png","bccc42b66eac4e0a3c8d31a611d2c871"],["/posts/d48132d3/image-20210721215843099.png","d0ce4b6901e81fbd196e5291618c4a54"],["/posts/d48132d3/image-20210721215923060.png","85a5cc4f35d31443e786f994dac9d0c9"],["/posts/d48132d3/image-20210721220305140.png","282baf3bcad011fd6284d977f0753653"],["/posts/d48132d3/image-20210721220927286.png","17b3bf4c9d50a5b65f8497f2883e3db6"],["/posts/d48132d3/image-20210721221121266.png","3d98f909b6e1a81023d4f703c094b3e7"],["/posts/d48132d3/image-20210721221744883.png","375521f6e66714c87eb7c8e811e32ff8"],["/posts/d48132d3/image-20210721222057212.png","fcc4d6b2d9ef5e05f3d7648dfb7d0bdc"],["/posts/d48132d3/image-20210721223159598.png","c8ee01ef3e5a684c09cd9ff7ab1e22ea"],["/posts/d48132d3/image-20210721223859419.png","6fcbd25a072b6e1f88f8c9db679993cf"],["/posts/d48132d3/image-20210721224033789.png","bd1593f01d09563a060a0ed2b7718590"],["/posts/d48132d3/image-20210721224112708.png","627ce1c6183d383a1078d4552d6c2c2f"],["/posts/d48132d3/image-20210722091940726.png","8d4d7e7366f30bb5a45c42326594b9a8"],["/posts/d48132d3/image-20210722092051994.png","ea8a65a4f9285d51630e4ea7573d3163"],["/posts/d48132d3/image-20210722092935453.png","6754a63694984e6a8d52c997a9480de9"],["/posts/d48132d3/image-20210722093414542.png","c3d8fea895cad8b185124df3c3925efd"],["/posts/d48132d3/image-20210722093642382.png","f14af3123af3e0224ffb1cff25efed87"],["/posts/d48132d3/image-20210722095227059.png","26cd051162ec7482e76d172eb1f3e13d"],["/posts/d48132d3/image-20210722095648542.png","72d2c4ca3a2d822e3a4173a49440f898"],["/posts/d48132d3/image-20210722095902314.png","6629ecb458cb8b87533125836d76d533"],["/posts/d48132d3/image-20210722100040674.png","efbe8a929dc29a6bb707fc213317750b"],["/posts/d48132d3/image-20210722100613966.png","35c0092daab970c41e9b23aab053487e"],["/posts/d48132d3/image-20210722100838604.png","9bbf5b8ab755785e16b1e82e90f09616"],["/posts/d48132d3/image-20210722100947292.png","a38d41a1e4a6bec704f6ba3b8c9cc947"],["/posts/d48132d3/image-20210722101908062.png","112635106e17fa162601b689cfd89923"],["/posts/d48132d3/image-20210722102850818.png","d2f2fda5049dee49858a5898c2759abf"],["/posts/d48132d3/image-20210723171948228.png","045507ac495058cc953235172ac15caf"],["/posts/d48132d3/image-20210723172404836.png","340e991fde6d15a58429560f0412209e"],["/posts/d48132d3/image-20210723172917636.png","67670e14a5abe5ee6a15071992bc7287"],["/posts/d48132d3/image-20210723173057733.png","cc3c1fb77cec69792e9f56a43618ebca"],["/posts/d48132d3/image-20210723173215728.png","09d867346a4b6e97ec9b8cd190f27370"],["/posts/d48132d3/image-20210723192605566.png","23561e3f118c97e32d3ca8f95d65cc4b"],["/posts/d48132d3/image-20210723193730799.png","ec59aeb80be4ec00296fa013d20de728"],["/posts/d48132d3/image-20210723203915982.png","a4e2be53159a29c46a44a6216cc0269c"],["/posts/d48132d3/image-20210723204936367.png","06589481cf517964d5623b1688cd4bbc"],["/posts/d48132d3/image-20210723205722303.png","2ded121c3d2992e01c8368eddae1e7ed"],["/posts/d48132d3/image-20210723205932746.png","98b8c0c0bac49f3c302b5f97af4fc8f5"],["/posts/d48132d3/image-20210723210126506.png","515dfef704bf5a7816b7dd24784c0a3e"],["/posts/d48132d3/image-20210723210427878.png","79d3cca99ded3a5ff7cf0d71383ca32d"],["/posts/d48132d3/image-20210723211829150.png","046d3e32098bbb5fc838cd8349e798d0"],["/posts/d48132d3/image-20210723213546183.png","8f19078dec5007b92c9b10aa86e43af9"],["/posts/d48132d3/image-20210723213759922.png","a65054ff019501f975ef140def8e3977"],["/posts/d48132d3/image-20210723213917524.png","9c17c392d2b757c8d611a7925518df35"],["/posts/d48132d3/image-20210723214021062.png","62a79c4576fdfdd7c4321157a58a1ead"],["/posts/d48132d3/image-20210723214758392.png","f331d37395546a44d7f8aa9079de8808"],["/posts/d48132d3/image-20210723214931869.png","c23f8d1027d337c2f55dfcda1aac69a9"],["/posts/d48132d3/image-20210723215140735.png","d5998cf60e46a42882a32c396221ea59"],["/posts/d48132d3/image-20210723215518541.png","9c78f220c5746bd227b6a71b6707d7ae"],["/posts/d48132d3/image-20210723215850307.png","c1e06c92f6a3947c38ec6577cf2a11cc"],["/posts/d48132d3/image-20210723220237930.png","28526249e8fe07b7c6bd42089c839b7a"],["/posts/d48132d3/image-20210723220354464.png","333c47760f4ebf7a5f03ceca42ef2949"],["/posts/d48132d3/image-20210723220511090.png","6f1223739ae4e0c564d0e0e7f0ad224c"],["/posts/d48132d3/image-20210723221843816.png","d0afe430f232884b74b2c514806a864f"],["/posts/d48132d3/image-20210723222732427.png","0f2f27f694336911b1a3b385f3df1272"],["/posts/d48132d3/image-20210723222812619.png","d79a2f19cf5b963147ae6aad19bb26d3"],["/posts/d48132d3/image-20210723223008967.png","1a3c241d05840259906fe1e662f077f0"],["/posts/d48132d3/image-20210723223629142.png","c3ba5b8b43958c73f8d9bad7f5ef87d7"],["/posts/d48132d3/image-20210723223804995.png","fde04bc2628246aa4b4a58c2ce7cef3e"],["/posts/d48132d3/image-20210723223845754.png","1fe75fadbba300181c5ef805fab9b090"],["/posts/d48132d3/image-20210723224000555.png","543ddad36df9e7bba38c91a250113055"],["/posts/d48132d3/image-20210723224354904.png","07e46766cf5654071a12d76e2ae59dea"],["/posts/d48132d3/image-20210723225006058.png","d61f286063add87f52c72ec7fa168c79"],["/posts/d48132d3/image-20210723225034637.png","f834dd5a25743690b6ba9e330e3d26f5"],["/posts/d48132d3/image-20210723225112029.png","6434db5977e1023a784aa5d0bbd34e40"],["/posts/d48132d3/image-20210723225227928.png","3a4b8caa2b711a2034790905020eafff"],["/posts/d48132d3/image-20210723225342120.png","4c06fbd63ddf24d72ad4acb0d4cbf67c"],["/posts/d48132d3/image-20210723225436084.png","f0be01a97750fd79a596b1cff21dd280"],["/posts/d48132d3/image-20210723225809848.png","cd4634cf75764dc3ea1d52cc98715ec1"],["/posts/d48132d3/image-20210723225945963.png","ef30f03e68948523b2427754fe163349"],["/posts/d48132d3/image-20210723230020574.png","a121dde6d1f676a1cb1d565feaf41ad6"],["/posts/d48132d3/image-20210723230055974.png","28f68706acb3e7ad9419426b8d1873b2"],["/posts/d48132d3/image-20210723230216642.png","6dd6f800d7b545907fb305f79099f044"],["/posts/d48132d3/image-20230413212801129.png","cab932abc978f4edc0eb5e6a3d1bc471"],["/posts/d48132d3/image-20230413213251164.png","e1ea3f33665dddef2c65d74de7ad4cff"],["/posts/d48132d3/image-20230415072545464.png","82297bcfd484774332016217a9999bfc"],["/posts/d48132d3/image-20230415081948352.png","bb15b69edad61ff90363d79d8c78437a"],["/posts/d48132d3/image-20230415082115842.png","ee26e8bb027e202d37c7b34e6a1b47ab"],["/posts/d48132d3/image-20230415082118928.png","ee26e8bb027e202d37c7b34e6a1b47ab"],["/posts/d48132d3/image-20230415082825889.png","4de8c6e93b1c05c734f9e26572763fa6"],["/posts/d48132d3/image-20230415083026813.png","805770a0349261d44b0efb7b62272425"],["/posts/d48132d3/image-20230415083038180.png","d1d3d0797e642e0eb163766196aedb50"],["/posts/d48132d3/vZrdKAh19C.gif","c79bc4a914cd7d2fcb563c5763ed96eb"],["/posts/d81d88fe.html","64d181336de76a76950715c2caf30bff"],["/posts/d81d88fe/image-20230504195503384.png","b9f81016dda9efb80372e528c223b29f"],["/posts/d81d88fe/image-20230504195702445.png","975893505bab826b22ae72da0ef569a0"],["/posts/dbd66adf.html","b85a18db13f1e6ed938da561cdbad522"],["/posts/dbd66adf/image-20230307212626495.png","7aff73d1515cbb5af54aff8e83474501"],["/posts/dbd66adf/image-20230307220250097.png","4b1f38b8a7a79f9d869a5d194f04dece"],["/posts/dbd66adf/image-20230307220343057.png","5ee4a0f8849232a82796ad4000aec1cb"],["/posts/dbd66adf/image-20230307220528897.png","c006177c2a96b6468c6ebbde02ab6513"],["/posts/dbd66adf/image-20230307220736009.png","5bc5b90b30e9ed3f58c19b36982dea2c"],["/posts/dbd66adf/image-20230307220830620.png","0efe3eab2a810c8bfc20a0f5256a5eed"],["/posts/dbd66adf/image-20230307221049745.png","fd7460740f3a8b8abbf2ae7651439a5c"],["/posts/dbd66adf/image-20230307221118356.png","8358921cc49573632bf0eaad5a8e3f82"],["/posts/dbd66adf/image-20230307221138167.png","bc812c4240bd5533d231a8f541956033"],["/posts/dbd66adf/image-20230414080926785.png","8a3565f466c7b09aa6346af6e1cf8e9c"],["/posts/dbd66adf/image-20230414091127734.png","dbd2c45c5c1516b9fc3d634eb5a56f6d"],["/posts/ecf3c99d.html","ae80fc2c34fbfc9316ad7aaa933c8e3d"],["/posts/ecf3c99d/93624428-53932780-f9ae-11ea-8d16-af949e16a09f-16802286763865.png","384b81fb807dc7ba90a06b8e3a54254a"],["/posts/ecf3c99d/components_provide-16802286763879.png","d0e69972aef3bce482424555d1992074"],["/posts/ef715bdc.html","6c91c673d361e69fefcc7eb00d960811"],["/posts/f5f9fa9b.html","ccf0bfec34be88ffb8305af66b4516c8"],["/posts/f5f9fa9b/image-20230413215356961.png","a412b36d23b83b248bbff92ad4ff2580"],["/posts/f5f9fa9b/image-20230413215537189.png","a412b36d23b83b248bbff92ad4ff2580"],["/posts/f5f9fa9b/image-20230413220322602.png","e5a270e292db9646c821252465aa0040"],["/posts/f5f9fa9b/image-20230413222057624.png","3724326a62e8e97bc4d8ce554a62f444"],["/posts/f5f9fa9b/image-20230414210727184.png","dfc1853984d9d145e5310631e29c225e"],["/posts/f5f9fa9b/image-20230414210809808.png","c95ca3d8348fb0f279e279b9338f0da0"],["/posts/f5f9fa9b/image-20230414211102425.png","8d151ef75aa8130bfe77f0047444d0c2"],["/posts/f5f9fa9b/image-20230414211137938.png","d13a8de423be41d0249bdb5660be60f6"],["/posts/f8c08006.html","6ae00e40bcc959f5894ea8dc3473bc80"],["/sw-register.js","ff395bbbe6926a48fb092b33c014ff72"],["/tags/ES/index.html","336e09930c749b173f9f7d8f096318b3"],["/tags/index.html","990207dfa009b37f1806ac687a13100f"],["/tags/js/index.html","bf5dca9f46f65a06d616bbbe2c5265f7"],["/tags/python/index.html","790729ebdf33432deeccfba428a0cfdd"],["/tags/vue/index.html","1179622aa91e0494883a720f82ea19e5"],["/tags/分布式/index.html","cfa17ab544ec4768f0944617ca0b74d0"],["/tags/安装/index.html","daccd24fbc2474fafd5c2b0795d9962a"],["/tags/数据库/index.html","ee05a44239246fc5736851ca41c6944d"],["/tags/爬虫/index.html","bc11a5bd8809e528f243cede09f41d51"],["/tags/算法/index.html","50049d201657077a5056617dda2dff90"],["/tags/面试/index.html","63fd7bb4bc111e5309ff436c4942fd62"]];
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
