import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/ZoomCover.styl'

export class ZoomCover extends Component {
	static propTypes = {
		/** 寬度 (min-width: 200px) */
		width: PropTypes.number,
		/** 高度 */
		height: PropTypes.number,
		/** 行程名稱 */
		name: PropTypes.string,
		/** 行程天數 (mode="trip") */
		day: PropTypes.number,
		/** 點讚次數 (mode="trip") */
		like: PropTypes.number,
		/** 行程代表圖片 */
		src: PropTypes.string.isRequired,
		/** 圖片描述 (mode="custom") */
		des: PropTypes.string,
		/** 樣式 (trip / custom) */
		mode: PropTypes.string,
	}

	static defaultProps = {
		width: 200,
		height: 300,
		day: 1,
		like: 0,
		mode: "custom",
	}

	render() {
		const { width, height, name, day, like, src, mode, des } = this.props

		return (
			<div style={{ width: width, height: height, minWidth: "200px" }}>
				<div className="recommend-trip-overfit">
					<div className="recommend-trip-cover">
						<img src={src} alt={name} className="recommend-trip-img" />
					</div>
				</div>
				{
					mode === "trip" &&
					<div className="recommend-trip-content">
						<div style={{ width: (width - 20) }} className="recommend-trip-title">{name}</div>
						<div className="recommend-trip-des">
							<div>{day} DAY</div>
							<div>{like} LIKE</div>
						</div>
					</div>
				}
				{
					mode === "custom" &&
					<div className="recommend-activity-content">
						<div style={{ width: (width - 20), fontSize: "18px" }} className="recommend-trip-title">{name}</div>
						<div className="recommend-activity-des" style={{ width: (width - 40) }}>
							<div style={{ fontSize: "12px" }}>{des}</div>
						</div>
					</div>
				}
				
			</div>
		)
	}
}

export default CSSModules(ZoomCover, styles) 