if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const n=e=>a(e,r),f={module:{uri:r},exports:s,require:n};i[r]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"b5ee6610559197ed325f5ec65b0dfc03"},{url:"2023/06/10/index.html",revision:"2d4e19c98c0fb65ab038f54d747c801c"},{url:"2023/08/31/index.html",revision:"58d21030cf77bad47d60ae3f4a5f65aa"},{url:"2023/09/20/index.html",revision:"75bae27daed5efae175a7380d828449c"},{url:"404.html",revision:"f205799d6ad489778406a007efb9f5f1"},{url:"about/index.html",revision:"07449f1a50f65e1d592a7382db1f02f6"},{url:"anzhiyu/random.js",revision:"23ac7a94f74f4d0a27f165bca3932f5c"},{url:"archives/2022/12/index.html",revision:"7d2cb084a4376c4cfed9b179b95ed27c"},{url:"archives/2022/index.html",revision:"4c57ba0020844da019163cf2ea5d7f7b"},{url:"archives/2023/06/index.html",revision:"232ed13ba3222701942db01de271f5fa"},{url:"archives/2023/08/index.html",revision:"8251f33224158e13f8410b72187df2c8"},{url:"archives/2023/09/index.html",revision:"1b97a50b8e0fdaefa9d66b17ba4a08a8"},{url:"archives/2023/index.html",revision:"b1f3d7e852b45bed776c27cab5673c67"},{url:"archives/index.html",revision:"74d569d63c893644f73aeb2bded925d1"},{url:"categories/index.html",revision:"a6256516fcf02b7f651d65356ca33312"},{url:"categories/前端/index.html",revision:"8a39bcfc47dc56fca515d19925ecf3c8"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"dfd15e732ef198d24f0f9965c290a670"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"45fb4ee3b9d35e5d43d6139aca853e3e"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"tags/index.html",revision:"55b97c49d5c2cc2202099c3e21434257"},{url:"tags/前端/index.html",revision:"f8c211e59cdfd02459a51dcbebda3eca"},{url:"tags/测试/index.html",revision:"4202fa99d7cd0b423fb2ff465aa2753d"},{url:"tags/项目/index.html",revision:"662802945d101501dba70a1ab7543ea2"}],{})}));
//# sourceMappingURL=service-worker.js.map
