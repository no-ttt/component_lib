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
	}

	static defaultProps = {
		starDefault: 3,
		max: 5,
	}

	constructor(props) {
		super(props);
		this.state =  {
			rating: this.props.starDefault,
			hover: this.props.starDefault,
		}
	}

	render() {
		const { rating, hover } = this.state;
		const { max } = this.props;
		return (
			<div className="star-rating">
				{
					[...Array(max)].map((star, index) => {
						index += 1;
						return (
							<button
								type="button"
								key={index}
								className={index <= (hover || rating) ? "on" : "off"}
								onClick={() => this.setState({rating: index})}
								onMouseEnter={() => this.setState({hover: index})}
								onMouseLeave={() => this.setState({hover: rating})}
							>
								<StarIcon />
							</button>
						);
					})
				}
			</div>
		)
	}
}

export default CSSModules(Rating, styles)