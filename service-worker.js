if(!self.define){let e,i={};const c=(c,a)=>(c=new URL(c+".js",a).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>c(e,d),b={module:{uri:d},exports:s,require:n};i[d]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"11545005bafbd25a31abd21c39a78cd6"},{url:"2023/06/10/index.html",revision:"5d281f0c223e8be35fdc636cfe52a329"},{url:"2023/08/31/index.html",revision:"4ee26ec1077dc1928711b3508f0bca14"},{url:"2023/09/28/index.html",revision:"a8693e61608ba14c422103a98594ece0"},{url:"404.html",revision:"fb9c0bc99bf1ffa036799c1413f182c2"},{url:"about/index.html",revision:"0ea27da5b1c1c62a8ff3d3814618a1bb"},{url:"anzhiyu/random.js",revision:"bfac2df01087937376932a1d63df73c6"},{url:"archives/2022/12/index.html",revision:"7694c671d592e5c4cda7d2c6c45e2de0"},{url:"archives/2022/index.html",revision:"ffbdf9cd623f205e1cdc3eebbc0e1bd4"},{url:"archives/2023/06/index.html",revision:"04a3f7780f27c4a1798e0da3057544e7"},{url:"archives/2023/08/index.html",revision:"7de2c71fd520fbb9f7c1667c054294ff"},{url:"archives/2023/09/index.html",revision:"0c48735084368d2848e620947645e63b"},{url:"archives/2023/index.html",revision:"26326314175971164882fd5d0d629f8d"},{url:"archives/index.html",revision:"854ba4469923039d1360cffb76e433fb"},{url:"categories/index.html",revision:"1dec375846cf916d1304a1d6cd9397d4"},{url:"categories/前端/index.html",revision:"eac730d80b7f2d6344c2fd3b49f62044"},{url:"categories/知识/index.html",revision:"6ae01348e3ee1bd2bf09e318f8e84b84"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"a39b58126bbba6ba34994e347a42616c"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"f8350beeef0f14dd91d77725de8b4e6f"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"3f80ab56c3127846c43b34f9514b7da4"},{url:"tags/index.html",revision:"a6be68c02dba887ecbe5475fcb3b54cd"},{url:"tags/macOS/index.html",revision:"5120a11d1a2c52208ffb3003882afc78"},{url:"tags/分享/index.html",revision:"0840bd71c0a595313673539d311256ba"},{url:"tags/前端/index.html",revision:"c7351e2982d27cb29a1c809c335ac76a"},{url:"tags/测试/index.html",revision:"84ea0b321ca3492abb1441a392353cee"},{url:"tags/网站/index.html",revision:"2ab32881a40c410214a1eeceeba4a813"},{url:"tags/项目/index.html",revision:"4f25cf9ed5593bf0c00a05a2021db690"}],{})}));
//# sourceMappingURL=service-worker.js.map
