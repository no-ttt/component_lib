import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Post.styl'

export class Post extends Component {
	static propTypes = {
		/** 景點名稱 */
		title: PropTypes.string.isRequired,
		/** 景點圖片 */
		src: PropTypes.string.isRequired,
		/** 圖片寬度和高度 */
		width: PropTypes.number,
		/** 字體大小 */
		fontSize: PropTypes.number,
		/** 邊框形狀 (Square or Circle) */
		borderStyle: PropTypes.string,
	}

	static defaultProps = {
		width: 220,
		fontSize: 16,
		borderStyle: "Square",
	}

	render() {
		const { title, src, width, fontSize, borderStyle } = this.props
		return (
			<div className="post-layout">
				<div className="post-overfit" style={{ width: width, height: width }}>
					<div className="post-pic">
						{borderStyle === "Circle" && <div className="post-cover" />}
						<img title={title} src={src} alt={title} width={width} height={width}
							className="post-image" style={borderStyle === "Circle" ? { borderRadius: "100%" } : {}} />
					</div>
				</div>
				{borderStyle === "Circle" && <div className="post-des">|</div>}
				<div className="post-des">
					<div style={{ fontSize: fontSize }}>{title}</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(Post, styles)