```jsx
  const data = [
    { title: "南投一直吃", src: "https://i.imgur.com/zXYTibr.jpg", time: "6 個月以前", people: "3" },
    { title: "台南喝到掛", src: "https://media.gq.com.tw/photos/5dbc268ecfb8d000081c005b/master/pass/2019071953952917.jpg", time: "3 個月以前", people: "8" },
  ];

  const customData = { title: "鹿野高台", src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg" };

  const listItems = data.map((t) =>
    <div style={{ margin: "20px"}}>
      <Card title={t.title} src={t.src} time={t.time} people={t.people} custom={false} />
    </div>
  );
  
  listItems.push(
    <div style={{ margin: "20px"}}>
      <Card src={customData.src} custom={true}>
        <div style={{ textAlign: "center", fontWeight: "bold", width: "100%", marginTop: 20 }} >{customData.title}</div>
      </Card>
    </div>
  );

  <div style={{ display: "flex", flexWrap: "wrap" }}>
    { listItems }
  </div>
```