```jsx
	import Popup from '../PoPup/Popup'

	const clickBtn = <div>Click Me !</div>;
  const userInfo = {
    src: "https://p3-tt.byteimg.com/origin/pgc-image/def93625146b46f8980a39f6e0057b2f?from=pc",
    userName: "test",
  };
	
	<Popup clickBtn={clickBtn} width={380} height={720} title="建立行程">
		<AddTravel src={userInfo.src} userName={userInfo.userName} 
			returnData={(travelName, date, city, member, traffic, remark) => {alert("行程名稱：" + travelName + "\n日期：" + date + "\n旅遊城市：" + city + "\n交通方式：" + traffic + "\n備註：" + remark)}}
		/>
	</Popup>
	
```