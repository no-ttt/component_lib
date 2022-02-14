import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/FastInfo.styl'

export class FastInfo extends Component {
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

	render() {
		const { spotName, des, phone, addr, picture, open, ticket, remark, traffic, posLat, posLon } = this.props;
		return (
			<div className="fastInfo-frame">
				<div className="fastInfo-des">
					<img src={picture} width="300" height="200" className="fastInfo-image"></img>
					<div className="fastInfo-des-distance">
						<div className="fastInfo-spotName-txt">{spotName}</div>
						<table className="fastInfo-table">
							<tbody>
								<tr>
									<td valign="top" className="fastInfo-td">簡介</td>
									<td>{des}</td>
								</tr>
								<tr>
									<td valign="top" className="fastInfo-td">電話</td>
									<td>{phone}</td>
								</tr>
								<tr>
									<td valign="top" className="fastInfo-td">地址</td>
									<td>
										<a href={"https://www.google.com.tw/maps/@"+posLat.toFixed(7).toString()+","+posLon.toFixed(7).toString()+",15z"} target="_blank" style={{ color: "#d2691e", textDecoration: "none" }}>{addr}</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="fastInfo-other">
					<table className="fastInfo-other-table">
						<tbody>
							<tr>
								<td valign="top" className="fastInfo-other-td">開放時間</td>
								<td>{open}</td>
							</tr>
							<tr>
								<td valign="top" className="fastInfo-other-td">門票資訊</td>
								<td>{ticket}</td>
							</tr>						<tr>
								<td valign="top" className="fastInfo-other-td">注意事項</td>
								<td>{remark}</td>
							</tr>
							<tr>
								<td valign="top" className="fastInfo-other-td">交通方式</td>
								<td>{traffic}</td>
							</tr>
						</tbody>
					</table>
				</div>	
			</div>
		)
	}
}

export default CSSModules(FastInfo, styles)