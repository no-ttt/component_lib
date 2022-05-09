import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/PostWall.styl'

export class PostWall extends Component {
	static propTypes = {
		/**  item 詳細資訊 (src...) */
		data: PropTypes.array.isRequired,
		/** 單個 item 寬度 */
		postWidth: PropTypes.number,
		/** 單個 item 高度 */
		postHeight: PropTypes.number,
		/** 列的 item 數量 */
		cols: PropTypes.number,
		/** 間距 */
		gap: PropTypes.number,
		/** 控制圖片遮罩 */
		mask: PropTypes.bool,
	}

	static defaultProps = {
		postWidth: 280,
		postHeight: 200,
		cols: 3,
		gap: 20,
		mask: false,
	}

	render() {
		const { data, postWidth, postHeight, cols, gap, mask, children } = this.props;
		return (
			<div style={{
				display: 'grid', 
				gridTemplateColumns: `repeat(${cols}, ${postWidth}px)`,
				gridGap: `${gap}px`,
			}}>
				{data.map((item, index) => 
					<div key={index}>
						<div className="postwall-layout">
							<div className="postwall-content">
								{ children ? React.cloneElement(children, { data: item, width: postWidth, height: postHeight }) : "" }
							</div>
							<div className="postwall-img-overfit" style={{ height: postHeight }}>
								<div className={ mask ? "postwall-cover" : "postwall-no-cover" }>
									<img src={item.src} alt={item.title} width={postWidth} height={postHeight} className="postwall-img" />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default CSSModules(PostWall, styles) 