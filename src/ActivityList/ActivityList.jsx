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
		/** 活動名稱 (get name) */
		name: PropTypes.func.isRequired,
		/** 活動內容敘述 (get des) */
		des: PropTypes.func.isRequired,
		/** 活動所屬地點 (get location) */
		location: PropTypes.func.isRequired,
		/** 代表圖片 (get picture) */
		picture: PropTypes.func.isRequired,
		/** 活動開始時間 (get startTime) */
		startTime: PropTypes.func.isRequired,
		/** 活動結束時間 (get endTime) */
		endTime: PropTypes.func.isRequired,
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
		super(props)
		this.state = {
			hintImg: this.props.data[0]
		}
	}

	render() {
		const { data, width, height, listWidth, name, des, location, picture, startTime, endTime } = this.props
		const { hintImg } = this.state
		const title = <div>{name(hintImg)}</div>

		return (
			<div className="activity-layout">
				<HintImg src={picture(hintImg)} title={title} width={width} height={height}>
					<div>{des(hintImg)}</div>
				</HintImg>
				<div style={{ height: height, width: (listWidth + 40) }} className="activity-item-block" id="style-3">
					{data.map((d, i) => (
						<div key={i} style={{ width: listWidth }} className="activity-item" onClick={() => this.setState({ hintImg: d })}>
							<div className="activity-item-date">{startTime(d)} - {endTime(d)}</div>
							<div className="activity-detail">
								<div style={{ width: (listWidth - 120) }} className="activity-name">{name(d)}</div>
								<div className="activity-detail">
									<LocationOnIcon fontSize="small" />
									<div style={{ fontSize: "12px" }}>{location(d)}</div>
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