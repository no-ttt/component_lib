import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Popup.styl'

export class Popup extends Component {
	static propTypes = {
		/** 彈跳窗的內容 */
		content: PropTypes.string.isRequired,
	}

	static defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = {
			displayModal: false,
		}
		this.modalOpen = this.modalOpen.bind(this);
		this.modalClose = this.modalClose.bind(this);
	}

	modalOpen = () => {
		this.setState({
			displayModal: true
		})
		console.log(this.state.displayModal)
	}

	modalClose = () => {
		this.setState({
			displayModal: false
		})
		console.log(this.state.displayModal)
	}

	render() {
		const { content } = this.props;
		return (
			<div>
				<button onClick={this.modalOpen}>Click me!</button>
				<div className="Modal">{content}</div>
			</div>
		)
	}
} 

export default CSSModules(Popup, styles)