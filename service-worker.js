if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const n=e=>d(e,s),b={module:{uri:s},exports:c,require:n};i[s]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(r(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"3258001cf5a5f81bf811bae5bc8f2721"},{url:"2023/06/10/index.html",revision:"7099b321eb0a5beceb2d2960260fe3a0"},{url:"2023/08/31/index.html",revision:"4782d2890d784ad24e44070f073b863a"},{url:"404.html",revision:"41a1347719c669f7ee222f83c13a1ee6"},{url:"about/index.html",revision:"cab9ded526b77610bf60b1dc02a7df3d"},{url:"anzhiyu/random.js",revision:"d03aa4c98e8b38bd98feb94424f1ef89"},{url:"archives/2022/12/index.html",revision:"d740c116018946bd57ea8e38c77e15a6"},{url:"archives/2022/index.html",revision:"a98fc2a602a58af91fb62692777211c0"},{url:"archives/2023/06/index.html",revision:"c5ad25d6ea65c8d2775bfc2cd985da44"},{url:"archives/2023/08/index.html",revision:"c079c06eb663f6174eaadd5070163d74"},{url:"archives/2023/index.html",revision:"75d56ad0919e593f0d0dea22ac762b36"},{url:"archives/index.html",revision:"8d701e9947d4dc18d7b930726edf0fe8"},{url:"categories/index.html",revision:"bc18259ad8cb76bbdfd860df7a9570ed"},{url:"categories/前端/index.html",revision:"f82d5d5df5957f49a960484cdc107800"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"fcef3fe01b99fe738b6e8738c7bec084"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"afb35432f49a6d83e517f80d75d45267"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"7634cd2447ad3d8f34b9a62f0d7458cb"},{url:"tags/index.html",revision:"372bf0a398edcdbaae848771d86d7747"},{url:"tags/前端/index.html",revision:"764a038649a4a35e8e699c353b716ca9"},{url:"tags/测试/index.html",revision:"bfa922bacc19bf6990e71307002bb1ff"},{url:"tags/项目/index.html",revision:"bd1eec815356976a36fbf889757bb70d"}],{})}));
//# sourceMappingURL=service-worker.js.map
