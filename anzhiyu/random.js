var posts=["2023/06/10/","2022/12/20/","2023/08/31/","2023/09/20/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};