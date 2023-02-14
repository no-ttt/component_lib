```jsx
  const clickBtn = <div>Click Me !</div>;
	
  <Popup clickBtn={clickBtn} width={500} height={420} title="建立貼文">
    <div>Hello, World!</div>
  </Popup>
```

### Dialog
```jsx
  const clickBtn = <div>Click Me !</div>;

  <Popup clickBtn={clickBtn} width={200} height={100} close={false} dialog={true} confirm={() => console.log("save")}>
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <div>Hello, World!</div>
    </div>
  </Popup>
```