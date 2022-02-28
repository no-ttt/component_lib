import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Popup.styl'

export class Popup extends Component {
	static propTypes = {
		/** 觸發彈跳窗的元件 */
		click: PropTypes.string.isRequired,
		/** 彈跳窗的內容 */
		content: PropTypes.string.isRequired,
		/** 彈跳窗的寬度 */
		width: PropTypes.number,
		/** 彈跳窗的高度 */
		height: PropTypes.number,
	}

	static defaultProps = {
		width: 400,
		height: 200,
	}

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
		}
		this.togglePopup = this.togglePopup.bind(this);
	}

	togglePopup = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		const { click, content, width, height } = this.props;
		return (
			<div>
				<button onClick={this.togglePopup} className="popup-btn">{click}</button>
				{this.state.isOpen && 
					<div className="popup-box" onClick={this.togglePopup}>
						<div className="popup-mesg" style={{width: width, height: height}}>
							{content}
						</div>
					</div>
				}
			</div>
		)
	}
} 

export default CSSModules(Popup, styles)