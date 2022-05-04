```jsx
  const clickBtn = <div>Click Me !</div>;
  const userInfo = {
    src: "https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc",
    userName: "test",
  };

  <AddComment clickBtn={clickBtn} title="日月潭" src={userInfo.src} userName={userInfo.userName} returnComment={(rating, comment, img) => {alert("評分：" + rating + "\n評論：" + comment + "\n圖片: " + img)}} />
```