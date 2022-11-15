```jsx
  const post = [
    { title: "鹿野高台", src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg" },
    { title: "日月潭", src: "https://www.viviantrip.com/wp-content/uploads/2020/05/%E6%97%A5%E6%9C%88%E6%BD%AD-1024x768.jpg" },
    { title: "愛河", src: "https://pic.pimg.tw/anrine910070/1602321228-4026170466-g.jpg" },
  ];

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    { 
      post.map((t) =>
        <Post title={t.title} src={t.src} fontSize={16} borderStyle="Square" />
      )
    }
  </div>
```

### Circle Style
```jsx
  const post = [
    { title: "東部", src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg" },
    { title: "南部", src: "https://obs.line-scdn.net/0hVe4N7B0XCUoJNx7OvlV2HTJhBTs6Qg1McgUbMi8-B3wnD0lOKQUSey8rUngsVFIVZgVGMH8_U3pzU04aMVZALw" },
    { title: "北部", src: "https://yuann.tw/wp-content/uploads/2006/06/101_resize.jpg" },
  ];

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    { 
      post.map((t) =>
        <Post title={t.title} src={t.src} fontSize={16} borderStyle="Circle" />
      )
    }
  </div>
```
