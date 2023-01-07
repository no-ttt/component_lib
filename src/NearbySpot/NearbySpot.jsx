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
		/** 說明文字 */
		des: PropTypes.string,
		/** 是否加入連結 */
		isLink: PropTypes.bool,
		/** 連結網址 */
		link: PropTypes.string
	}

	static defaultProps = {
		rating: 5,
		isLink: false,
	}

	render() {
		const { name, src, rating, des, isLink, link } = this.props
		return (
			<div className="nearby-spot">
				<div style={{ overflow: "hidden" }}>
					<img src={src} alt={name} className="nearby-spot-photo" />
				</div>
				<div className="nearby-spot-des">
					<div>
						{ isLink ? <a href={link} target="blank" className="nearby-spot-title-link">{name}</a> :<div className="nearby-spot-title">{name}</div> }
						<Rating size="small" isFixed={true} default={rating} />
					</div>
					<div className="nearby-spot-distance">{des}</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(NearbySpot, styles)