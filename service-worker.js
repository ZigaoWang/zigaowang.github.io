if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const n=e=>a(e,r),b={module:{uri:r},exports:s,require:n};i[r]=Promise.all(d.map((e=>b[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"11545005bafbd25a31abd21c39a78cd6"},{url:"2023/06/10/index.html",revision:"5d281f0c223e8be35fdc636cfe52a329"},{url:"2023/08/31/index.html",revision:"4ee26ec1077dc1928711b3508f0bca14"},{url:"2023/09/28/index.html",revision:"a8693e61608ba14c422103a98594ece0"},{url:"404.html",revision:"7fc8370e2ca2894e3c077b310c673ee8"},{url:"about/index.html",revision:"7caf7104eefd6aab20d8fb11d068c3a9"},{url:"anzhiyu/random.js",revision:"bfac2df01087937376932a1d63df73c6"},{url:"archives/2022/12/index.html",revision:"1bff59a4bc20e286a7333ac71966027f"},{url:"archives/2022/index.html",revision:"e1a653320d6d76149b21c2da3a3e95f9"},{url:"archives/2023/06/index.html",revision:"3fc5f77888cbb622ed36e136e185bd85"},{url:"archives/2023/08/index.html",revision:"f074f7d78d4fe0a5276e1908f33e10b3"},{url:"archives/2023/09/index.html",revision:"56ea6071a5549df0dd27a822c95fd203"},{url:"archives/2023/index.html",revision:"c01e59794662805f23344ae2a961a017"},{url:"archives/index.html",revision:"f73cbd440fe3498124fb2f333e907bb1"},{url:"categories/index.html",revision:"1dec375846cf916d1304a1d6cd9397d4"},{url:"categories/前端/index.html",revision:"fdebdda72e12bd2f35c44b3ffd39d1ed"},{url:"categories/知识/index.html",revision:"4f20576de52be1f8c9a8df6d8871c9fa"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"a39b58126bbba6ba34994e347a42616c"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"733abc7bd72c329d37860f0df4e26b58"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"3f80ab56c3127846c43b34f9514b7da4"},{url:"tags/index.html",revision:"a6be68c02dba887ecbe5475fcb3b54cd"},{url:"tags/macOS/index.html",revision:"29e0eac2d73033e3dd0fde208daa8aea"},{url:"tags/分享/index.html",revision:"d389ce930f3ca1084276ded790ce6e0b"},{url:"tags/前端/index.html",revision:"981ad1f631016163bccc44b88cb2a2af"},{url:"tags/测试/index.html",revision:"4367e1be17505d53c0cb5adab226ed0e"},{url:"tags/网站/index.html",revision:"03cda44814a226fa5e98220a7dc07e20"},{url:"tags/项目/index.html",revision:"aae202aabb365732ee18877de55fb13e"}],{})}));
//# sourceMappingURL=service-worker.js.map
