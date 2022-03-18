import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/PostWall.styl'

export class PostWall extends Component {
	static propTypes = {
		/** 貼文內容 */
		post: PropTypes.array.isRequired,
		/** 單個貼文寬度 */
		postWidth: PropTypes.number,
		/** 單個貼文高度 */
		postHeight: PropTypes.number,
		/** 列的貼文數量*/
		cols: PropTypes.number,
		/** 間距 */
		gap: PropTypes.number,
		/** 控制遮罩 */
		mask: PropTypes.boolean,
		/** 控制文字 */
		text: PropTypes.boolean
	}

	static defaultProps = {
		postWidth: 280,
		postHeight: 200,
		cols: 3,
		gap: 20,
		mask: true,
		text: true,
	}

	render() {
		const { post, postWidth, postHeight, cols, gap, mask, text } = this.props;
		return (
			<div style={{
				display: 'grid', 
				gridTemplateColumns: `repeat(${cols}, ${postWidth}px)`,
				gridGap: `${gap}px`,
			}}>
				{post.map((t) => 
					<div className="postwall-layout">
						{ text && <div className="postwall-title">{t.title}</div> }
						{ text && 
							<div className="postwall-des-layout">
								<div>
									<span className="postwall-des" style={{ fontSize: 20 }}>{t.day}</span>
									<span>&nbsp;</span>
									<span className="postwall-des" style={{ fontSize: 14 }}>DAYS</span>
								</div>
								<div>
									<span className="postwall-des" style={{ fontSize: 20 }}>{t.like}</span>
									<span>&nbsp;</span>
									<span className="postwall-des" style={{ fontSize: 14 }}>LIKES</span>
								</div>
							</div>
						}
						<div className="postwall-img-overfit" style={{ height: postHeight }}>
							<div className={ mask ? "postwall-cover" : "postwall-no-cover" }>
								<img title={t.title} src={t.src} alt={t.title}
									className="postwall-img"></img>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default CSSModules(PostWall, styles) 