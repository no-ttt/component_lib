```jsx
  import React, { useState } from 'react'

  const data = [
    { title: "London", content: "London is the capital city of England." },
    { title: "Paris", content: "Paris is the capital of France." },
    { title: "Tokyo", content: "Tokyo is the capital of Japan." },
  ];
  const [selectData, setSelectData] = useState(data[0]);
 
  let Item = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectData.content}
      </div>
    )
  };

  <Tabs data={data} tab={(data) => data.title} setCurrent={(data) => setSelectData(data)}> 
    <Item />
  </Tabs>
```

### Add Border
```jsx
  import React, { useState } from 'react'

  const data = [
    { title: "London", content: "London is the capital city of England." },
    { title: "Paris", content: "Paris is the capital of France." },
    { title: "Tokyo", content: "Tokyo is the capital of Japan." },
  ];
  const [selectData, setSelectData] = useState(data[0]);
 
  let Item = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectData.content}
      </div>
    )
  };

  <Tabs data={data} tab={(data) => data.title} setCurrent={(data) => setSelectData(data)} 
    tabPosCenter={true} border={true}
  > 
    <Item />
  </Tabs>
```