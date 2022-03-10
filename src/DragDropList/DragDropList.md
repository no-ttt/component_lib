```jsx
  const listItem = [
    { title: "清寶鹹油條", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAJ99vluAYcEeFk1t0HqI0VzGUUdvhaextpA&usqp=CAU" }, 
    { title: "彩蝶瀑布", src: "https://taiwan.sharelife.tw/tw-news-img/36306/1c56240720335317.jpg" },
    { title: "清境農場", src: "https://doqvf81n9htmm.cloudfront.net/data/crop_article/120767/102501.jpg_1140x855.jpg" },
    { title: "伊達邵", src: "https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_C100_271_6.jpg" },
    { title: "虎頭山", src: "https://img.bobblog.tw/flickr/25013636722_fbd5966956_z.jpg" },
  ];

  <div>
    <DragDropList listItem={listItem} changeList={(list) => {console.log(list)}} width={250} height={60} />
  </div>
```