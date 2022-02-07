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
		/** narbar 子元素，elements : dashboard (地圖筆記)、schedule (安排行程)、like (收藏)、home (首頁) */
		title: PropTypes.array,
	}
	
	static defaultProps = {
		title: [],
	}
	
	render() {
		const { title } = this.props;
		let option = [];
		let icon = [];

		for (let i = 0; i < title.length; i++) {
			if (title[i].icon == "dashboard")
				icon.push (<DashboardIcon fontSize="large" />)
			if (title[i].icon == "schedule")
				icon.push (<DateRangeIcon fontSize="large" />)
			if (title[i].icon == "like")
				icon.push (<FavoriteBorderIcon fontSize="large" />)
			if (title[i].icon == "home")
				icon.push (<HomeIcon fontSize="large" />)

			option.push (
				<div className="navbar-btn">
					<div className="navbar-frame">{icon}</div>
					<div className="navbar-title">{title[i].name}</div>
				</div>
			);

			icon = [];
		}

		return (
			<div className="navbar-sort">
				{option}
			</div>
		)
	}
}

export default CSSModules(NavBar, styles)