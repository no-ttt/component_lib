import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Card.styl'
import PeopleIcon from '@mui/icons-material/People'
import MenuBookIcon from '@mui/icons-material/MenuBook'

export class Card extends Component {
	static propTypes = {
		/** 卡片標題 */
		title: PropTypes.string,
		/** 卡片代表圖片 */
		src: PropTypes.string.isRequired,
		/** 時間 */
		time: PropTypes.string,
		/** 人數 */
		people: PropTypes.string,
		/** 是否客製化 (只留圖片) */
		custom: PropTypes.bool,
		/** 翻面效果 */
		flip: PropTypes.bool,
		/** 翻面背後文字 */
		flipContent: PropTypes.string,
		/** 卡片寬度 */
		width: PropTypes.number,
		/** 卡片高度 */
		height: PropTypes.number,
		/** 圖片高度 */
		picHeight: PropTypes.number,
	}

	static defaultProps = {
		custom: false,
		flip: false,
		width: 240,
		height: 220,
		picHeight: 140,
	}

	render() {
		const { title, src, time, people, custom, flip, flipContent, width, height, picHeight, children } = this.props;
		return (
			<div className={!flip ? "card-frame" : "card-flip"} style={{ width: width, height: height }}>
				{ !flip 
					?	<div className="card-layout">
							<img src={src} alt={title} height={picHeight} className="card-pic" />
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
					: <div className="card-flip-inner">
							<div className="card-flip-front">
								<div className="card-layout">
									<img src={src} alt={title} height={picHeight} className="card-pic" />
									{ children }
								</div>
							</div>
							<div className="card-flip-back">
								<div className="card-flip-back-bd">
									<MenuBookIcon />
									<div className="card-flip-hr"></div>
									<div className="card-flip-des">{flipContent}</div>
								</div>
							</div>
						</div>
				}
			</div>
		)
	}
}

export default CSSModules(Card, styles)