if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>c(e,d),f={module:{uri:d},exports:s,require:n};i[d]=Promise.all(a.map((e=>f[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"605631c4fbe7bef20e0426ee9305ec74"},{url:"2023/06/10/index.html",revision:"d925024f13683fb9e5a2f89d48378144"},{url:"2023/08/31/index.html",revision:"0064a3f2b7573c061a2c9c9891a4f742"},{url:"2023/09/28/index.html",revision:"12760a428cd0131e04f6c2f79975c97d"},{url:"404.html",revision:"15ed977fc81111c15df9866f644b8275"},{url:"about/index.html",revision:"7caf7104eefd6aab20d8fb11d068c3a9"},{url:"anzhiyu/random.js",revision:"bfac2df01087937376932a1d63df73c6"},{url:"archives/2022/12/index.html",revision:"2425a73c8cee07f66cf275c2453fca20"},{url:"archives/2022/index.html",revision:"00c8696227e1718c0d85e53f05c175f4"},{url:"archives/2023/06/index.html",revision:"ed7c178f609265cc9e34cecc8aa8d4e1"},{url:"archives/2023/08/index.html",revision:"d83d17fdbd7f8406769e0acf2e8c2f21"},{url:"archives/2023/09/index.html",revision:"380719c1eeee19d0dd5bc0fc5bd2b7af"},{url:"archives/2023/index.html",revision:"b8a0e3314d902d6060ec534bb5f6d406"},{url:"archives/index.html",revision:"a106bb02f06c082543aaa4c944fad64d"},{url:"categories/index.html",revision:"da6068aee276de7515f82e47c596b5b1"},{url:"categories/前端/index.html",revision:"93d4a66c2d9267e825e2836e565539ae"},{url:"categories/知识/index.html",revision:"eea83001d8494397e263704c5d02afb5"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"a39b58126bbba6ba34994e347a42616c"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"10b672cc9c94631a91a4b44590e6eb73"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"170b070a6e312cf5c287acdf7f40e241"},{url:"tags/index.html",revision:"8b5c25c14742aacd9ba132455f589434"},{url:"tags/macOS/index.html",revision:"33f4c44e51a0d0a6962332d00c3516cb"},{url:"tags/分享/index.html",revision:"5b3cf3a83a3fee1a93f6a242eff035c8"},{url:"tags/前端/index.html",revision:"288af748dc0d82478fc2c86acb3bda0a"},{url:"tags/测试/index.html",revision:"b2ded4910fc40f54014e34035f1ff1ff"},{url:"tags/网站/index.html",revision:"e08e8ba4837f1eb18506b61a1e853ad5"},{url:"tags/项目/index.html",revision:"72dc9dc703102d5394b754ac54ba1b76"}],{})}));
//# sourceMappingURL=service-worker.js.map
