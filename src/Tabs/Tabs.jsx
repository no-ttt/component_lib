import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Tabs.styl'

export class Tabs extends Component {
	static propTypes = {
		/** 標籤的標題 */
		tabTitle: PropTypes.array.isRequired,
		/** 標籤的內容 */
		tabContent: PropTypes.array.isRequired,
	}

	constructor(props) {
		super(props);
		this.state = {
			contentIndex: 0,
		}
	}

	render() {
		const { tabTitle, tabContent } = this.props;
		return (
			<div>
				<div class="tab">
					{tabTitle.map((subtitle, index) => (
						<button style={{borderBottom: this.state.contentIndex == index ? "1px black solid": ""}} onClick={() => this.setState({contentIndex: index})}>{subtitle}</button>
					))}
				</div>
				
				<div className="tab-content">{tabContent[this.state.contentIndex]}</div>
			</div>
		)
	}
}

export default CSSModules(Tabs, styles)