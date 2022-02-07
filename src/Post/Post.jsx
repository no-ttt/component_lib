import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Post.styl'
import LocationOnIcon from '@material-ui/icons/LocationOn'

export class Post extends Component {
	static propTypes = {
		/** 景點圖片說明 */
		alt: PropTypes.string,
		/** 景點圖片連結網址 */
		src: PropTypes.string.isRequired,
		/** 景點位置 */
		addr: PropTypes.string.isRequired
	}

	static defaultProps = {
	}

	render() {
		const { post } = this.props;
		let allPost = [];

		for (let i = 0; i < post.length; i++) {
			allPost.push (
				<div>
					<img title={post[i].alt} src={post[i].src} alt={post[i].alt} className="post-image"></img>
					<div className="post-des">
						<div className="post-name">{post[i].alt}</div>
						<div className="post-addr">
							<LocationOnIcon color="action" fontSize="small" />
							<div className="post-addr-txt">{post[i].addr}</div>
						</div>
					</div>
				</div>
			)
		}

		return (
			<div>{post}</div>
		)
	}
}

export default CSSModules(Post, styles)