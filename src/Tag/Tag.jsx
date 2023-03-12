import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Tag.styl'

export class Tag extends Component {
	static propTypes = {
		/** POI 名稱 */
		name: PropTypes.string.isRequired,
    /** 標籤顏色 */
    color: PropTypes.string,
    /** 字體大小 */
    fontSize: PropTypes.int,
    /** 字體顏色 */
    fontColor: PropTypes.string,
	}

	static defaultProps = {
    color: "#C4C4C4",
    fontSize: 16,
    fontColor: "black"
	}

	render() {
		const { name, color, fontSize, fontColor } = this.props
		return (
			<div className="spot-pin" style={{ backgroundColor: color, fontSize: fontSize, color: fontColor }}>{name}</div>
		)
	}
}

export default CSSModules(Tag, styles)