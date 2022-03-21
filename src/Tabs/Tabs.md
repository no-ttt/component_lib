```jsx
  const title = ["London", "Paris", "Tokyo"];
  const data = [
    { content: "London is the capital city of England." },
    { content: "Paris is the capital of France." },
    { content: "Tokyo is the capital of Japan." },
  ];

  let Item =({ data }) => {
    return (
      <div>{ data.content }</div>
    )
  };

  <div>
    <Tabs title={title} data={data}>
      <Item />
    </Tabs>
  </div>
```