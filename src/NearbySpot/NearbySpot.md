```jsx
const data = [
    { name: "九蛙疊像", src: "https://lh5.googleusercontent.com/p/AF1QipPCiVSNH2ExSgiHggi-eTFuUrsOR_jFPgXRaLDV=w203-h270-k-no", rating: "4", distance: "0.8" },
    { name: "鹿嵩咖啡莊園", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYolvYkJPhW3AtwfsWqma1x50qESF4Q_JxPQ&usqp=CAU", rating: "4", distance: "0.8" },
  ];
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    {
      data.map((d) => (
        <NearbySpot name={d.name} src={d.src} rating={d.rating} distance={d.distance} />
      ))
    }
  </div>
```