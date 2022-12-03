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
		userName: PropTypes.string.isRequired,
		/** 使用者頭貼圖片 */
		src: PropTypes.string.isRequired,
		/** 按讚數量 (mode="comment") */
		like: PropTypes.number,
		/** 評分 (mode="comment") */
		rating: PropTypes.number,
		/** 評論 (mode="comment") */
		content: PropTypes.string,
		/** 照片 (mode="comment") */
		img: PropTypes.array,
		/** 發佈日期 (mode="comment") */
		since: PropTypes.string,
		/** 模式 (comment / guide) */
		mode: PropTypes.string,
		/** 景點描述 (mode="guide") */
		guideDes: PropTypes.string,
	}

	static defaultProps = {
		like: 0,
		rating: 5,
		mode: "comment",
	}

	constructor(props) {
		super(props);
		this.state = {
			click: false,
			clickNum: this.props.like,
			more: true,
			contentHeight: 0,
		}
		this.isClick = this.isClick.bind(this)
	}

	isClick = () => {
		if (this.state.click === false)
			this.setState({
				clickNum: this.state.clickNum + 1,
				click: !this.state.click,
			})
		else
			this.setState({
				clickNum: this.state.clickNum - 1,
				click: !this.state.click,
			})
	}

	componentDidUpdate(prevProps) {
		if (prevProps.content !== this.props.content) {
			this.setState({
				contentHeight: document.getElementById('container').offsetHeight
			})
		}
	}

	componentDidMount() {
		this.setState({
			contentHeight: document.getElementById('container').offsetHeight
		})
	}

	render() {
		const { userName, src, rating, content, img, since, mode, guideDes } = this.props
		const { clickNum, click, more, contentHeight } = this.state
		if (mode === "comment")
			return (
				<div>
					<div className="comment-header">
						<div className="comment-user">
							<Avatar alt="user_avatar" src={src} width={45} />
							<div className="comment-user-name">{userName}</div>
						</div>
						<button className="comment-button"><MoreVertIcon /></button>
					</div>
					<div className="comment-content">
						<div style={{ display: "flex", flexDirection: "row" }}>
							<Rating size="small" fixed={true} default={rating} />
							<div className="comment-date">{since}</div>
						</div>
						<div id="container" className={!more ? "comment-content-txt" : "comment-content-txt-hidden"}>{content}</div>
						{
							more &&
								(contentHeight === 88)
								? <button className="comment-more" onClick={() => this.setState({ more: !more })}>顯示更多</button>
								: ""
						}
					</div>
					<div className="comment-img-date">
						<div className="comment-img-section" id="style-3">
							{img.map((src, i) =>
								<img key={i} src={src} alt={"photo-" + i} className="comment-photo" />
							)}
						</div>
					</div>
					<div className="comment-thumbup">
						<button className="comment-button" onClick={this.isClick}>
							{click ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
						</button>
						<div style={{ fontSize: "14px", marginLeft: "5px" }}>{clickNum}</div>
					</div>
				</div>
			)
		if (mode === "guide")
			return (
				<div>
					<div className="comment-header">
						<div className="comment-user">
							<Avatar alt="user_avatar" src={src} width={45} />
							<div className="comment-user-name">{userName}</div>
						</div>
						<div className="comment-pin">
							<PushPinIcon sx={{ fontSize: 15 }} />
							<div style={{ fontSize: "12px" }}>置頂</div>
						</div>
					</div>
					<div className="comment-content">{guideDes}</div>
				</div>
			)
	}
}

export default CSSModules(Comment, styles)