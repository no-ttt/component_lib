```jsx
  const tabTitle = ["London", "Paris", "Tokyo"];
  const tabContent = [
    <div><h3>London</h3><p>London is the capital city of England.</p></div>, 
    <div><h3>Paris</h3><p>Paris is the capital of France.</p> </div>, 
    <div><h3>Tokyo</h3><p>Tokyo is the capital of Japan.</p></div>
  ];

  <div>
    <Tabs tabTitle={tabTitle} tabContent={tabContent} />
  </div>
```