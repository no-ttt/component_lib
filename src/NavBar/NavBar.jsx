import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/NavBar.styl'
import DashboardIcon from '@material-ui/icons/Dashboard'
import DateRangeIcon from '@material-ui/icons/DateRange'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import HomeIcon from '@material-ui/icons/Home'

export class NavBar extends Component {
	static propTypes = {
		/** nabar 所有物件 (需傳入 icon & name ; icon : dashboard, schedule, like, home) */
		feature: PropTypes.array.isRequired,
		/** navbar 長度 */
		width: PropTypes.number,
		/** 物件大小 */
		featureSize: PropTypes.number,
		/** 字體大小 */
		fontSize: PropTypes.number,
	}

	static defaultProps = {
		width: 300,
		featureSize: 40,
		fontSize: 14,
	}


	render() {
		const { feature, width, featureSize, fontSize } = this.props;
		let option = [];
		let iconStyle = [];

		for (let i = 0; i < feature.length; i++) {
			if (feature[i].icon === "dashboard")
				iconStyle.push (<DashboardIcon />)
			if (feature[i].icon === "schedule")
				iconStyle.push (<DateRangeIcon />)
			if (feature[i].icon === "like")
				iconStyle.push (<FavoriteBorderIcon />)
			if (feature[i].icon === "home")
				iconStyle.push (<HomeIcon />)

			option.push (
				<div className="navbar-btn" style={{ width: featureSize+40 }}>
					<div className="navbar-frame" style={{ width: featureSize, height: featureSize }}>{ iconStyle }</div>
					<div className="navbar-title" style={{ fontSize: fontSize }}>{ feature[i].name }</div>
				</div>
			);

			iconStyle = []
		}

		return (
			<div className="navbar-layout" style={{ width: width }}>
				{ option }
			</div>
		)
	}
}

export default CSSModules(NavBar, styles)