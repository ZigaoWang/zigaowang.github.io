if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>a(e,c),b={module:{uri:c},exports:s,require:n};i[c]=Promise.all(d.map((e=>b[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"4e2d323ae8a80f1a4a260935ffb7047f"},{url:"2023/06/10/index.html",revision:"e1bdba32c87bb0d2c2fa8f243000ead2"},{url:"2023/08/31/index.html",revision:"cb75d239c640f5385e5a9debb09af569"},{url:"404.html",revision:"66e40740136e5470c197346a84b35cf0"},{url:"about/index.html",revision:"cab9ded526b77610bf60b1dc02a7df3d"},{url:"anzhiyu/random.js",revision:"d03aa4c98e8b38bd98feb94424f1ef89"},{url:"archives/2022/12/index.html",revision:"8debaff446420d5f998b1950508a0ee5"},{url:"archives/2022/index.html",revision:"14da119d6bb75977afec258b5e4057bc"},{url:"archives/2023/06/index.html",revision:"516fa644b0ca43320bd2c0bbd5a94405"},{url:"archives/2023/08/index.html",revision:"cb64a5608b89e324081f519decc57dfc"},{url:"archives/2023/index.html",revision:"2c8463697b838975023ec8d663101d8f"},{url:"archives/index.html",revision:"638811af9ee8842c2dacf94650257d70"},{url:"categories/index.html",revision:"bc18259ad8cb76bbdfd860df7a9570ed"},{url:"categories/前端/index.html",revision:"9e99b8672d0de6104f151f85de7aba57"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"fcef3fe01b99fe738b6e8738c7bec084"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"cbccba927d5055e37e1b73ee39b6ba0c"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"7634cd2447ad3d8f34b9a62f0d7458cb"},{url:"tags/index.html",revision:"372bf0a398edcdbaae848771d86d7747"},{url:"tags/前端/index.html",revision:"f8e3ea015dfdaedad548bc982345d067"},{url:"tags/测试/index.html",revision:"62c7749264ff2ca3a0a213b48411c937"},{url:"tags/项目/index.html",revision:"5fe80697ce3329c89554ab30767437df"}],{})}));
//# sourceMappingURL=service-worker.js.map
