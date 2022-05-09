import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Comment.styl'
import Avatar from '../Avatar/Avatar'
import Rating from '../Rating/Rating'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import PushPinIcon from '@mui/icons-material/PushPin'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export class Comment extends Component {
	static propTypes = {
		/** 使用者名稱 */
		userName: PropTypes.string,
		/** 按讚數量 */
		like: PropTypes.number,
		/** 評分 */
		rating: PropTypes.number,
		/** 評論 */
		comment: PropTypes.string,
		/** 照片 */
		img: PropTypes.array,
		/** 發布日期 */
		date: PropTypes.string,
		/** 景點描述 */
		directDes: PropTypes.string,
		/** 模式 (comment or direct) */
		mode: PropTypes.string,
	}

	static defaultProps = {
		like: 0,
		mode: "comment",
	}

	constructor(props) {
		super(props);
		this.state = {
			click: false,
			clickNum: this.props.like,
		}
		this.isClick = this.isClick.bind(this);
	}

	isClick = () => {
		if (this.state.click === false)
			this.setState ({
				clickNum: this.state.clickNum + 1,
				click: !this.state.click,
			})
		else
			this.setState ({
				clickNum: this.state.clickNum - 1,
				click: !this.state.click,
			})
	}

	render() {
		const { src, userName, rating, content, img, date, mode, directDes } = this.props;
		if (mode === "comment")
			return (
				<div>
					<div className="comment-header">
						<div className="comment-title">
							<Avatar alt="user_avatar" src={src} width={45} />
							<div className="comment-user-name">{userName}</div>
						</div>
						<div className="comment-thumbup">
							<button onClick={this.isClick}>
								{ this.state.click ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon /> }
							</button>
							<div style={{ fontSize: "14px" }}>{this.state.clickNum}</div>
							{/* <button><MoreVertIcon /></button> */}
						</div>
					</div>
					<div className="comment-content">
						<Rating size="small" fixed={true} starDefault={rating} />
						<div>{content}</div>
					</div>
					<div className="comment-img-date">
						<div className="comment-img-section">
							{img.map((src, i) =>
								<img key={i} src={src} alt={"photo-" + i} className="comment-photo" />
							)}
						</div>
						<div className="comment-date">{date}</div> 
					</div>
				</div>
			)
		if (mode === "direct")
			return (
				<div>
					<div className="comment-header">
						<div className="comment-title">
							<Avatar alt="user_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7A5w9fXNr22x_vZzJ17ubf2X2VX7ZSzBeMQ&usqp=CAU" width={45} />
							<div className="comment-user-name">旅遊小幫手</div>
						</div>
						<div className="comment-pin">
							<PushPinIcon sx={{ fontSize: 15 }} />
							<div style={{ fontSize: "12px" }}>置頂</div>
						</div>
					</div>
					<div className="comment-content">{directDes}</div>
				</div>
			)
	}
}

export default CSSModules(Comment, styles)