if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const n=e=>c(e,r),b={module:{uri:r},exports:s,require:n};i[r]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(d(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"693b93e5e92c20ab0abcc0b4357d9cc2"},{url:"2023/06/10/index.html",revision:"f1e877c10d28bdc579e106cc83c50632"},{url:"2023/07/20/index.html",revision:"4ad5321f95c4b1863311c7103518f393"},{url:"2023/08/31/index.html",revision:"3ad8be49cc848b2e7ad3931d985553f2"},{url:"2023/09/28/index.html",revision:"fcf814a8e43334b32ad3b30da8366708"},{url:"2023/09/30/index.html",revision:"8c68a0de5dbc90238b8ef9768d5a2ceb"},{url:"2023/10/01/index.html",revision:"8b4abc97f4e4c892d65fdc026f8d6c5a"},{url:"2023/10/02/index.html",revision:"ada58c6e60645a91a31871b36909c7c1"},{url:"404.html",revision:"6ee3e1f749042faf7b19c43ebce9a385"},{url:"about/index.html",revision:"d2aa15befefc8068304e412aad66fbb7"},{url:"anzhiyu/random.js",revision:"328c4dfb24a8ad03056dd546912a7a47"},{url:"archives/2022/12/index.html",revision:"131c62e8af0cb204dfb0762dbfe285e9"},{url:"archives/2022/index.html",revision:"2b786b07d61efddb3d4accff08797361"},{url:"archives/2023/06/index.html",revision:"550502b1268d5e8a9c5735fb37eb94e9"},{url:"archives/2023/07/index.html",revision:"30165a646ece43739352cf7b7f67877d"},{url:"archives/2023/08/index.html",revision:"5c89c7bcae31235a197524ef655a6f20"},{url:"archives/2023/09/index.html",revision:"43e8ba54bae2a4a8e850191c230b326c"},{url:"archives/2023/10/index.html",revision:"5435c15fccfc32f53e52beb44f92fd2d"},{url:"archives/2023/index.html",revision:"902ea309a75dafabd44b174cd935ee59"},{url:"archives/index.html",revision:"be80669575bc08c2aa19d9b4bf2ecab7"},{url:"categories/index.html",revision:"e034004dbbedb22841c9f03ecda6c583"},{url:"categories/前端/index.html",revision:"7435eff37c5fdd1a02c20107b6b7548b"},{url:"categories/生活/index.html",revision:"6fe340f9e3f3b282da9d9bfe038779ed"},{url:"categories/知识/index.html",revision:"07c89cc25e95a7760c27363906ef99bd"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"36698beaa6dde299a337d42906c752c9"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"e26bbe445b035ddc6de88b42149f6bbb"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"43b1283e50bf0a2d6a9aa7d0acb2629c"},{url:"tags/GitHub/index.html",revision:"9823fa2b4dbc4bae8172ab9087520d1c"},{url:"tags/HTML/index.html",revision:"b7ff922e21451305207087a351f14de8"},{url:"tags/index.html",revision:"f7198c9386e50c7099c5c4c15ebfd30d"},{url:"tags/macOS/index.html",revision:"de308d7c11eb0984f69ad2ce531a0caf"},{url:"tags/体育/index.html",revision:"88af6c821e5520080cffb668dbc117fb"},{url:"tags/分享/index.html",revision:"642d2552c4639ecf25a7c46e0c52017b"},{url:"tags/前端/index.html",revision:"cb0d6f656d9e828350cd4e843d7179b2"},{url:"tags/教程/index.html",revision:"ad8b6fed835009e1234fe9bdce21c9e3"},{url:"tags/测试/index.html",revision:"bae158167e11049fc3da79f7c1cd2273"},{url:"tags/生活/index.html",revision:"542363dcf8ed5e5d9b08ccfda0640b0c"},{url:"tags/视频/index.html",revision:"0515082fd3a594ab1bca25376a9e3967"},{url:"tags/网站/index.html",revision:"aa14b4f76fe46f870a2a47b65c40cdd3"},{url:"tags/项目/index.html",revision:"f4d624546f0617276d547109cf9aae89"}],{})}));
//# sourceMappingURL=service-worker.js.map
