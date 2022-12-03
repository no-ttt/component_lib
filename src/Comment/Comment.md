```jsx
  const comment = {
    src: "https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc",
    userName: "test",
    like: 100,
    rating: 3,
    content: "適合假日走走放鬆心情！",
    img: ["https://cdn2.ettoday.net/images/4995/d4995352.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmj3zOgrQlhp5OpzaUf_fmvwi0XbZ61_DcA&usqp=CAU"],
    since: "一個月前",
  };

  <div style={{ width: "80%" }}>
    <Comment mode="comment" src={comment.src} userName={comment.userName} like={comment.like} rating={comment.rating} content={comment.content} img={comment.img} since={comment.since}
    />
  </div>
```
### Guide
```jsx
  const guide = {
    userName: "旅遊小幫手",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7A5w9fXNr22x_vZzJ17ubf2X2VX7ZSzBeMQ&usqp=CAU",
    des: "紫坪位在綠島最南方，緊鄰「綠島露營區」。從露營區旁的步道，可通往海岸邊的潟湖「紫坪」。「紫坪」是一處由珊瑚礁構成的潮池，也是綠島著名的潟湖所在地，有全綠島最完整的潟湖地形以及珊瑚礁植群，更有茂盛的植物水芫花和珍貴的陸寄居蟹。外海儘管浪濤洶湧，內湖依然波平如鏡，宛若沉睡的湖水，清淺的躺在外珊瑚礁岩與內珊瑚貝砂灘間；水芫花灌叢身影倒映於平靜無波的水面上，潔白柔細的白砂鋪陳水底。熱帶海岸旖旎風情，盡在不言中。"
  };

  <div style={{ width: "80%" }}>
    <Comment mode="guide" userName={guide.userName} src={guide.src} guideDes={guide.des} />
  </div>
```