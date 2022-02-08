import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Post.styl'
import LocationOnIcon from '@material-ui/icons/LocationOn'

export class Post extends Component {
	static propTypes = {
		/** 景點圖片名稱 */
		title: PropTypes.string.isRequired,
		/** 景點圖片連結網址 */
		src: PropTypes.string.isRequired,
		/** 景點位置 */
    addr: PropTypes.string.isRequired,
    /** 圖片寬度 */
    width: PropTypes.number,
    /** 圖片高度 */
    height: PropTypes.number,
	}

	static defaultProps = {
    width: 280,
    height: 220,
	}

	render() {
		const { post, width, height } = this.props;
		let allPost = [];

		for (let i = 0; i < post.length; i++) {
			allPost.push (
        <div>
          <img title={post[i].title} src={post[i].src} alt={post[i].alt} width={width} height={height} className="post-image"></img>
					<div className="post-des">
						<div className="post-name">{post[i].title}</div>
						<div className="post-addr">
							<LocationOnIcon color="action" fontSize="small" />
							<div className="post-addr-txt">{post[i].addr}</div>
						</div>
					</div>
				</div>
			)
		}

		return (
			<div className="post-sort">{allPost}</div>
		)
	}
}

export default CSSModules(Post, styles)