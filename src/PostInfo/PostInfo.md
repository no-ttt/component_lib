```jsx
  let data =  {
    "oid": 1,
    "name": "紫坪",
    "addr": "台東縣951綠島鄉溫泉路256號",
    "phone": "886-8-9672026",
    "url": null,
    "geohash": "wsn2ub3s3",
    "myProperty": 0,
    "type": 1,
    "pictureUrl": "https://www.eastcoast-nsa.gov.tw/image/426/640x480",
    "travelInfo": "南下：於花蓮火車站前搭乘花蓮客運，往豐濱、靜浦，或是台東方向班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。北上：自台東火車站前搭乘台灣好行東部海岸線或鼎東客運海線班車，在富岡漁港站下車後步行至富岡漁港，轉乘渡船前往綠島。綠島：島上設有環島公車，搭乘公車至朝日溫泉下車，往前步行約5分鐘(查詢電話：089-672510)。。",
    "remarks": "1、紫坪上方的綠島露營區為生態保護區，禁止採集花木生物，並請維護環境整潔，讓這片美景能留與後代子孫。2、露營區目前已於2009年委由「東方之泉有限股份公司」經營，      聯絡電...",
    "ticket": "免費，露營活動另計。",
    "parking": "",
    "opentime": "全天候開放",
    "startTime": "0001-01-01T00:00:00",
    "endTime": "0001-01-01T00:00:00",
    "position": {
      "positionLon": 121.49990844726562,
      "positionLat": 22.633939743041992,
    },
  };

  <div style={{ display: "flex", justifyContent: "center" }}>
    <PostInfo spotName={data.name} phone={data.phone} addr={data.addr} picture={data.pictureUrl} open={data.opentime} ticket={data.ticket} remark={data.remarks} traffic={data.travelInfo} posLon={data.position.positionLon} posLat={data.position.positionLat} />
  </div>
```