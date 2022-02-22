import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/PostWall.styl'

export class PostWall extends Component {
	static propTypes = {
		/** 列的貼文數量*/
		cols: PropTypes.number,
		/** 間距 */
		gap: PropTypes.number,
	}

	static defaultProps = {
		cols: 3,
		gap: 20,
	}

	render() {
		const { cols, gap, post } = this.props;
		return (
			<div style={{
				display: 'grid', 
				gridColumnGap: `${gap}px`, 
				gridRowGap: `${gap}px`, 
				gridTemplateColumns: `repeat(${cols}, 1fr)`
			}}>
				{post.map((t) => 
					<div className="postwall-layout">
						<div className="postwall-title">{t.title}</div>
						<div className="postwall-des-layout">
							<div>
								<span className="postwall-des" style={{fontSize: 20}}>{t.day}</span>
								<span>&nbsp;</span>
								<span className="postwall-des" style={{fontSize: 14}}>DAYS</span>
							</div>
							<div>
								<span className="postwall-des" style={{fontSize: 20}}>{t.like}</span>
								<span>&nbsp;</span>
								<span className="postwall-des" style={{fontSize: 14}}>LIKES</span>
							</div>
						</div>
						<div className="postwall-img-overfit">
							<div className="postwall-cover">
								<img title={t.title} src={t.src} alt={t.tile} className="postwall-img"></img>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default CSSModules(PostWall, styles) 