```jsx
  let post = [
    { title: "日月潭", src: "https://images.chinatimes.com/newsphoto/2021-07-17/656/20210717002224.jpg" },
    { title: "鹿野高台", src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg" },
    { title: "愛河", src: "https://pic.pimg.tw/anrine910070/1602321228-4026170466-g.jpg" },
    {title: "101 大樓", src: "https://yuann.tw/wp-content/uploads/2006/06/101_resize.jpg"},
    {title: "屏東海生館", src: "https://www.nmmba.gov.tw/images/pic03.jpg"},
    {title: "巨城", src: "https://foncc.com/wp-content/uploads/2018/11/20181128110.jpg"},
    {title: "阿里山小火車", src: "https://blog.tripbaa.com/wp-content/uploads/2018/07/P1011044.jpg"},
    {title: "金門砲台", src: "https://kinmen.travel/image/723/?r=1606814446331"},
  ];
	
  <div>
    <Carousel cols={4} gap={5} post={post} width={200} height={200} fontSize={16} />
  </div>
```