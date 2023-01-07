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
		/** nabar 所有物件 (icon, name, link)； icon : dashboard / schedule / like / home */
		feature: PropTypes.array.isRequired,
		/** navbar 寬度 (min-width: 250px) */
		width: PropTypes.number,
	}

	static defaultProps = {
		width: 300,
	}


	render() {
		const { feature, width, children } = this.props
		let option = []
		let iconStyle = []

		for (let i = 0; i < feature.length; i++) {
			if (feature[i].icon === "dashboard")
				iconStyle.push(<div key={i} className="navbar-frame"><DashboardIcon /></div>)
			if (feature[i].icon === "schedule")
				iconStyle.push(<div key={i} className="navbar-frame"><DateRangeIcon /></div>)
			if (feature[i].icon === "like")
				iconStyle.push(<div key={i} className="navbar-frame"><FavoriteBorderIcon /></div>)
			if (feature[i].icon === "home")
				iconStyle.push(<div key={i} className="navbar-frame"><HomeIcon /></div>)

			option.push(
				<a key={i} href={feature[i].link} className="navbar-btn">
					{iconStyle}
					<div className="navbar-title">{feature[i].name}</div>
				</a>
			);

			iconStyle = []

		}

		option.push(
			<div key={option.length}>{children}</div>
		)

		return (
			<div className="navbar-layout" style={{ width: width }}>
				{option}
			</div>
		)
	}
}

export default CSSModules(NavBar, styles)