import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/SearchBox.styl'
import SearchIcon from '@material-ui/icons/Search'

export class SearchBox extends Component {
	static propTypes = {
		/** 搜尋欄寬度 */
		width: PropTypes.number,
		/** 搜尋欄高度 */
		height: PropTypes.number,
		/** event */
		func: PropTypes.func,
	}

	static defaultProps = {
		width: 400,
		height: 35,
	}

	
	searchContent = (event) => {
		this.props.func(event.target.value);
	}
	
	render() {
		const { width, height, func } = this.props;
		return (
			<div>
				<label className="searchbox_block">
					<SearchIcon className="searchbox_icon" />
					<input type="text" placeholder="想去哪 ?" 
						className="searchbox_input" style={{ width: width, height: height }}
						onChange={this.searchContent}
					/>
				</label>
			</div>
		)
	}
}

export default CSSModules(SearchBox, styles)