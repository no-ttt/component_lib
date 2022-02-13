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
		/** 指定 icon (dashboard, schedule, like, home) */
		icon: PropTypes.string.isRequired,
		/** 功能名稱 */
		name: PropTypes.string.isRequired,
	}

	render() {
		const { icon, name } = this.props;
		let option = [];
		let iconStyle = [];

		if (icon == "dashboard")
			iconStyle.push (<DashboardIcon fontSize="large" />)
		if (icon == "schedule")
			iconStyle.push (<DateRangeIcon fontSize="large" />)
		if (icon == "like")
			iconStyle.push (<FavoriteBorderIcon fontSize="large" />)
		if (icon == "home")
			iconStyle.push (<HomeIcon fontSize="large" />)

		option.push (
			<div className="navbar-btn">
				<div className="navbar-frame">{iconStyle}</div>
				<div className="navbar-title">{name}</div>
			</div>
		);

		return (
			<div>{option}</div>
		)
	}
}

export default CSSModules(NavBar, styles)