import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Dropdown.styl'

export class Dropdown extends Component {
	static propTypes = {
		/** 下拉按鈕 */
		dropdownBtn: PropTypes.string.isRequired,
		/** 下拉欄位內容 */
		dropdownItem: PropTypes.array,
		/** 下拉菜單位置 */
		dropdownMenuPos: PropTypes.number,
	}

	static defaultProps = {
		dropdownItem: [],
		dropdownMenuPos: 30,
	}

	render() {
		const { dropdownBtn, dropdownItem, dropdownMenuPos } = this.props;
		return (
			<div className="dropdown">
				<div>{ dropdownBtn }</div>
				<div className="dropdown-content" style={{ marginTop: dropdownMenuPos }}>
					{ dropdownItem.map((item) => <>{ item }</>)}
				</div>
			</div>
		)

	}
}

export default CSSModules(Dropdown, styles)