import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Article.styl'

export class Article extends Component {
	static propTypes = {
		/** 文章資訊 (title, des, src) */
		data: PropTypes.object.isRequired,
		/** 圖片寬度 (min-width: 200px) */
		width: PropTypes.number,
		/** 圖片高度 (min-height: 150px) */
		height: PropTypes.number,
		/** 文章內容區塊高度 (小於圖片高度) */
		desHeight: PropTypes.number,
	}

	static defaultProps = {
		width: 220,
		height: 150,
		desHeight: 80,
	}

	render() {
		const { data, width, height, desHeight } = this.props
		return (
			<div style={{ width: (width + 250) }} className="article-layout">
				<div style={{ width: (width + 250), height: desHeight, marginTop: (height - desHeight) }} className="article-color-block">
					<div className="article-content" style={{ width: (width + 250) }}>
						<img src={data.src} alt="data.title" style={{ width: width, height: height }} className="article-img" />
						<div style={{ width: (width * 1.2) }} className="article-content-des">
							<div className="article-des-title">{data.title}</div>
							<div className="article-des-txt">{data.des}</div>
						</div>
					</div>
				</div>
				<div style={{ width: (width + 250), height: "10px" }} className="article-color-block" />
			</div>

		)
	}
}

export default CSSModules(Article, styles)