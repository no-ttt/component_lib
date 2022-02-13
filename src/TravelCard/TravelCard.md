```jsx
  let info = [
    { title: "南投一直吃", src: "https://i.imgur.com/zXYTibr.jpg", time: "6 個月以前", people: "3" },
    { title: "台南喝到掛", src: "https://media.gq.com.tw/photos/5dbc268ecfb8d000081c005b/master/pass/2019071953952917.jpg", time: "3 個月以前", people: "8" },
  ];

  const listItems = info.map((t) =>
    <TravelCard title={t.title} src={t.src} time={t.time} loc={t.loc} people={t.people} width={280} height={220} titleFontSize={16} desFontSize={14} />
  );

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    { listItems }
  </div>
```