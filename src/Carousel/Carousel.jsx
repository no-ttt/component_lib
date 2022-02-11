import React, { Component } from 'react'
import classNames from "classnames"
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Carousel.styl'

export class Carousel extends Component {
	static propTypes = {
		/** 旅程標題 */
		title: PropTypes.string.isRequired,
	}

	static defaultProps = {
	}

	constructor(props) {
		super(props);
		this.state = {
			pic1: 0,
			pic2: 1,
		}
	}

	render() {
		const {  } = this.props;
		const data = [
			{
				key: 1,
				src: "https://www.w3schools.com/w3css/img_lights.jpg",
			}, {
				key: 2,
				src: "https://www.w3schools.com/w3css/img_mountains.jpg",
			}, {
				key: 3,
				src: "https://www.w3schools.com/w3css/img_forest.jpg",
			},
		];

		const next = () => {
			this.setState({
				pic1: data.length - 1 > this.state.pic1 ? this.state.pic1 + 1 : 0,
				pic2: data.length - 1 > this.state.pic2 ? this.state.pic2 + 1 : 0,
			
			})
		}
		const prev = () => {
			this.setState({
				pic1: this.state.pic1 > 0 ? this.state.pic1 - 1 : data.length - 1,
				pic2: this.state.pic2 > 0 ? this.state.pic2 - 1 : data.length - 1,
			})
		}

		return (
			<div>
				<div className="layout">
					<div className="slider">
						{data.map((el, id) => (
							<div className={classNames("slider-slide", {"slider-slide-active": this.state.pic1 === id })} key={el.key} >
								<img className="slider-img" src={el.src} alt="" />
							</div>
						))}
					</div>
					<div className="slider">
						{data.map((el, id) => (
							<div className={classNames("slider-slide", {"slider-slide-active": this.state.pic2 === id })} key={el.key} >
								<img className="slider-img" src={el.src} alt="" />
							</div>
						))}
					</div>
				</div>
					<button onClick={prev}>prev</button>
					<button onClick={next}>next</button>
			</div>
			
		)
	}
}

export default CSSModules(Carousel, styles)