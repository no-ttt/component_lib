```jsx
  const title = ["London", "Paris", "Tokyo"];
  const data = [
    { content: "London is the capital city of England." },
    { content: "Paris is the capital of France." },
    { content: "Tokyo is the capital of Japan." },
  ];

  let Item =({ index }) => {
    return (
      <div>{ data[index].content }</div>
    )
  };

  <div style={{ display: "flex", justifyContent: "center" }}>
    <Tabs title={title}>
      <Item />
    </Tabs>
  </div>
```