import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/HintImg.styl'

export class HintImg extends Component {
	static propTypes = {
		/** 底層圖片 */
		src: PropTypes.string.isRequired,
		/** 圖片寬度 */
		width: PropTypes.number,
		/** 圖片高度 */
		height: PropTypes.number,
		/** 控制遮罩 */
		mask: PropTypes.boolean,
		/** 內容文字 */
		content: PropTypes.string,
		/** 內容文字浮現位置 (數字越大出現位置越下面)*/
		textPos: PropTypes.number,
	}

	static defaultProps = {
		width: 250,
		height: 200,
		mask: false,
		textPos: 0
	}

	render() {
		const { src, width, height, mask, content, textPos } = this.props;
		return (
			<div className={mask ? "hintImg-cover" : "hintImg-no-cover"} style={{width: width, height: height}}>
				<div className="hintImg-txt" style={{marginTop: textPos}}>{content}</div>
				<img src={src} alt="bg" className="hintImg-bg" />
			</div>
		)
	}
}

export default CSSModules(HintImg, styles)