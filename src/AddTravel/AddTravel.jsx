import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/AddTravel.styl'
import Avatar from '../Avatar/Avatar'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'

export class AddTravel extends Component {
	static propTypes = {
		/** 使用者頭貼 */
		src: PropTypes.string,
		/** 使用者名稱 */
		userName: PropTypes.string,
		/** 回傳填寫內容 (travelName, date, city, member, traffic, remark) => {} */
		returnData: PropTypes.func,
	}

	constructor(props) {
		super(props);
		this.state = {
			travelName: "",
			date: "",
			city: "",
			member: [],
			traffic: "",
			remark: "",
		}
		this.fileEl = React.createRef();
	}

	onChange = (e) => {
    const file = e.target.files.item(0); // 取得選中檔案們的一個檔案
    const fileReader = new FileReader(); // FileReader 為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.fileLoad);
		fileReader.readAsDataURL(file); // 讀取完檔案後，變成 URL
	};

	// e 為第13行發出load之事件
	fileLoad = (e) => {
		this.setState ({
			member:	[...this.state.member, e.target.result]
		})
	};

	submit = () => {
    // json base64
		// axios.post("/img", { img: this.state.img });
		
		const { travelName, date, city, member, traffic, remark } = this.state
		this.props.returnData(travelName, date, city, member, traffic, remark)
  };

	render() {
		const { src, userName } = this.props
		const { member } = this.state
		return (
			<div>
				<div className="add-travel-content" id="add-travel">
					<div className="add-travel-row">
					<div className="add-travel-title">行程名稱</div>
					<input type="text" id="travel-name" autocomplete="off" name="travel-name" 
						className="add-travel-input" 
						onChange={e => this.setState({ travelName: e.target.value })} 
					/>
				</div>
				<div className="add-travel-row">
					<div className="add-travel-title">日期</div>
					<input type="date" id="travel-date" name="travel-date" 	
						className="add-travel-input" 
						onChange={e => this.setState({ date: e.target.value })} 
					/>
				</div>
				<div className="add-travel-row">
					<div className="add-travel-title">旅遊城市</div>
					<input type="text" id="travel-city" name="travel-city" 
						className="add-travel-input" 
						onChange={e => this.setState({ city: e.target.value })} 
					/>
				</div>
				<div className="add-travel-row">
					<div className="add-travel-title">成員</div>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<div className="add-travel-user-section" id="add-travel">
							<Avatar alt={userName} src={src} width={50} />
							{ member.length !== 0 
								? member.map((src, i) => 
									<div key={i} className="add-travel-img">
										<button className="add-travel-upload-cancel" 
											onClick={() => {
												this.setState({ member: member.filter((f, index) => index !== i)}); 
												this.fileEl.current.value = null;
											}}>
											<ClearIcon fontSize="small" />
										</button>
										<img className="add-travel-upload-img" src={src} />
									</div>
								)
								: ""
							}
							<div style={{ marginLeft: "10px" }}>
								<label className="add-travel-people-frame">
									<input type="file" multiple="multiple" draggable="true" 
										onChange={this.onChange} ref={this.fileEl} style={{ display: "none" }} 
									/>
									<AddIcon sx={{ fontSize: 30 }} />
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="add-travel-row">
					<div className="add-travel-title">交通方式</div>
					<select className="add-travel-select" onChange={e => this.setState({ traffic: e.target.value })}>
						<option >機車</option>
						<option>汽車</option>
						<option>大眾運輸工具</option>
						<option>腳踏車</option>
					</select>
				</div>
				<div className="add-travel-row">
					<div className="add-travel-title">備註</div>
					<textarea id="comment" name="comment" rows="6" placeholder="寫些什麼？" 
						className="add-travel-textarea" 
						onChange={e => this.setState({ remark: e.target.value })} 
					/>
				</div>
				<button className="add-travel-btn" onClick={this.submit}>建立行程</button>
				</div>
			</div>
		)
	}
}

export default CSSModules(AddTravel, styles)