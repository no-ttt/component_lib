import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/TravelCard.styl'

export class TravelCard extends Component {
	static propTypes = {
		/** 旅程標題 */
		title: PropTypes.string.isRequired,
		/** 旅程代表圖片 */
		src: PropTypes.string.isRequired,
		/** 時間 */
		time: PropTypes.string.isRequired,
		/** 所在縣市 */
		loc: PropTypes.string.isRequired,
		/** 人數 */
		people: PropTypes.string.isRequired,
		/** 卡片寬度 */
		width: PropTypes.number,
		/** 卡片高度 */
		height: PropTypes.number,
	}

	static defaultProps = {
		width: 280,
		height: 230,
	}

	render() {
		const { title, src, time, loc, people, width, height } = this.props;
		return (
			<div className="travelCard-frame" style={{ width: width, height: height }}>
				<img src={src} alt={title} width={width-15} height={height-80} className="travelCard-pic"></img>
			</div>
		)
	}
}

export default CSSModules(TravelCard, styles)