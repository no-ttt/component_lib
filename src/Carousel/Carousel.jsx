import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Carousel.styl'
import Post from '../Post/Post'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

export class Carousel extends Component {
	static propTypes = {
		/** 一頁放多少個 item */
		cols: PropTypes.number,
		/** 間距 */
		gap: PropTypes.number,
		/** 所有 item 相關資訊 (title, src)*/
		data: PropTypes.array.isRequired,
		/** item 的寬度 */
		width: PropTypes.number,
		/** item 高度 */
		height: PropTypes.number,
	}

	static defaultProps = {
		cols: 3,
		gap: 0,
		width: 150,
		height: 200,
	}

	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
		}
	}

	render() {
		const { cols, gap, data, width, height, children } = this.props;
		const itemSetList = data.reduce((result, item, i) => {
			if (i % cols === 0) {
				result.push ([
					<div key={i} className="Carousel-item">
						{ React.cloneElement(children, { data: item, width: width, height: height }) }
					</div>
				])
			} else {
				result[result.length - 1].push (
					<div key={i} className="Carousel-item">
						{ React.cloneElement(children, { data: item, width: width, height: height }) }
					</div>
				)
			}

			return result
		}, [])

		const page = Math.ceil(data.length / cols)

		const handlePrev = () => {
			this.setState ({
				currentPage: this.state.currentPage - 1
			})
		}

		const handleNext = () => {
			this.setState ({
				currentPage: this.state.currentPage + 1
			})
		}

		return (
			<div className="Carousel">
				<div style={this.state.currentPage <= 0 ? {visibility: "hidden"} : {}}>
					<button
						onClick={handlePrev}
						className="Carousel_btn"
					>
						<KeyboardArrowLeftIcon />
					</button>
				</div>
				<div className="Carousel_railWrapper">
					<div
						className="Carousel_rail"
						style={{
							gridTemplateColumns: `repeat(${page}, 100%)`,
							left: `calc(${-100 * this.state.currentPage}% - ${gap * this.state.currentPage}px)`,
							gridColumnGap: `${gap}px`,
							width: width * cols + gap * (cols - 1),
						}}
					>
						{itemSetList.map((set, i) => (
							<div
								key={i}
								style={{
									display: 'grid',
									gridTemplateColumns: `repeat(${cols}, ${width}px)`,
									gridGap: `${gap}px`
								}}
							>
								{ set }
							</div>
						))}
					</div>
				</div>
				<div style={this.state.currentPage === page - 1 ? {visibility: "hidden"} : {}} >
					<button
						className="Carousel_btn"
						onClick={handleNext}
					>
						<KeyboardArrowRightIcon />
					</button>
				</div>
			</div>
		)
	}
}

export default CSSModules(Carousel, styles)
