import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Comment.styl'
import Avatar from '../Avatar/Avatar'
import Rating from '../Rating/Rating'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export class Comment extends Component {
	static propTypes = {

	}

	static defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = {
			click: false,
			clickNum: 100,
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
		const { src, userName } = this.props;
		return (
			<div>
				<div className="comment-header">
					<div className="comment-title">
						<Avatar alt="user_avatar" src={src} width={45} />
						<div>
							<div className="comment-user-name">{userName}</div>
						</div>
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
					<Rating size="small" />
					<div>適合假日走走放鬆心情！</div>
				</div>
				<div className="comment-img-date">
					<div className="comment-img-section">
						<img src="https://cdn2.ettoday.net/images/4995/d4995352.jpg" alt="photo-1" className="comment-photo" />
						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmj3zOgrQlhp5OpzaUf_fmvwi0XbZ61_DcA&usqp=CAU" alt="photo-2" className="comment-photo" />
					</div>
					<div className="comment-date">2022年1月1日</div> 
				</div>
			</div>
		)
	}
}

export default CSSModules(Comment, styles)