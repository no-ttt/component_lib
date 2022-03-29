import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Card.styl'
import PeopleIcon from '@material-ui/icons/People'

export class Card extends Component {
	static propTypes = {
		/** 旅程標題 */
		title: PropTypes.string,
		/** 旅程代表圖片 */
		src: PropTypes.string.isRequired,
		/** 時間 */
		time: PropTypes.string,
		/** 人數 */
		people: PropTypes.string,
		/** 是否客製化 */
		custom: PropTypes.bool,
		/** 卡片寬度 */
		width: PropTypes.number,
		/** 卡片高度 */
		height: PropTypes.number,
		/** 圖片高度 */
		picHeight: PropTypes.number,
	}

	static defaultProps = {
		title: "",
		time: "",
		people: "",
		custom: false,
		width: 280,
		height: 220,
		picHeight: 140,
	}

	render() {
		const { title, src, time, people, custom, width, height, picHeight, children } = this.props;
		return (
			<div className="card-frame" style={{ width: width, height: height }}>
				<div className="card-layout">
					<img src={src} alt={title} width={width-15} height={picHeight} className="card-pic"></img>
					{ !custom
						? <div>
							<div className="card-des">
								<div className="card-title">{title}</div>
								<div className="card-people">
									<PeopleIcon fontSize="small" />
									<div className="card-people-txt">{people}</div>
								</div>
							</div>
							<div className="card-time-txt">{time}</div>
						</div>
						: children
					}
				</div>
			</div>
		)
	}
}

export default CSSModules(Card, styles)