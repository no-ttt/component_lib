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
		/** 座標 */
		pos: PropTypes.string,
	}

	static defaultProps = {
		
	}

	render() {
		const { spotName, des, phone, addr, picture, open, ticket, remark, traffic, pos } = this.props;
		return (
			<div>
			  
			</div>
		)
	}
}

export default CSSModules(FastInfo, styles)