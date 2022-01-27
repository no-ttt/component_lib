import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Avatar.styl'
import default_avatar from '../img/default_avatar.png'

export class Avatar extends Component {
	static propTypes = {
		/** 圖像說明 */
		alt: PropTypes.string,
		/** 頭貼連結網址 */
		src: PropTypes.string,
		/** 頭貼寬度 */
		width: PropTypes.number,
	}

	static defaultProps = {
		width: 80,
		src: default_avatar,
	}

	render() {
		const { alt, src, width } = this.props;
		return (
			<div>
				<img title={alt} src={src} alt={alt} width={width} def className="avatar_frame"></img>
			</div>
		)
	}
}

export default CSSModules(Avatar, styles)