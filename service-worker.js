if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>a(e,d),b={module:{uri:d},exports:s,require:n};i[d]=Promise.all(r.map((e=>b[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"541ed60f8d6fa20a63ce717aa466ab2e"},{url:"2023/06/10/index.html",revision:"13d81fe1b831e3bf7f1b03292460e7d4"},{url:"2023/08/31/index.html",revision:"a9c89093659808ea6513203f25097695"},{url:"2023/09/28/index.html",revision:"beab88ca726731dc5656f5e1d37c4120"},{url:"2023/10/01/index.html",revision:"bf0679fe9f47b8e9b5659b39054adffb"},{url:"2023/10/02/index.html",revision:"88534e2bf9052e251a960df72f445d75"},{url:"404.html",revision:"d20b6894e883353b0b6293412ef17dda"},{url:"about/index.html",revision:"adcaf21ab265c92cc32993c1fee91729"},{url:"anzhiyu/random.js",revision:"1f8443ac1cd3f051f0465a7526e7c4d7"},{url:"archives/2022/12/index.html",revision:"9ce6c0f010341a303652b07df83ed3c9"},{url:"archives/2022/index.html",revision:"bd07966a8e5f74ee2b7bb47afb7c325c"},{url:"archives/2023/06/index.html",revision:"3531ef3bb4d4743ae87371687f97b2f7"},{url:"archives/2023/08/index.html",revision:"0f591a97494382f45c62fcc65d743bc1"},{url:"archives/2023/09/index.html",revision:"2300ae27d4878cae58a101aeb9bd56c0"},{url:"archives/2023/10/index.html",revision:"be5252723c4bdb4d833e9fd94325b5cf"},{url:"archives/2023/index.html",revision:"711b726d198f627357e8d2df128cbd33"},{url:"archives/index.html",revision:"a1fa5881503683813f49a7e5ddceb630"},{url:"categories/index.html",revision:"7079c11a5f56b88a17f27bca0fe1d68d"},{url:"categories/前端/index.html",revision:"4a843fdab8ecf08d3a6710376c7c8877"},{url:"categories/知识/index.html",revision:"ee0428157c7a8d74353e7177ec3275b4"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"96f0740cdfed10d5e1091cc7fc302748"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"62ab282a94972ac1b643884411c8d1d3"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"4eb2be28fb4ae220b84fd19058856851"},{url:"tags/HTML/index.html",revision:"79ab3d42e7cc1589aa3f9867770513e1"},{url:"tags/index.html",revision:"cce0142fbd95ba4eaf27cfa4ee838116"},{url:"tags/macOS/index.html",revision:"6a26ae37967bdf7c31b2f55001e313f0"},{url:"tags/分享/index.html",revision:"5829d2bd79eebb122c8dfe988381e6f7"},{url:"tags/前端/index.html",revision:"03d9af21f8749e5895649736d28c0e4b"},{url:"tags/教程/index.html",revision:"9b945c6a57a4454c1af33679e1529738"},{url:"tags/测试/index.html",revision:"c66bed086262cfbe8aab3f3882efa39e"},{url:"tags/网站/index.html",revision:"0e1ede8f689ef1f7c044e93a31cfc065"},{url:"tags/项目/index.html",revision:"11beaa98ba7b1c4827474d63271852d0"}],{})}));
//# sourceMappingURL=service-worker.js.map
