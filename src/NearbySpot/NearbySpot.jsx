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
		/** 圖片說明 */
		des: PropTypes.string,
		/** des 是否為連結 */
		isLink: PropTypes.bool,
		/** 導向連結時是否以新分頁開啟 (isLink=true) */
		blank: PropTypes.bool,
	}

	static defaultProps = {
		rating: 5,
		des: "",
		blank: false,
		isLink: false,
	}

	render() {
		const { name, src, rating, des, blank, isLink } = this.props
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
					{
						isLink ?
						<a href={des} target={blank ? "blank" : ""} className="nearby-spot-link">More</a>
						: <div className="nearby-spot-distance">{des}</div>
					}
					
				</div>
			</div>
		)
	}
}

export default CSSModules(NearbySpot, styles)