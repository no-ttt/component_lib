import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Tabs.styl'

export class Tabs extends Component {
	static propTypes = {
		/** 標籤的標題 */
		title: PropTypes.array.isRequired,
	}

	static defaultProps = {
		data: [],
	}

	constructor(props) {
		super(props);
		this.state = {
			contentIndex: 0,
		}
	}

	render() {
		const { title, children } = this.props;
		return (
			<div className="tab-layout">
				<div className="tab">
					{title.map((subtitle, index) => (
						<button 
							style={{borderBottom: this.state.contentIndex == index ? "1px black solid": ""}} 
							onClick={() => this.setState({ contentIndex: index })}>{ subtitle }
						</button>
					))}
				</div>	
				<div className="tab-content">
					{ React.cloneElement(children, { index: this.state.contentIndex }) }
				</div>
			</div>
		)
	}
}

export default CSSModules(Tabs, styles)