if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const n=e=>a(e,s),f={module:{uri:s},exports:c,require:n};i[s]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(d(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"98e3026611365370998c1e6efb9165e7"},{url:"2023/06/10/index.html",revision:"0318a9e2256e8485ac8377e3b455dcc8"},{url:"2023/08/31/index.html",revision:"d09e07f29779fdc0eb1781956b339307"},{url:"2023/09/28/index.html",revision:"2a2fa96b3f7b5968aab998e2d225f4a5"},{url:"404.html",revision:"b9bf34f5f77c4ac500dff259c47a4464"},{url:"about/index.html",revision:"38226f900f0a9b1f307a3976080ff1aa"},{url:"anzhiyu/random.js",revision:"9f816d113bff042dc30677826745646e"},{url:"archives/2022/12/index.html",revision:"9100cfd09925747670ba296261c9d63b"},{url:"archives/2022/index.html",revision:"bd9ca0727628d14c8286e691b458f487"},{url:"archives/2023/06/index.html",revision:"ee89b988949f2ed360d9f16c90621970"},{url:"archives/2023/08/index.html",revision:"c42faf43ef3941c58bf9ad3df3018be3"},{url:"archives/2023/09/index.html",revision:"60a5d51ee4b1fe6eda454b7c2e31f6d4"},{url:"archives/2023/index.html",revision:"902c104563655ac03bbed516dd12c1a6"},{url:"archives/index.html",revision:"95120e40828d3f87be2ea2da60d5e558"},{url:"categories/index.html",revision:"9657c042ed86455e2617c01ed31d5f5f"},{url:"categories/前端/index.html",revision:"a1ef2c10bc8bb76ac1ce74fcd27c6aa4"},{url:"categories/知识/index.html",revision:"9ba420b988c962eee485c07bcfc46cba"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"b60324ab24692218f65e0bb130d305ec"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"1bf62ad9890f3075f173a6bb31ad1e9d"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"37afdbb59f5af0760b2608900dd560ec"},{url:"tags/index.html",revision:"a9eaf15d96389027a500d655a9d02243"},{url:"tags/macOS/index.html",revision:"e3defec3c046f90d0d1403b8290a0509"},{url:"tags/分享/index.html",revision:"5bb01f7e5055900aeee1c28f4cb94337"},{url:"tags/前端/index.html",revision:"2a3216c84f4f2d8749aee18c9664caeb"},{url:"tags/测试/index.html",revision:"9492b73df1fb17a4fc7719855e976635"},{url:"tags/网站/index.html",revision:"b2f47a04355e2dd45138ff3f0225960b"},{url:"tags/项目/index.html",revision:"79ef6df233f846f1298795ef370e8d68"}],{})}));
//# sourceMappingURL=service-worker.js.map
