if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const b=e=>a(e,s),n={module:{uri:s},exports:c,require:b};i[s]=Promise.all(d.map((e=>n[e]||b(e)))).then((e=>(r(...e),c)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"972b936c236265ace0254e600edb3c4f"},{url:"2023/06/10/index.html",revision:"ddf65b5fccbe368c31efd7deca5ec5fc"},{url:"2023/08/31/index.html",revision:"ba2e5931d992bac50e38f719bf5f78a8"},{url:"2023/09/20/index.html",revision:"929511dd1c6264ad5da86bd2c7a50a01"},{url:"404.html",revision:"960eada967ad02d30b55c189415a590d"},{url:"about/index.html",revision:"ffe2e854626a1b52ac22056cd0ee76f2"},{url:"anzhiyu/random.js",revision:"ff4bebc16d460817fbe8eea4de8b0a00"},{url:"archives/2022/12/index.html",revision:"0ebbbb37d84c6f272f582ca6a18899ae"},{url:"archives/2022/index.html",revision:"eb3d2bf5bf68c7da2ef62e79b93a6eb6"},{url:"archives/2023/06/index.html",revision:"a7070ddc304ded48a552ea2623b2ae08"},{url:"archives/2023/08/index.html",revision:"2bd27c0abc3ffe1837376e9bf68a83de"},{url:"archives/2023/09/index.html",revision:"bd1bf39129e544578190a6a0743f92c7"},{url:"archives/2023/index.html",revision:"4b1b0d6b9906e995d1b82d0de449f88b"},{url:"archives/index.html",revision:"9a794de98f1d6f61814d3201b3842ffe"},{url:"categories/index.html",revision:"a2ab9749039d2c425ab9249d38d10b9e"},{url:"categories/前端/index.html",revision:"584f5eaf2d40fbe46e04446261c0a776"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"15bae244d17ee25a1b8c40672028d2dc"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"ee34436eba7dea4e064e41e774de41dd"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"tags/index.html",revision:"6403132fb7f87bf919e25dd46704b500"},{url:"tags/前端/index.html",revision:"4f0c0dbfe148915b6abf572813a63c30"},{url:"tags/测试/index.html",revision:"390fb2e8a50cc2137b0db7a2e688b43b"},{url:"tags/项目/index.html",revision:"0e7ed68557a6545b277a6d2167e2df8a"}],{})}));
//# sourceMappingURL=service-worker.js.map
