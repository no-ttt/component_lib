import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/RecommendTrip.styl'

export class RecommendTrip extends Component {
	static propTypes = {
		/** 寬度 (min-width: 200px) */
		width: PropTypes.number,
		/** 高度 */
		height: PropTypes.number,
		/** 行程名稱 */
		name: PropTypes.string,
		/** 行程天數 */
		day: PropTypes.number,
		/** 點讚次數 */
		like: PropTypes.number,
		/** 行程代表圖片 */
		src: PropTypes.string.isRequired,
	}

	static defaultProps = {
		width: 200,
		height: 300,
		day: 1,
		like: 0,
	}

	render() {
		const { width, height, name, day, like, src } = this.props
		return (
			<div style={{ width: width, height: height, minWidth: "200px" }}>
				<div className="recommend-trip-overfit">
					<div className="recommend-trip-cover">
						<img src={src} alt={name} className="recommend-trip-img" />
					</div>
				</div>
				<div className="recommend-trip-content">
					<div style={{ width: (width - 20) }} className="recommend-trip-title">{name}</div>
					<div className="recommend-trip-des">
						<div>{day} DAY</div>
						<div>{like} LIKE</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(RecommendTrip, styles) 