import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/HintImg.styl'

export class HintImg extends Component {
	static propTypes = {
		/** 底層圖片 */
		src: PropTypes.string.isRequired,
		/** 內容文字 */
		content: PropTypes.string,
	}

	render() {
		const { src, content, mask } = this.props;
		return (
			<div className="hintImg-cover">
				<div className="hintImg-txt">{content}</div>	
				<img src={src} alt="bg" width="250" height="200" className="hintImg-bg" />
			</div>
		)
	}
}

export default CSSModules(HintImg, styles)