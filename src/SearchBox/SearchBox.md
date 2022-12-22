```jsx
  import React, { useState } from 'react'

  const data = [
    { option: "南投縣埔里鎮", link: "https://www.google.com/maps/place/545%E5%8D%97%E6%8A%95%E7%B8%A3%E5%9F%94%E9%87%8C%E9%8E%AE%E5%9F%94%E9%87%8C/" },
    { option: "南投縣魚池鄉", link: "https://www.google.com/maps/search/545%E5%8D%97%E6%8A%95%E7%B8%A3%E5%9F%94%E9%87%8C%E9%8E%AE%E9%AD%9A%E6%B1%A0" },
    { option: "台中市北區", link: "https://www.google.com/maps/place/%E5%8F%B0%E4%B8%AD%E5%B8%82%E5%8C%97%E5%8D%80%E8%87%BA%E4%B8%AD/" },
    { option: "台北市", link: "https://www.google.com/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/" },
  ];

  const [suggestion, setSuggestion] = useState([]);

  function search(text) {
    setSuggestion(data.filter(value => value.option.indexOf(text) !== -1));
  };

  <SearchBox fontSize={16} suggestion={suggestion} option={(d) => d.option} link={(d) => d.link} width={800} height={40}
    hintText="搜尋看看？" searchFunc={(text) => search(text)}
  />
```