import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Tabs.styl'

export class Tabs extends Component {
	static propTypes = {
		/** Tab 的標籤名稱和對應資料 */
		data: PropTypes.array.isRequired,
		/** 標籤名稱 */
		getTitle: PropTypes.func,
		/** 點擊標籤觸發的 function */
		clickFunc: PropTypes.func,
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
		const { data, getTitle, children } = this.props;
		return (
			<div className="tab-layout">
				<div className="tab">
					{data.map((d, index) => (
						<button 
							style={{borderBottom: this.state.contentIndex == index ? "1px black solid": ""}} 
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