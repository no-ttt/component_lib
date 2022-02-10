import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/TravelCard.styl'
import PeopleIcon from '@material-ui/icons/People'

export class TravelCard extends Component {
	static propTypes = {
		/** 旅程標題 */
		title: PropTypes.string.isRequired,
		/** 旅程代表圖片 */
		src: PropTypes.string.isRequired,
		/** 時間 */
		time: PropTypes.string.isRequired,
		/** 人數 */
		people: PropTypes.string.isRequired,
		/** 卡片寬度 */
		width: PropTypes.number,
		/** 卡片高度 */
		height: PropTypes.number,
		/** 主題字體大小 */
		titleFontSize: PropTypes.number,
		/** 補充說明字體大小 */
		desFontSize: PropTypes.number,
	}

	static defaultProps = {
		width: 280,
		height: 220,
		titleFontSize: 16,
		desFontSize: 14,
	}

	render() {
		const { title, src, time, people, width, height, titleFontSize, desFontSize } = this.props;
		return (
			<div className="travelCard-frame" style={{ width: width, height: height }}>
				<div className="travelCard-layout">
					<img src={src} alt={title} width={width-15} height={height-80} className="travelCard-pic"></img>
					<div className="travelCard-des">
						<div className="travelCard-title" style={{ fontSize: titleFontSize }}>{title}</div>
						<div className="travelCard-people">
							<PeopleIcon fontSize="small" />
							<div className="travelCard-people-txt" style={{ fontSize: titleFontSize }}>{people}</div>
						</div>
					</div>
					<div className="travelCard-time-txt" style={{ fontSize: desFontSize }}>{time}</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(TravelCard, styles)