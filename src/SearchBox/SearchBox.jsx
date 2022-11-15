import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/SearchBox.styl'
import SearchIcon from '@material-ui/icons/Search'

export class SearchBox extends Component {
	static propTypes = {
		/** 搜尋欄寬度 (min-width: 100px) */
		width: PropTypes.number,
		/** 搜尋欄高度 (min-height: 30px) */
		height: PropTypes.number,
		/** 提示字大小 */
		fontSize: PropTypes.number,
		/** event (text) => {} */
		func: PropTypes.func,
	}

	static defaultProps = {
		width: 400,
		height: 35,
		fontSize: 16,
	}

	_handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			this.props.func(e.target.value);
		}
	}

	render() {
		const { width, height, fontSize } = this.props
		return (
			<div className="searchbox_block" style={{ width: width, height: height }}>
				<SearchIcon className="searchbox_icon" />
				<input type="text" placeholder="想去哪？"
					className="searchbox_input" style={{ fontSize: fontSize }}
					onKeyDown={this._handleKeyDown}
				/>
			</div>
		)
	}
}

export default CSSModules(SearchBox, styles)