```jsx
  const data = [
    {
      name: "宜蘭行",
      day: 2,
      like: 20,
      src: "https://blog.tripbaa.com/wp-content/uploads/2020/03/81708523_481786409143494_3991961629063473818_n.jpg"
    },
    {
      name: "古蹟之旅",
      day: 3,
      like: 12,
      src: "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/07/21/realtime/18102607.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600"
    },
    {
      name: "那些年我們一起追的星",
      day: 4,
      like: 50,
      src: "https://www.taiwan.net.tw/att/event/e7d96932-6633-4a2c-b724-c1ad89893c19.jpg"
    },
  ];

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    {
      data.map((d) => (
        <ZoomCover name={d.name} src={d.src} like={d.like} day={d.day} mode="trip" />
      )) 
    }
  </div>
```

### Custom
```jsx
  const data = [
    {
      name: "2022奔羊節",
      src: "https://www.taiwan.net.tw/att/event/e0b1b0eb-1ac9-4e7c-bf5d-805242b0a85c.jpg",
      des: "2022/02/18",
    },
    {
      name: "2022阿里山日出印象音樂會",
      src: "https://www.taiwan.net.tw/att/event/ef1bff5c-a2cd-468b-a96e-c1032ed89e87.jpg",
      des: "2022/01/01",
    },
    {
      name: "2022南投星空季",
      src: "https://www.taiwan.net.tw/att/event/e7d96932-6633-4a2c-b724-c1ad89893c19.jpg",
      des: "2022/08/13 ~ 2022/11/04",
    },
  ];

  <div style={{ display: "flex", justifyContent: "space-around" }}>
    {
      data.map((d) => (
        <ZoomCover width={200} height={200} name={d.name} src={d.src} des={d.des} />
      )) 
    }
  </div>
```