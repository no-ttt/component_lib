import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/ActivityList.styl'
import HintImg from '../HintImg/HintImg'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export class ActivityList extends Component {
	static propTypes = {
		/** 活動資訊 (include: name, des, location, picture, startTime, endTime) */
		data: PropTypes.array.isRequired,
		/** 圖片寬度 */
		width: PropTypes.number,
		/** 圖片高度 */
		height: PropTypes.number,
		/** 活動資訊列表寬度 (min-width: 360px) */
		listWidth: PropTypes.number,
	}

	static defaultProps = {
		width: 450,
		height: 280,
		listWidth: 360,
	}

	constructor(props) {
		super(props);
		this.state = {
			hintImg: this.props.data[0]
		}
	}

	render() {
		const { data, width, height, listWidth } = this.props
		const { hintImg } = this.state
		const title = <div>{hintImg.name}</div>

		return (
			<div className="activity-layout">
				<HintImg src={hintImg.picture} title={title} width={width} height={height}>
					<div>{hintImg.des}</div>
				</HintImg>
				<div style={{ height: height, width: (listWidth + 40) }} className="activity-item-block" id="style-3">
					{data.map((d, i) => (
						<div key={i} style={{ width: listWidth }} className="activity-item" onClick={() => this.setState({ hintImg: d })}>
							<div className="activity-item-date">{d.startTime} - {d.endTime}</div>
							<div className="activity-detail">
								<div style={{ width: (listWidth - 120) }} className="activity-name">{d.name}</div>
								<div className="activity-detail">
									<LocationOnIcon fontSize="small" />
									<div style={{ fontSize: "12px" }}>{d.location}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default CSSModules(ActivityList, styles)