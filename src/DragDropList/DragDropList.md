```jsx
  const data = [
    { title: "彩蝶瀑布", src: "https://taiwan.sharelife.tw/tw-news-img/36306/1c56240720335317.jpg", loc: "南投縣埔里鎮中山路一段33號", link: "https://celiamrg.com/butterfly-waterfall/", rating: 4 },
    { title: "清境農場", src: "https://doqvf81n9htmm.cloudfront.net/data/crop_article/120767/102501.jpg_1140x855.jpg", loc: "南投縣仁愛鄉", link: "https://www.cingjing.gov.tw/", rating: 5 },
    { title: "虎頭山", src: "https://img.bobblog.tw/flickr/25013636722_fbd5966956_z.jpg", loc: "南投縣埔里鎮", link: "http://okgo.tw/butyview.html?id=3318", rating: 4 },
  ];

  <DragDropList 
    data={data} name={(d) => d.title} src={(d) => d.src} loc={(d) => d.loc} link={(d) => d.link} rating={(d) => d.rating}
    changeList={(list) => {console.log(list)}} width={420} height={150} 
  />
```