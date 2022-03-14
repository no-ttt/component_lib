import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/HintImg.styl'

export class HintImg extends Component {
	static propTypes = {

	}

	static defaultProps = {

	}

	render() {
		const {  } = this.props;
		return (
			<div>
				<div className="hintImg-cover">
					<div className="hintImg-txt">Here</div>	
					<img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg" alt="bg" width="250" height="200" className="hintImg-bg" />
					
				</div>
			</div>
		)
	}
}

export default CSSModules(HintImg, styles)