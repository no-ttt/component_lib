import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/HintImg.styl'

export class HintImg extends Component {
	static propTypes = {
		/** 背景圖片 */
		src: PropTypes.string.isRequired,
		/** 圖片寬度 */
		width: PropTypes.number,
		/** 圖片高度 */
		height: PropTypes.number,
		/** 內容描述的標題文字 */
		title: PropTypes.object.isRequired,
	}

	static defaultProps = {
		width: 400,
		height: 250,
	}

	render() {
		const { src, width, height, title, children, link } = this.props
		return (
			<div className="hintImg-layout" style={{ width: width, height: height }}>
				<div className="hintImg-cover" />
				<div className="hintImg-txt">
					<div style={{ fontSize: "20px" }}>{title}</div>
					<div className="hintImg-hr" />
				</div>
				<div className="hintImg-txt hintImg-des-height">{children}</div>
				{/* link 的部分沒有加入 props */}
				{
					link && <a href={link} target="blank" className="hintImg-more">More Info &gt;</a>
				}
				<img src={src} alt="bg" className="hintImg-bg" />
			</div>
		)
	}
}

export default CSSModules(HintImg, styles)