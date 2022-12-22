import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Tabs.styl'

export class Tabs extends Component {
	static propTypes = {
		/** Tabs 資訊 (ex. title, content) */
		data: PropTypes.array.isRequired,
		/** 點擊的 Tab，回傳它的 title (data) => { data.title } */
		tab: PropTypes.func.isRequired,
		/** TabBar 位置是否置中 */
		tabPosCenter: PropTypes.bool,
		/** 點擊 Tab 觸發，回傳目前 Tab 的內容 (data) => { setData(data) } */
		setCurrent: PropTypes.func.isRequired,
	}

	static defaultProps = {
		tabPosCenter: true,
	}

	constructor(props) {
		super(props);
		this.state = {
			contentIndex: 0,
		}
	}

	handleClick = (content, index) => {
		this.setState({
			contentIndex: index
		})
		this.props.setCurrent(content)
	}

	render() {
		const { data, tab, tabPosCenter, children } = this.props
		const { contentIndex } = this.state
		return (
			<div>
				<div className="tab" style={{ display: "flex", justifyContent: tabPosCenter ? "center" : "flex-start" }}>
					{
						data.map((d, index) => (
							<button key={index}
								style={{ borderBottom: contentIndex === index ? "1px black solid" : "" }}
								onClick={() => this.handleClick(d, index)}
							>
								{tab(d)}
							</button>
						))
					}
				</div>
				<div className="tab-content">{children}</div>
			</div>
		)
	}
}

export default CSSModules(Tabs, styles)