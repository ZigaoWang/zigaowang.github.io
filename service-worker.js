if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>a(e,d),f={module:{uri:d},exports:s,require:n};i[d]=Promise.all(c.map((e=>f[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"ee0e495a0acb472ff127b6d825404d0a"},{url:"2023/06/10/index.html",revision:"d925024f13683fb9e5a2f89d48378144"},{url:"2023/08/31/index.html",revision:"0064a3f2b7573c061a2c9c9891a4f742"},{url:"2023/09/28/index.html",revision:"fc3df80d492ffa3b604fbdba743f810d"},{url:"404.html",revision:"4ada20d02ff78177d5bfac3e7d0909bb"},{url:"about/index.html",revision:"7caf7104eefd6aab20d8fb11d068c3a9"},{url:"anzhiyu/random.js",revision:"2bf06c3dc7d355e7a346a1b72cf10e14"},{url:"archives/2022/12/index.html",revision:"de969c7c84abd38ab31cee7457e07277"},{url:"archives/2022/index.html",revision:"3379b2a74c5dfe49d62807e689c1e509"},{url:"archives/2023/06/index.html",revision:"99733422ac8d5a65adfe34f2ab385a7e"},{url:"archives/2023/08/index.html",revision:"a0553a98e590cee257c78c4257809aec"},{url:"archives/2023/09/index.html",revision:"5800e3e23a62dd3ceb5a15e6324016b5"},{url:"archives/2023/index.html",revision:"fa5f597d7eefa59a851ff8c824341b6e"},{url:"archives/index.html",revision:"2558051225384dfa12509e41afac357f"},{url:"categories/index.html",revision:"1dec375846cf916d1304a1d6cd9397d4"},{url:"categories/前端/index.html",revision:"aec8df3873871b1117dbb802e07094fa"},{url:"categories/知识/index.html",revision:"a580734c0edcd031fc201f304532e60e"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"a39b58126bbba6ba34994e347a42616c"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"c54f61719edf6bdb1eb9b179a3c30a26"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"3f80ab56c3127846c43b34f9514b7da4"},{url:"tags/index.html",revision:"a6be68c02dba887ecbe5475fcb3b54cd"},{url:"tags/macOS/index.html",revision:"b4ea42a8475afbd89f5fe38dc212ea76"},{url:"tags/分享/index.html",revision:"f375871e620119d799e1703f07f5d6cc"},{url:"tags/前端/index.html",revision:"859328aacc3210e266a04a5efc8e5f92"},{url:"tags/测试/index.html",revision:"c9b7dc30e9d5b89460fdb1caf491cf8f"},{url:"tags/网站/index.html",revision:"0b716d07c721841919e569741c1e085e"},{url:"tags/项目/index.html",revision:"ff0dd703cc5208069cee323c1b5d4503"}],{})}));
//# sourceMappingURL=service-worker.js.map
