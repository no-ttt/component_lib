import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/PostInfo.styl'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import CallIcon from '@material-ui/icons/Call'
import ShareIcon from '@material-ui/icons/Share'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { red } from '@material-ui/core/colors'

export class PostInfo extends Component {
	static propTypes = {
		/** 景點名稱 */
		spotName: PropTypes.string,
		/** 電話 */
		phone: PropTypes.string,
		/** 地址 */
		addr: PropTypes.string,
		/** 景點圖片 */
		picture: PropTypes.string,
		/** 開放時間 */
		open: PropTypes.string,
		/** 門票資訊 */
		ticket: PropTypes.string,
		/** 注意事項 */
		remark: PropTypes.string,
		/** 交通方式 */
		traffic: PropTypes.string,
		/** 緯度 */
		posLat: PropTypes.number,
		/** 經度 */
		posLon: PropTypes.number,
	}

	constructor(props) {
		super(props)
		this.state = {
			like: false
		}
	}

	render() {
		const { spotName, phone, addr, picture, open, ticket, remark, traffic, posLat, posLon } = this.props;
		return (
			<div>
				<div className="post-info-header">
					<div className="post-info-spot-name">{spotName}</div>
					<div className="post-info-header-icon">
						<button><ShareIcon /></button>
						<button onClick={() => this.setState({ like: !this.state.like })}>
							{ !this.state.like
								? <FavoriteBorderIcon />
								: <FavoriteIcon style={{ color: red[500] }} />
							}
						</button>
					</div>
				</div>
				<div className="post-info-spot-des-block">
					<div className="post-info-spot-des">
						<LocationOnIcon />
						<a href={"https://www.google.com.tw/maps/@"+posLat.toFixed(7).toString()+","+posLon.toFixed(7).toString()+",15z"} target="_blank" style={{ color: "black", textDecoration: "none" }}>{addr}</a>
					</div>
					<div className="post-info-spot-des">
						<CallIcon />
						<div>{phone}</div>
					</div>
				</div>
				<div className="post-info-detail">
					<img src={picture} alt={spotName} width={"50%"} className="post-info-img-rwd" />
					<div className="post-info-tb">
						<div className="post-info-tb-title">詳細資訊</div>
						<table>
							<tr>
								<td className="post-info-td">開放時間</td>
								<td className="post-info-text">{open}</td>
							</tr>
							<tr>
								<td className="post-info-td">門票資訊</td>
								<td className="post-info-text">{ticket}</td>
							</tr>
							<tr>
								<td className="post-info-td">注意事項</td>
								<td className="post-info-text">{remark}</td>
							</tr>
							<tr>
								<td className="post-info-td">交通方式</td>
								<td className="post-info-text">{traffic}</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default CSSModules(PostInfo, styles)