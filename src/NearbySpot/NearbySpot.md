```jsx
const data = [
    { name: "九蛙疊像", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJ8EUhQFXyMts7N-iTqPXZeAUkHJjJqsTjw&usqp=CAU", rating: 4, link: "https://www.google.com/maps/place/%E4%B9%9D%E8%9B%99%E7%96%8A%E5%83%8F/@23.8588078,120.9356872,15z/data=!4m5!3m4!1s0x0:0x50e5aca6e0d91e9a!8m2!3d23.8588078!4d120.9356872" },
    { name: "鹿嵩咖啡莊園", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYolvYkJPhW3AtwfsWqma1x50qESF4Q_JxPQ&usqp=CAU", rating: 4, link: "https://www.google.com/maps/place/%E9%B9%BF%E7%AF%99%E5%92%96%E5%95%A1%E8%8E%8A%E5%9C%92/@23.9166701,120.9400607,17z/data=!3m1!4b1!4m5!3m4!1s0x3468d7ff153d4cc3:0x7ce5e340127c01d8!8m2!3d23.9166701!4d120.9422494" },
  ];
  <div style={{ display: "flex", justifyContent: "space-around" }}>
    <NearbySpot name={data[0].name} src={data[0].src} rating={data[0].rating} des="More" link={data[0].link} isLink={true} blank={true} />
    <NearbySpot name={data[1].name} src={data[1].src} rating={data[1].rating} des="0.8 公里" />
  </div>
```