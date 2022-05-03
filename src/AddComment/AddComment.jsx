import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/AddComment.styl'
import Avatar from '../Avatar/Avatar'
import Rating from '../Rating/Rating'

export class AddComment extends Component {
	static propTypes = {
		/** 觸發元件 */
		clickBtn: PropTypes.string,
    }

	static defaultProps = {
	}

	render() {
		const { clickBtn, title, src, userName } = this.props;
		return (
			<div>
				<div className="add-comment-user-info">
					<Avatar alt="user_avatar" src={src} width={45} />
					<div class="add-comment-user">{userName}</div>
				</div>
				<Rating />
			</div>
		)
	}
}

export default CSSModules(AddComment, styles)