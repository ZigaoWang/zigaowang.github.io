if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>r(e,d),b={module:{uri:d},exports:s,require:n};i[d]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(a(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"c1dfef6bc43a5e9f8b12c35b785b76cf"},{url:"2023/06/10/index.html",revision:"6510e740333e7c8d972a4bbe3e098c96"},{url:"2023/08/31/index.html",revision:"24352c5da43038833b54671946c1c58a"},{url:"2023/09/20/index.html",revision:"493095c326d7955ce080406fe7865a08"},{url:"404.html",revision:"15d5bde0888a78ff3c7550f747414a2d"},{url:"about/index.html",revision:"055c754ee35e622e06b232ebd5d6b856"},{url:"anzhiyu/random.js",revision:"23ac7a94f74f4d0a27f165bca3932f5c"},{url:"archives/2022/12/index.html",revision:"6e99286e59b7b26cada6fa22af58bd70"},{url:"archives/2022/index.html",revision:"aa80033f20a455c0bf26e62d576a055c"},{url:"archives/2023/06/index.html",revision:"854650eea325d364c319e47ed816958d"},{url:"archives/2023/08/index.html",revision:"8333ce9966e1d8800982330f36ed3599"},{url:"archives/2023/09/index.html",revision:"dc427f37135fc962ecdb352436047b05"},{url:"archives/2023/index.html",revision:"e65d5e45bb9014e2a2ab90c02aee3767"},{url:"archives/index.html",revision:"e5aba25d011ce462f748f03825ca7772"},{url:"categories/index.html",revision:"26f4d9d7d1dba9b0d32d381ea1f76eb0"},{url:"categories/前端/index.html",revision:"0ebfe887357501cf46ed2e1d73c7e254"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"3de21b0a3595d608d1f376fdcb8005cf"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"af9feba7820be11064b6e1d2de530b78"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"tags/index.html",revision:"f8e77732d914054f7294ef1458ecd1c6"},{url:"tags/前端/index.html",revision:"3e79d8087b8f7895bc8228938b42f89e"},{url:"tags/测试/index.html",revision:"f8460476288f871823f6161817d596e2"},{url:"tags/项目/index.html",revision:"52293dfa3d4cb549c672ac6a0c972ebe"}],{})}));
//# sourceMappingURL=service-worker.js.map
