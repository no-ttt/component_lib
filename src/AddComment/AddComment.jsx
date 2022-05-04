import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/AddComment.styl'
import Popup from '../PoPup/Popup'
import Avatar from '../Avatar/Avatar'
import Rating from '../Rating/Rating'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'

export class AddComment extends Component {
	static propTypes = {
		/** 觸發元件 */
		clickBtn: PropTypes.string,

	}

	static defaultProps = {
	}

	constructor(props) {
		super(props);
		this.state =  {
			rating: 0,
			comment: "",
		}
	}

	sendComment = () => {
		this.props.returnComment(this.state.rating, this.state.comment)
	} 

	render() {
		const { clickBtn, title, src, userName } = this.props;
		return (
			<Popup clickBtn={clickBtn} width={400} height={480} title={title}>
				<div>
					<div className="add-comment-user-info">
						<Avatar alt="user_avatar" src={src} width={45} />
						<div class="add-comment-user">{userName}</div>
					</div>
					<div className="add-comment-section">
						<Rating max={5} fixed={false} size="large" value={(n) => this.setState({ rating: n })} />
						<textarea id="comment" name="comment" rows="8" placeholder="寫些什麼？" 
							className="add-comment-textarea" onChange={e => this.setState({ comment: e.target.value })} />
						<div className="add-comment-upload-img">
							<AddAPhotoIcon sx={{ fontSize: 30 }} />
						</div>
						<button className="add-comment-btn" onClick={this.sendComment}>我要發佈</button>
					</div>
				</div>
			</Popup>
		)
	}
}

export default CSSModules(AddComment, styles)