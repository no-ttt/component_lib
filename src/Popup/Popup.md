```jsx
  const clickBtn = <div>Click Me !</div>;
	
  <Popup clickBtn={clickBtn} width={500} height={420} title="建立貼文">
    <div>Hello, World!</div>
  </Popup>
```

### Dialog
```jsx
  const clickBtn = <div>Click Me !</div>;

  <Popup clickBtn={clickBtn} width={200} height={300} close={false} dialog={true}>
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <div>姓名</div>
      <div>住址</div>
      <div>電話</div>
    </div>
  </Popup>
```