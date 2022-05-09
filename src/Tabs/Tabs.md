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
      <div style={{ display: "flex", justifyContent: "center" }}>
        {selectData.content}
      </div>
    )
  };

  <Tabs data={data} getTitle={(d) => d.title} clickFunc={(data) => setSelectData(data)} tabPosCenter={true}> 
    <Item />
  </Tabs>
```