import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/AddComment.styl'
import Avatar from '../Avatar/Avatar'
import Rating from '../Rating/Rating'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import ClearIcon from '@mui/icons-material/Clear'
import default_avatar from '../img/default_avatar.png'

export class AddComment extends Component {
	static propTypes = {
		/** 使用者頭貼 */
		src: PropTypes.string,
		/** 使用者名稱 */
		userName: PropTypes.string,
		/** 回傳填寫內容 (rating, comment, img) => {} */
		returnComment: PropTypes.func,
	}

	static defaultProps = {
		src: default_avatar,
	}

	constructor(props) {
		super(props);
		this.state =  {
			rating: 0,
			comment: "",
			img: [],
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
			img:	[...this.state.img, e.target.result]
		})
	};
	
	submit = () => {
    // json base64
    // axios.post("/img", { img: this.state.img });

		this.props.returnComment(this.state.rating, this.state.comment, this.state.img)
  };

	render() {
		const { src, userName } = this.props;
		console.log(this.state.img)
		return (
			<div>
				<div className="add-comment-user-info">
					<Avatar alt="user_avatar" src={src} width={45} />
					<div class="add-comment-user">{userName}</div>
				</div>
				<div className="add-comment-section">
					<Rating max={5} fixed={false} size="large" value={(n) => this.setState({ rating: n })} />
					<textarea id="comment" name="comment" rows="8" placeholder="寫些什麼？" 
						className="add-comment-textarea" onChange={e => this.setState({ comment: e.target.value })} />
					<div style={{ display: "flex", flexDirection: "row" }}>
						<label className="add-comment-upload-img-frame">
							<input type="file" multiple="multiple" draggable="true" onChange={this.onChange} style={{ display: "none" }} ref={this.fileEl} />
							<div><AddAPhotoIcon sx={{ fontSize: 30 }} /></div>	
						</label>
						<div className="add-comment-img-section" id="add-comment">
							{ this.state.img.length !== 0 
								? this.state.img.map((src, i) => 
									<div key={i} className="add-comment-img">
										<button className="add-comment-upload-cancel" 
											onClick={() => {
												this.setState({ img: this.state.img.filter((f, index) => index !== i)}); 
												this.fileEl.current.value = null;
											}}>
											<ClearIcon fontSize="small" />
										</button>
										<img className="add-comment-upload-img" src={src} />
									</div>
								)
								: "" }
						</div>
					</div>
					<button className="add-comment-btn" onClick={this.submit}>我要發佈</button>
				</div>
			</div>
		)
	}
}

export default CSSModules(AddComment, styles)