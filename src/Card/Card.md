```jsx
  const data = [
    { title: "南投一直吃", src: "https://i.imgur.com/zXYTibr.jpg", time: "6 個月以前", people: "3" },
    { title: "台南喝到掛", src: "https://media.gq.com.tw/photos/5dbc268ecfb8d000081c005b/master/pass/2019071953952917.jpg", time: "3 個月以前", people: "8" },
  ];

  const listItems = data.map((t) =>
    <div style={{ margin: "20px"}}>
      <Card title={t.title} src={t.src} time={t.time} people={t.people} custom={false} />
    </div>
  );

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    { listItems }
  </div>
```
### Custom
```jsx
  const customData = { 
    title: "鹿野高台", 
    src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg",
    des: "鹿野於清領時期屬於廣鄉轄區，日治時期改為臺東廳關山郡鹿野庄，戰後改制成立「鹿野鄉」，惟原屬雷公火的上野、中野、下野合併為鸞山村劃歸延平鄉..."
  };

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <Card src={customData.src} custom={true} picHeight={175}>
      <div style={{ textAlign: "center", fontWeight: "bold", width: "100%", marginTop: 5 }} >{customData.title}</div>
    </Card>
    <Card src={customData.src} custom={true} height={300} picHeight={250} width={250} flip={true} flipContent={customData.des}>
      <div style={{ textAlign: "center", fontWeight: "bold", width: "100%", marginTop: 10 }} >{customData.title}</div>
    </Card>
  </div>
```