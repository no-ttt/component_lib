```jsx
  const data = { 
    title: "鹿野高台", 
    src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg",
    loc: "台東縣鹿野鄉高台路46號",
    rating: 4,
    link: "https://tour.taitung.gov.tw/zh-tw/attraction/details/450"
  };

  <TripCard name={data.title} src={data.src} loc={data.loc} rating={data.rating} link={data.link} deleteSpot={() => console.log("delete")} addRemark={() => console.log("add remark")} />
```