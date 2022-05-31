```jsx
  const clickBtn = <div>Click Me !</div>;
	
  <Popup clickBtn={clickBtn} width={500} height={420} title="建立貼文">
    <div>Hello, World!</div>
  </Popup>
```
### Without title
```jsx
  const clickBtn = <div>Click Me !</div>;

  <Popup clickBtn={clickBtn} width={200} height={20} close={false} >
    <div style={{ display: "flex", justifyContent: "center"}}>Hello World!</div>
  </Popup>
```