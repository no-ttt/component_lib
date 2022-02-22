import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/PostWall.styl'

export class PostWall extends Component {
	static propTypes = {
		/** 列的貼文數量*/
		cols: PropTypes.number,
		/** 行的貼文數量 */
		rowa: PropTypes.number,
	}

	static defaultProps = {
		rows: 2,
		cols: 3,
	}

	render() {
		const {  } = this.props;
		return (
			<div>
				
			</div>
		)
	}
}

export default CSSModules(PostWall, styles) 