import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Carousel.styl'
import Post from '../Post/Post'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

export class Carousel extends Component {
	static propTypes = {
		/** 一頁放多少個 post */
		cols: PropTypes.number,
		/** 間距 */
		gap: PropTypes.number,
		/** 所有 post */
		post: PropTypes.string.isRequired,
		/** 圖片寬度 */
		width: PropTypes.number,
		/** 圖片高度 */
		height: PropTypes.number,
		/** 字體大小 */
		fontSize: PropTypes.number,
	}

	static defaultProps = {
		cols: 5,
		gap: 10,
		width: 220,
		height: 220,
		fontSize: 16,
	}

	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
		}
	}


	render() {
		const { cols, gap, post, width, height, fontSize } = this.props;
		
		const itemSetList = post.reduce((result, item, i) => {
			if (i % cols === 0) {
				result.push([
					<div key={i}>
						<Post title={item.title} src={item.src} width={width} height={height} fontSize={fontSize} />
					</div>
				])
			} else {
				result[result.length - 1].push(
					<div key={i}>
						<Post title={item.title} src={item.src} width={width} height={height} fontSize={fontSize} />
					</div>
				)
			}
	
			return result
		}, [])

		const page = Math.ceil(post.length / cols)

		const handlePrev = () => {
			this.setState({
				currentPage: this.state.currentPage - 1
			})
		}

		const handleNext = () => {
			this.setState({
				currentPage: this.state.currentPage + 1
			})
		}

		return (
			<div className="Carousel">
				<div hidden={this.state.currentPage <= 0} >
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
							gridColumnGap: `${gap}px`
						}}
					>
						{itemSetList.map((set, i) => (
							<div
								key={i}
								style={{
									display: 'grid',
									gridTemplateColumns: `repeat(${cols}, 1fr)`,
									gridGap: `${gap}px`
								}}
							>
								{set}
							</div>
						))}
        	</div>
      	</div>
				<div hidden={this.state.currentPage=== page - 1} >
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
