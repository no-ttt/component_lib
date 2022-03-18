import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Post.styl'

export class Post extends Component {
	static propTypes = {
		/** 景點圖片名稱 */
		title: PropTypes.string.isRequired,
		/** 景點圖片連結網址 */
		src: PropTypes.string.isRequired,
		/** 圖片寬度 */
		width: PropTypes.number,
		/** 圖片高度 */
		height: PropTypes.number,
		/** 字體大小 */
		fontSize: PropTypes.number,
		/** 邊框形狀(Square & Circle) */
		borderStyle: PropTypes.string,
	}

	static defaultProps = {
		width: 220,
		height: 220,
		fontSize: 16,
		borderStyle: "Square",
	}

	render() {
		const { title, src, width, height, fontSize, borderStyle } = this.props;
		return (
			<div className="post-layout">
				<div className="post-pic">
					{ borderStyle === "Circle" && <div className="post-cover" style={{ width: width, height: height }}></div> }
					<img title={title} src={src} alt={title} width={width} height={height} 
						className="post-image" style={ borderStyle==="Circle" ? {borderRadius: "100%"} : {} } />
				</div>
				<div className="post-des">
					<div className="post-name" style={{ fontSize: fontSize }}>{title}</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(Post, styles)