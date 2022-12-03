import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/AddComment.styl'
import Avatar from '../Avatar/Avatar'
import Rating from '../Rating/Rating'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'

export class AddComment extends Component {
	static propTypes = {
		/** 使用者頭貼 */
		src: PropTypes.string.isRequired,
		/** 使用者名稱 */
		name: PropTypes.string.isRequired,
		/** 回傳填寫內容 */
		returnComment: PropTypes.func,
	}

	constructor(props) {
		super(props)
		this.state = {
			rating: 0,
			comment: "",
			img: [],
		}
		this.fileEl = React.createRef();
	}

	render() {
		const { src, name, returnComment } = this.props
		return (
			<div>
			</div>
		)
	}
}

export default CSSModules(AddComment, styles)