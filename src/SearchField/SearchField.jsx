import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/SearchField.styl'
import SearchIcon from '@material-ui/icons/Search'

export class SearchField extends Component {
	static propTypes = {
		/** 搜尋欄寬度 */
		width: PropTypes.number,
		/** 搜尋欄高度 */
		height: PropTypes.number,
	}

	static defaultProps = {
		width: 400,
		height: 35,
	}

	render() {
		const { width, height } = this.props;
		return (
			<form role="search" className="searchField_block" >
				<SearchIcon className="searchField_icon" />
				<input type="search" name="fname" placeholder="想去哪？" title="搜尋" role="searchbox" className="searchField_box" style={{ width: width, height: height }}>
				</input>
				
			</form>
		)
	}
}

export default CSSModules(SearchField, styles)