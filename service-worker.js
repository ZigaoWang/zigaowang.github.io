if(!self.define){let e,i={};const a=(a,c)=>(a=new URL(a+".js",c).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>a(e,d),b={module:{uri:d},exports:s,require:n};i[d]=Promise.all(c.map((e=>b[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"43104d35fd62ba982a16c0c1431694d0"},{url:"2023/06/10/index.html",revision:"bce25dacfc8dc19687b1525f95c440d2"},{url:"2023/08/31/index.html",revision:"75d875b9f933f2be76dc346d264c9a52"},{url:"2023/09/28/index.html",revision:"411629b5f4c67ec7b67ac083a75a43eb"},{url:"2023/10/01/index.html",revision:"eff90a1d454fd38cada74d22a23186c2"},{url:"404.html",revision:"378b977527643417af7868d9ea478214"},{url:"about/index.html",revision:"6c1a7b13f15334ddbd01504450a2144f"},{url:"anzhiyu/random.js",revision:"250b0ee91d0bc1f2d320dba8aeee8f66"},{url:"archives/2022/12/index.html",revision:"6db3353a0c70dab20653d57007c131a9"},{url:"archives/2022/index.html",revision:"8e3c92c2ab144452927163081157696e"},{url:"archives/2023/06/index.html",revision:"380a3c25058ccd399bab23c568688608"},{url:"archives/2023/08/index.html",revision:"974e3fa73897b4e86d4d6eec9bec0710"},{url:"archives/2023/09/index.html",revision:"7f06475adb49a5efbd421fe2541a969c"},{url:"archives/2023/10/index.html",revision:"7d0da703e9c5a806d347c54fa5ea40ea"},{url:"archives/2023/index.html",revision:"2fb1585360aa3bd68aa001f1c87cf59c"},{url:"archives/index.html",revision:"3d434cce618511cd6000cefcd0072902"},{url:"categories/index.html",revision:"9bba5e18bf97cf43c475c1c56f1de4f7"},{url:"categories/前端/index.html",revision:"8c65ca4d461b4e95bd0d22f39a13b0a4"},{url:"categories/知识/index.html",revision:"27243f7da033c549fe39f5c2bacd0bca"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"b1f9b0ebcec948c02d77a418409c927c"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"63d23f47e9f2cdff0e2a41f10a47a394"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"bab13bb3c14778855059769783cc2c6a"},{url:"tags/HTML/index.html",revision:"2489d5e1d1ab8904ae11a274fab55d49"},{url:"tags/index.html",revision:"3a240c6b084bd3d9a8d30b0752883fd1"},{url:"tags/macOS/index.html",revision:"179263b335874580083e7b05fe889aca"},{url:"tags/分享/index.html",revision:"8901e569adeef15e267239f109328b88"},{url:"tags/前端/index.html",revision:"86b1ca75bf71a964e856880a4bba9843"},{url:"tags/教程/index.html",revision:"4722f7dace2488ba9f7095157cf575ac"},{url:"tags/测试/index.html",revision:"a6f57b5f37ee3e9cc1cf1ca81bb3492b"},{url:"tags/网站/index.html",revision:"70126d465fa343a4a3cca867f65ddd06"},{url:"tags/项目/index.html",revision:"0c8a4c2fccb472b08b21126338caf842"}],{})}));
//# sourceMappingURL=service-worker.js.map
