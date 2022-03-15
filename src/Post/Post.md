```jsx
  let post = [
    { title: "日月潭", src: "https://images.chinatimes.com/newsphoto/2021-07-17/656/20210717002224.jpg" },
    { title: "鹿野高台", src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg" },
    { title: "愛河", src: "https://pic.pimg.tw/anrine910070/1602321228-4026170466-g.jpg" },
  ];

  const listItems = post.map((t) =>
    <Post title={t.title} src={t.src} width={220} height={220} fontSize={16} borderStyle="Square" />
  );

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    { listItems }
  </div>
```