import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Rating.styl'
import StarIcon from '@material-ui/icons/Star'

export class Rating extends Component {
  static propTypes = {
		/** 星星預設值 */
		starDefault: PropTypes.number,
		/** 星星最大值 */
		max: PropTypes.number,
		/** 星星是否固定 */
		fixed: PropTypes.boolean,
		/** 星星大小 */
		size: PropTypes.string,
	}

	static defaultProps = {
		starDefault: 3,
		max: 5,
		fixed: false,
		size: "",
	}

	constructor(props) {
		super(props);
		this.state =  {
			rating: this.props.starDefault,
			hover: this.props.starDefault,
			fixed: this.props.fixed,
		}
	}

	render() {
		const { rating, hover, fixed } = this.state;
		const { max, size } = this.props;
		let starStyle = [];

		if (size === "large") {
			starStyle.push(<StarIcon className="rating-icon" fontSize="large" />)
		} else if (size === "small") {
			starStyle.push(<StarIcon className="rating-icon" fontSize="small" />)
		} else {
			starStyle.push(<StarIcon className="rating-icon" />)
		}
		
			return (
			<div>
				{
					[...Array(max)].map((star, index) => {
						index += 1;
						return (
							<button
								type="button"
								key={index}
								className={index <= (hover || rating) ? "on" : "off"}
								onClick={() => !fixed && this.setState({rating: index})}
								onMouseEnter={() => !fixed && this.setState({hover: index})}
								onMouseLeave={() => !fixed && this.setState({hover: rating})}
							>
								{starStyle}
							</button>
						);
					})
				}
			</div>
		)
	}
}

export default CSSModules(Rating, styles)