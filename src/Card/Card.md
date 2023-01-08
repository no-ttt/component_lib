### Spot Card
```jsx
  const data = { 
    title: "鹿野高台", 
    src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg",
    loc: "台東縣鹿野鄉",
    des: "鹿野於清領時期屬於廣鄉轄區，日治時期改為臺東廳關山郡鹿野庄，戰後改制成立「鹿野鄉」，惟原屬雷公火的上野、中野、下野合併為鸞山村劃歸延平鄉...",
    rating: 4,
    commentNum: 212
  };

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <Card title={data.title} src={data.src} loc={data.loc} hover={true} rating={data.rating} commentNum={data.commentNum} />
    <Card title={data.title} src={data.src} loc={data.loc} height={280} flip={true} link="https://tour.taitung.gov.tw/zh-tw/attraction/details/450">
      {data.des}
    </Card>
  </div>
```

### Trip Card
```jsx
  const data = [
    { 
      title: "熱氣球之旅", 
      src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg",
      people: 8,
      des: "Aug 8 - Aug 10"
    },
    { 
      title: "台南喝到掛", 
      src: "https://media.gq.com.tw/photos/5dbc268ecfb8d000081c005b/master/pass/2019071953952917.jpg",
      people: 4,
      des: "5 Days - 132 Likes"
    },
  ];

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    {
      data.map((d) => (
        <Card mode="trip" title={d.title} src={d.src} people={d.people} des={d.des} height={220} width={240} />
      ))
    }
  </div>
```