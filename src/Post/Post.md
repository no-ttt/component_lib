```jsx
  let post = [
		{ alt: "日月潭", src: "https://images.chinatimes.com/newsphoto/2021-07-17/656/20210717002224.jpg", addr: "南投" },
		{ alt: "鹿野高台", src: "https://media.vogue.com.tw/photos/5eba4d64f9d3ef21ac84e703/16:9/w_1620,h_911,c_limit/2018%E7%86%B1%E6%B0%A3%E7%90%83%E5%98%89%E5%B9%B4%E8%8F%AF.jpg", addr: "台東"},
	];

	<div style={{ display: "flex", justifyContent: "space-around" }}>
    <Post post={post} />
	</div>
```