import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Progress.styl'
import Rating from '../Rating/Rating'

export class Progress extends Component {
	static propTypes = {
		/** 平均分數 */
		rating: PropTypes.number,
		/** 評論數量 */
		commentNum: PropTypes.number,
		/** 各級數量 (S5 ~ S1) */
		individualRating: PropTypes.array,
	}

	static defaultProps = {
		rating: 5,
		commentNum: 0,
		individualRating: 0
	}

	render() {
		const { rating, commentNum, individualRating } = this.props;
		const ratingTag = ["非常好", "很好", "一般", "有點差", "爛透了"];

		return (
			<div style={{ width: "220px" }}>
				<div className="progress-title-section">
					<div className="progress-title">評論</div>
					<div className="progress-comment-num">{commentNum}則評論</div>
				</div>
				<div className="progress-rating-section">
					<div className="progress-rating">{rating.toFixed(1)}</div>
					<Rating starDefault={rating} max={5} fixed={true} />
				</div>
				<div className="progress-section">
					{ individualRating.map((r, i) => 
						<div key={i} className="progress-individual">
							<label className="progress-label">{ratingTag[i]}</label>
							<progress id={"star-" + (5-i)} value={r} max={commentNum} />
						</div>
					)}
					
				</div>
			</div>
		)
	}
}

export default CSSModules(Progress, styles)