if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const b=e=>c(e,a),n={module:{uri:a},exports:s,require:b};i[a]=Promise.all(d.map((e=>n[e]||b(e)))).then((e=>(r(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/12/20/index.html",revision:"16b00e3b6cbdc85082b8fa7619171697"},{url:"2023/06/10/index.html",revision:"e4204e0d58cfcabefc1b796006c100f9"},{url:"2023/08/31/index.html",revision:"c001124971da9dfca9703b2793949122"},{url:"404.html",revision:"832989e588c0972b3e3d37dd5be74e37"},{url:"about/index.html",revision:"cab9ded526b77610bf60b1dc02a7df3d"},{url:"anzhiyu/random.js",revision:"6e4657b4eb3399c2e70bb56a655d266a"},{url:"archives/2022/12/index.html",revision:"df0d0593e6f1bace4634d320659d8907"},{url:"archives/2022/index.html",revision:"0af1f98cb2acd322d1e46da7b8f2787f"},{url:"archives/2023/06/index.html",revision:"e9ff5aa5e2e5aad03a6186bdd2c802e7"},{url:"archives/2023/08/index.html",revision:"104819bb4fe3c033f76fb0c23c362be3"},{url:"archives/2023/index.html",revision:"c9e8bb88fb0a96a02c69678c67c40b22"},{url:"archives/index.html",revision:"36e752e5d83ccdd0d6f10a7600221b9f"},{url:"categories/index.html",revision:"bc18259ad8cb76bbdfd860df7a9570ed"},{url:"categories/前端/index.html",revision:"5e254f4c87e6513fb2bbe49bc143088a"},{url:"css/index.css",revision:"bbd16b24e3fdff2710a12434f299b1a0"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"essay/index.html",revision:"fcef3fe01b99fe738b6e8738c7bec084"},{url:"img/404.jpg",revision:"8190796a570d269ef04b777d93d44e6d"},{url:"img/512.png",revision:"701819a72025df4d8e2a111c1c8f2c72"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"fe6bbe142eb7dc7b4f876ae4f5af97d0"},{url:"img/default_cover.jpg",revision:"8b35831759dc5f66710c2839422109d5"},{url:"img/friend_404.gif",revision:"d09ab53cb5bb15079ce8e3d90b157353"},{url:"img/loading.gif",revision:"05fb29f4e677ff6057ef55925f46e9b0"},{url:"img/siteicon/16.png",revision:"3de470acb5237bf16318d827443dd5f1"},{url:"img/siteicon/32.png",revision:"802aa4685b3652d5a1b6e5a6323cf3c0"},{url:"img/siteicon/apple-icon-180.png",revision:"ac045b7b6012d72ccbcffb07727c7b11"},{url:"img/siteicon/manifest-icon-192.maskable.png",revision:"87c1b5883834c2164e20e737bd5c2517"},{url:"img/siteicon/manifest-icon-512.maskable.png",revision:"85b846b5722c684339c8bb3e520bcc6a"},{url:"index.html",revision:"c87d0f95cd54d70e474befa7d360c643"},{url:"js/anzhiyu/ai_abstract.js",revision:"e4baa11685a6c14d4130b5b74d9222dc"},{url:"js/anzhiyu/comment_barrage.js",revision:"c5ca32eab1b5db6744df49cffaefa3a6"},{url:"js/anzhiyu/people.js",revision:"b946db8294a26b0b91e93dca5abda935"},{url:"js/anzhiyu/random_friends_post.js",revision:"30e5b8070503360d29e26e1b6db29efd"},{url:"js/anzhiyu/right_click_menu.js",revision:"53aaa1f5e7f59ab1acdf7621f98a48c0"},{url:"js/main.js",revision:"4f0f8444535b9267c4a35f41d07d4ea2"},{url:"js/search/algolia.js",revision:"786c28bf4b8d9142c17432680c0edcec"},{url:"js/search/local-search.js",revision:"0f5dddc0c88389610bae38a044ee7a8a"},{url:"js/tw_cn.js",revision:"80822f672b15a8105128e305e9acbed4"},{url:"js/utils.js",revision:"6c40232d42f0a3b43a8bcc85c01066c2"},{url:"link/index.html",revision:"781c42847dc3dcffb4344eeeee8700f1"},{url:"tags/index.html",revision:"372bf0a398edcdbaae848771d86d7747"},{url:"tags/前端/index.html",revision:"e54b4cfc12413de129ce9f917e95a722"},{url:"tags/测试/index.html",revision:"c2be6773aac9224cd2db1c9855235b55"},{url:"tags/项目/index.html",revision:"7cbf425d41732114c9ba3aa0ae3e669b"}],{})}));
//# sourceMappingURL=service-worker.js.map
