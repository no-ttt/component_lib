import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Rating.styl'
import StarIcon from '@mui/icons-material/Star'

export class Rating extends Component {
  static propTypes = {
		/** 數量預設值 */
		default: PropTypes.number.isRequired,
		/** 最大值 */
		max: PropTypes.number,
		/** 星星是否固定 */
		isFixed: PropTypes.bool,
		/** 星星大小 (small or large, default: 一般大小) */
		size: PropTypes.string,
		/** 星星顏色 */
		color: PropTypes.string,
		/** 回傳數值 (n) => {} */	
		value: PropTypes.func,
	}

	static defaultProps = {
		max: 5,
		isFixed: false,
		color: "#ffd700",
	}

	constructor(props) {
		super(props);
		this.state =  {
			rating: this.props.default,
			hover: this.props.default,
		}
	}

	setValue = (index) => {
		this.setState ({
			rating: index
		})
		this.props.value(index)
	}

	render() {
		const { rating, hover } = this.state
		const { max, size, isFixed, color } = this.props
		return (
			<div>
				{
					[...Array(max)].map((star, index) => {
						index += 1;
						return (
							<button
								key={index}
								// className={index <= (hover || rating) ? "on" : "off"}
								style={{ color: index <= (hover || rating) ? color : "#ccc" }}
								onClick={() => !isFixed && this.setValue(index)}
								onMouseEnter={() => !isFixed && this.setState({ hover: index })}
								onMouseLeave={() => !isFixed && this.setState({ hover: rating })}
							>
								<StarIcon className="rating-icon" fontSize={size} />
							</button>
						);
					})
				}
			</div>
		)
	}
}

export default CSSModules(Rating, styles)