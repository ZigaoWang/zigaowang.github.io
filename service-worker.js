if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let b={};const s=e=>c(e,r),n={module:{uri:r},exports:b,require:s};i[r]=Promise.all(a.map((e=>n[e]||s(e)))).then((e=>(d(...e),b)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"43104d35fd62ba982a16c0c1431694d0"},{url:"2023/06/10/index.html",revision:"bce25dacfc8dc19687b1525f95c440d2"},{url:"2023/08/31/index.html",revision:"75d875b9f933f2be76dc346d264c9a52"},{url:"2023/09/28/index.html",revision:"411629b5f4c67ec7b67ac083a75a43eb"},{url:"2023/10/01/index.html",revision:"af7213cb516af228c63bfff76848a840"},{url:"404.html",revision:"2ef4a8fd4559d406faa591ea023e105d"},{url:"about/index.html",revision:"6c1a7b13f15334ddbd01504450a2144f"},{url:"anzhiyu/random.js",revision:"201a3b3c10d82d6388865e273ddf9f2e"},{url:"archives/2022/12/index.html",revision:"c82c4586ec981af8d3dabf25f6e2244b"},{url:"archives/2022/index.html",revision:"84610c39b3ec9fe41d66dfc5487f6ebb"},{url:"archives/2023/06/index.html",revision:"b8f73f41ecbb849d3b5a9a1858951b20"},{url:"archives/2023/08/index.html",revision:"cb00d27b39b3cd59e10d9069b2f79a3d"},{url:"archives/2023/09/index.html",revision:"5da953325bee2ff99bb62772078f2bc0"},{url:"archives/2023/10/index.html",revision:"08baea3aa84dbc418dc57075e2c0b452"},{url:"archives/2023/index.html",revision:"9518bea3172b18ae9255334f12f6e9c3"},{url:"archives/index.html",revision:"d544b2723d552185fb8507a9e048b696"},{url:"categories/index.html",revision:"9bba5e18bf97cf43c475c1c56f1de4f7"},{url:"categories/前端/index.html",revision:"db426f4f05b81a24cdff2daf63066a4c"},{url:"categories/知识/index.html",revision:"dd6a310b7a480dc950f87424598d88d7"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"b1f9b0ebcec948c02d77a418409c927c"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"b34203ec78a435a299e7c4abcb886cab"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"bab13bb3c14778855059769783cc2c6a"},{url:"tags/HTML/index.html",revision:"ecd4bf738505aca6f7931e7c173f6e66"},{url:"tags/index.html",revision:"3a240c6b084bd3d9a8d30b0752883fd1"},{url:"tags/macOS/index.html",revision:"257fa7829ee3796b8662b07bc5430794"},{url:"tags/分享/index.html",revision:"b25b26705b5734651252928d2734a098"},{url:"tags/前端/index.html",revision:"fc1932c725e1a8920450cf6ba6042d9d"},{url:"tags/教程/index.html",revision:"f4f0dc69f1ec6402d75e7c8b68bfefbf"},{url:"tags/测试/index.html",revision:"be1d9c4c56276ccb03517f4db58c7315"},{url:"tags/网站/index.html",revision:"6be96da817fd3abcdd14485c8d4b5f7b"},{url:"tags/项目/index.html",revision:"d146323f69a6bc11a1f3996d55618dba"}],{})}));
//# sourceMappingURL=service-worker.js.map
