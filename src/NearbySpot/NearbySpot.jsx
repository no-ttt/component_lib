import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/NearbySpot.styl'
import Rating from '../Rating/Rating'

export class NearbySpot extends Component {
	static propTypes = {
		/** 景點名稱 */
		name: PropTypes.string.isRequired,
		/** 景點代表圖片 */
		src: PropTypes.string.isRequired,
		/** 評分 */
		rating: PropTypes.number,
		/** 與當前景點的距離 (公里) */
		distance: PropTypes.number
	}

	static defaultProps = {
		rating: 5,
		distance: 0,
	}

	render() {
		const { name, src, rating, distance } = this.props
		return (
			<div className="nearby-spot">
				<div style={{ overflow: "hidden" }}>
					<img src={src} alt={name} className="nearby-spot-photo" />
				</div>
				<div className="nearby-spot-des">
					<div>
						<div className="nearby-spot-title">{name}</div>
						<Rating size="small" fixed={true} default={rating} />
					</div>
					<div className="nearby-spot-distance">{distance} 公里</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(NearbySpot, styles)