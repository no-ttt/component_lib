import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Rating.styl'
import StarIcon from '@mui/icons-material/Star'

export class Rating extends Component {
  static propTypes = {
		/** 數量預設值 */
		starDefault: PropTypes.number,
		/** 最大值 */
		max: PropTypes.number,
		/** 星星是否固定 */
		fixed: PropTypes.boolean,
		/** 星星大小 (small / large) */
		size: PropTypes.string,
		/** 回傳數值 */
		value: PropTypes.func,
	}

	static defaultProps = {
		starDefault: 0,
		max: 5,
		fixed: false,
	}

	constructor(props) {
		super(props);
		this.state =  {
			rating: this.props.starDefault,
			hover: this.props.starDefault,
			fixed: this.props.fixed,
		}
	}

	setValue = (index) => {
		this.setState ({
			rating: index
		})
		this.props.value(index)
	}

	render() {
		const { rating, hover, fixed } = this.state;
		const { max, size } = this.props;
		return (
			<div>
				{
					[...Array(max)].map((star, index) => {
						index += 1;
						return (
							<button
								key={index}
								className={index <= (hover || rating) ? "on" : "off"}
								onClick={() => !fixed && this.setValue(index)}
								onMouseEnter={() => !fixed && this.setState({ hover: index })}
								onMouseLeave={() => !fixed && this.setState({ hover: rating })}
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