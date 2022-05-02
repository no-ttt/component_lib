import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Popup.styl'
import CancelIcon from '@mui/icons-material/Cancel'

export class Popup extends Component {
	static propTypes = {
		/** 觸發彈跳窗的元件 */
		clickBtn: PropTypes.string.isRequired,
		/** 彈跳窗的寬度 */
		width: PropTypes.number,
		/** 彈跳窗的高度 */
		height: PropTypes.number,
		/** 彈跳窗標題文字 */
		title: PropTypes.string,
		/** 關閉按鈕 */
		close: PropTypes.bool,
	}

	static defaultProps = {
		width: 400,
		height: 200,
		close: true,
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
		const { clickBtn, width, height, children, title, close } = this.props;
		return (
			<div>
				<button onClick={this.togglePopup} className="popup-btn">{ clickBtn }</button>
				{this.state.isOpen && 
					<div className="popup-box" onClick={this.togglePopup}>
						<div className="popup-mesg" style={{ width: width, height: height }}>
							<div className="popup-header">
								<div />
								{ title ? <div style={{ fontSize: "22px" }}>{title}</div> : <div />}
								{ close ? <button onClick={this.togglePopup}><CancelIcon /></button> : <div /> } 
							</div>
							{ title && <div className="popup-hr"></div> }
							<div className={ title || close ? "popup-content" : "popup-no-header-content" }>{ children }</div>
						</div>
					</div>	
				}
			</div>
		)
	}
} 

export default CSSModules(Popup, styles)