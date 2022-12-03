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
		/** 頭貼是否有 hover 效果 */
		hover: PropTypes.bool,
	}

	static defaultProps = {
		width: 80,
		src: default_avatar,
		hover: false,
	}

	render() {
		const { alt, src, width, hover } = this.props
		return (
			<div>
				<img title={alt} src={src} alt={alt} width={width} height={width} className={hover ? "avatar-frame" : "avatar-without-hover"}></img>
			</div>
		)
	}
}

export default CSSModules(Avatar, styles)