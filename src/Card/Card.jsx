import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Card.styl'
import Rating from '../Rating/Rating'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PeopleIcon from '@mui/icons-material/People'

export class Card extends Component {
	static propTypes = {
		/** 標題 */
		title: PropTypes.string,
		/** 代表圖片 */
		src: PropTypes.string.isRequired,
		/** 寬度 (150px~400px) */
		width: PropTypes.number,
		/** 高度 (200px~350px) */
		height: PropTypes.number,
		/** 是否要有翻轉效果 (顯示景點位置) */
		flip: PropTypes.bool,
		/** 景點所在縣市鄉鎮 (mode="spot", flip=true or hover=true) */
		loc: PropTypes.string,
		/** 是否要有 Hover 效果 (mode="spot", 顯示分數和評論則數) */
		hover: PropTypes.bool,
		/** 分數 (mode="spot", hover=true) */
		rating: PropTypes.number,
		/** 評論則數 (mode="spot", hover=true) */
		commentNum: PropTypes.number,
		/** 卡片樣式 (spot / trip) */
		mode: PropTypes.string,
		/** 參與行程的人數 (mode="trip") */
		people: PropTypes.number,
		/** 行程描述 (mode="trip") */
		des: PropTypes.string,
	}

	static defaultProps = {
		width: 240,
		height: 220,
		flip: false,
		hover: false,
		mode: "spot",
		people: 0,
	}

	render() {
		const { title, src, loc, width, height, flip, children, hover, rating, commentNum, mode, people, des } = this.props
		return (
			<div>
				<div className={!flip ? "card-frame" : "card-flip"} style={{ width: width, height: height }} >
					{
						!flip
							? <div className="card-layout">
								{
									hover
										? <div className="card-hint">
											<div className="card-hint-cover" />
											<div className="card-hint-txt">
												<div className="card-loc">
													<LocationOnIcon style={{ color: "white" }} />
													<div style={{ color: "white" }} className="card-loc-txt">{loc}</div>
												</div>
												<div className="card-flip-hr" />
												<div className="card-flip-other">
													<Rating default={rating} max={rating} fixed={true} color="white" />
													<div style={{ fontSize: "12px", marginTop: "10px", color: "white" }}>{rating.toFixed(1)} · {commentNum} 則評論</div>
												</div>
											</div>
											<img src={src} alt={title} className="card-hint-pic" />
										</div>
										: <img src={src} alt={title} className="card-pic" />
								}
								{mode === "spot" && <div style={{ textAlign: "center", fontWeight: "bold" }}>{title}</div>}
								{
									mode === "trip" &&
									<div>
										<div className="card-trip-des">
											<div className="card-trip-title">{title}</div>
											<div className="card-trip-people">
												<PeopleIcon fontSize="small" />
												<div className="card-trip-people-txt">{people}</div>
											</div>
										</div>
										<div className="card-trip-des-txt">{des}</div>
									</div>
								}
							</div>
							: <div className="card-flip-inner">
								<div className="card-flip-front">
									<div className="card-layout">
										<img src={src} alt={title} className="card-pic" />
										<div style={{ textAlign: "center", fontWeight: "bold" }}>
											{title}
										</div>
									</div>
								</div>
								<div className="card-flip-back">
									<div className="card-flip-back-bd">
										<div className="card-loc">
											<LocationOnIcon />
											<div className="card-loc-txt">{loc}</div>
										</div>
										<div className="card-flip-hr" />
										<div className="card-flip-des">
											{children}
										</div>
									</div>
								</div>
							</div>
					}
				</div>
			</div>
		)
	}
}

export default CSSModules(Card, styles)