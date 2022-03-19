```jsx
  let feature = [
    { icon: "dashboard", name: "地圖筆記" }, 
    { icon: "schedule", name: "安排行程" },
    { icon: "like", name: "收藏" },
    { icon: "home", name: "首頁" },
  ];

  let avatar = [{ 
    src: "https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc", 
    alt: "蠟筆小新" 
  }];

  <div>
    <NavBar feature={feature} width={800} featureSize={50} fontSize={14} avatar={avatar} />
  </div>

```