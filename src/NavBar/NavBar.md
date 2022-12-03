```jsx
  import Avatar from '../Avatar/Avatar'
  
  const feature = [
    { icon: "dashboard", name: "地圖筆記", link: "#" }, 
    { icon: "schedule", name: "安排行程", link: "#" },
    { icon: "like", name: "收藏", link: "#" },
    { icon: "home", name: "首頁", link: "#" },
  ];

  <NavBar feature={feature} width={800}>
    <Avatar
      alt="蠟筆小新"
      src="https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc"
      width={45}
      hover={true}
    />
  </NavBar>
```