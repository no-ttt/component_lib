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
	}

	render() {
		const { title, src, time, people } = this.props;
		return (
			<div className="travelCard-frame" style={{ width: 280, height: 220 }}>
				<div className="travelCard-layout">
					<img src={src} alt={title} width={265} height={140} className="travelCard-pic"></img>
					<div className="travelCard-des">
						<div className="travelCard-title" title={title}>{title}</div>
						<div className="travelCard-people">
							<PeopleIcon fontSize="small" />
							<div className="travelCard-people-txt">{people}</div>
						</div>
					</div>
					<div className="travelCard-time-txt">{time}</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(TravelCard, styles)