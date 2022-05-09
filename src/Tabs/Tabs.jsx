import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Tabs.styl'

export class Tabs extends Component {
	static propTypes = {
		/** Tab 的 (title, content) */
		data: PropTypes.array.isRequired,
		/** 標籤名稱 (d) => {d.title} */
		getTitle: PropTypes.func,
		/** 標籤位置是否置中 */
		tabPosCenter: PropTypes.bool,
		/** 點擊標籤觸發 (data) => {setData(data)} */
		clickFunc: PropTypes.func,
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
		this.props.clickFunc(content, index)
	}

	render() {
		const { data, getTitle, children, tabPosCenter } = this.props;
		return (
			<div className="tab-layout">
				<div className="tab" style={{ display: "flex", justifyContent: tabPosCenter ? "center" : "flex-start" }}>
					{data.map((d, index) => (
						<button 
							style={{ borderBottom: this.state.contentIndex === index ? "1px black solid" : "" }} 
							onClick={() => this.handleClick(d, index)}>
								{ getTitle(d) }
						</button>
					))}
				</div>	
				<div className="tab-content">
					{ React.cloneElement(children) }
				</div>
			</div>
		)
	}
}

export default CSSModules(Tabs, styles)