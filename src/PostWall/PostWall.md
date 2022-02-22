```jsx
  let post = [
    { title: "日月潭划船", src: "https://images.chinatimes.com/newsphoto/2021-07-17/656/20210717002224.jpg", day: "2", like: "20" },
    { title: "古蹟之旅", src: "http://b.blog.xuite.net/b/2/d/e/12584724/blog_32120/txt/33774123/56.jpg", day: "3", like: "10" },
    { title: "熱氣球嘉年華", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeeaPEpQk4HgDPIAEQ3rJFRKwHo97L-07iA&usqp=CAU", day: "2", like: "50" },
    { title: "新北耶誕城", src: "https://imgs.gvm.com.tw/upload/gallery/20201114/75871_01.jpg", day: "2", like: "12" },
    { title: "魚你相遇", src: "https://www.viviantrip.com/wp-content/uploads/2021/03/%E6%B5%B7%E7%94%9F%E9%A4%A8-4.jpg", day: "1", like: "8" },
    { title: "親近大自然", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR813SKMm9B_vyUViP54He3z4u92UGXC9S3PA&usqp=CAU", day: "4", like: "21" },
	];
	
  <div>
    <PostWall cols={3} gap={20} post={post} />
  </div>
```