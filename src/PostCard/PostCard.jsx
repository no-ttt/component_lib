import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/PostCard.styl'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Rating from '../Rating/Rating'

export class PostCard extends Component {
	static propTypes = {
		/** 景點名稱 */
		spotName: PropTypes.string.isRequired,
		/** 簡介 */
		des: PropTypes.string,
		/** 電話 */
		phone: PropTypes.string,
		/** 地址 */
		addr: PropTypes.string,
		/** 景點圖片 */
		picture: PropTypes.string,
	}

	render() {
		const { spotName, des, phone, addr, picture } = this.props;
		return (
			<div className="postcard-frame">
				<img src={picture} className="postcard-image" ></img>
				<div className="postcard-intro">
					<div className="postcard-title">{spotName}</div>
					<div className="postcard-des">{des}</div>
					<div className="postcard-loc">
						<LocationOnIcon fontSize="small" />
						<div className="postcard-addr">{addr}</div>
					</div>
					<div className="postcard-rating">
						<Rating starDefault={3} max={5} fixed={true} size={"small"} />
					</div>
					
				</div>
			</div>
		)
	}
}

export default CSSModules(PostCard, styles)
