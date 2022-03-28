```jsx
   import React, { useState } from 'react'

  const data = [
    { title:"London", content: "London is the capital city of England." },
    { title:"Paris", content: "Paris is the capital of France." },
    { title:"Tokyo", content: "Tokyo is the capital of Japan." },
  ];
  const [selectData, setSelectData] = useState(data[0]);
 
  let Item = () => {
    return (
      <div>
        {selectData.content}
      </div>
    )
  };

  <div style={{ display: "flex", justifyContent: "center" }}>
    <Tabs data={data} getTitle={(d) => d.title} clickFunc={(data) => setSelectData(data)}> 
      <Item />
    </Tabs>
  </div>
```