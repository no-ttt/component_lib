```jsx
  let title = [
    { icon: "dashboard", name: "地圖筆記" }, 
    { icon: "schedule", name: "安排行程" },
    { icon: "like", name: "收藏" },
    { icon: "home", name: "首頁" },
  ];

  const listItems = title.map((t) =>
    <NavBar icon={t.icon} name={t.name} />
  );

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    { listItems }
  </div>

```