import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/NearbySpot.styl'
import { Rating } from '../Rating/Rating'

export class NearbySpot extends Component {
	static propTypes = {
		/** 景點名稱 */
		title: PropTypes.string.isRequired,
		/** 景點代表圖片 */
		src: PropTypes.string.isRequired,
		/** 評分 */
		rating: PropTypes.number.isRequired,
		/** 與當前景點距離 */
		distance: PropTypes.number.isRequired,
	}

	render() {
		const { title, src, rating, distance } = this.props;
		return (
			<div className="spot-nearby">
				<img src={src} alt={title} className="spot-nearby-photo" />
				<div className="spot-nearby-des">
					<div>
						<div>{title}</div>
						<Rating starDefault={rating} max={5} fixed={true} size="small" />
					</div>
					<div className="spot-nearby-distance">{distance} 公里</div>
				</div>
			</div>
		)
	}
} 

export default CSSModules(NearbySpot, styles)