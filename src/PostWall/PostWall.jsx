import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/PostWall.styl'

export class PostWall extends Component {
	static propTypes = {
		/**  item 是否為圖片 */
		isImg: PropTypes.array.bool,
		/**  item 詳細資訊 */
		data: PropTypes.array.isRequired,
		/** 單個 item 寬度 */
		postWidth: PropTypes.number,
		/** 單個內容物高度 */
		postHeight: PropTypes.number,
		/** 列的 item 數量*/
		cols: PropTypes.number,
		/** 間距 */
		gap: PropTypes.number,
		/** 控制圖片遮罩 (isImg=true) */
		mask: PropTypes.bool,
	}

	static defaultProps = {
		isImg: true,
		postWidth: 280,
		postHeight: 200,
		cols: 3,
		gap: 20,
		mask: false,
	}

	render() {
		const { isImg, data, postWidth, postHeight, cols, gap, mask, children } = this.props;
		return (
			<div style={{
				display: 'grid', 
				gridTemplateColumns: `repeat(${cols}, ${postWidth}px)`,
				gridGap: `${gap}px`,
			}}>
				{data.map((item, index) => 
					<div key={index}>
						{ isImg 
							? <div className="postwall-layout">
									<div className="postwall-content">
										{ children ? React.cloneElement(children, { data: item, width: postWidth, height: postHeight }) : "" }
									</div>
									<div className="postwall-img-overfit" style={{ height: postHeight }}>
										<div className={ mask ? "postwall-cover" : "postwall-no-cover" }>
											<img src={item.src} alt={item.title} width={postWidth} height={postHeight} className="postwall-img" />
										</div>
									</div>
								</div>
							: children ? React.cloneElement(children, { data: item, width: postWidth, height: postHeight }) : ""
						}
					</div>
				)}
			</div>
		)
	}
}

export default CSSModules(PostWall, styles) 