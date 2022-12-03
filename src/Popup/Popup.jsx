import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Popup.styl'
import CloseIcon from '@mui/icons-material/Close'

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
		/** 是否加入關閉按鈕 */
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
		const { clickBtn, width, height, children, title, close } = this.props
		const { isOpen } = this.state
		return (
			<div>
				<button onClick={this.togglePopup} className="popup-btn">{clickBtn}</button>
				{isOpen &&
					<div className="popup-window-fixed popup-layout">
						<div className="popup-window-fixed popup-box" onClick={this.togglePopup} />
						<div className="popup-mesg" style={{ width: width, height: height }}>
							<div className="popup-header">
								<div />
								{title ? <div style={{ fontSize: "22px" }}>{title}</div> : <div />}
								{close ? <button className="popup-cancel-btn" onClick={this.togglePopup}><CloseIcon /></button> : <div />}
							</div>
							{title && <div className="popup-hr"></div>}
							<div className={title || close ? "popup-content" : "popup-no-header-content"}>{children}</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export default CSSModules(Popup, styles)