var posts=["2022/12/20/","2023/06/10/","2023/08/31/","2023/07/20/","2023/09/28/","2023/09/30/","2023/10/01/","2023/10/02/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};