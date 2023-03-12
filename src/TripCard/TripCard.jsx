import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/TripCard.styl'
import Rating from '../Rating/Rating'
import DeleteIcon from '@material-ui/icons/Delete'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AddIcon from '@mui/icons-material/Add'

export class TripCard extends Component {
	static propTypes = {
		/** 景點名稱 */
		name: PropTypes.string.isRequired,
    /** 景點圖片 */
		src: PropTypes.string.isRequired,
    /** 寬度 */
    width: PropTypes.number,
    /** 高度 */
    height: PropTypes.number,
    /** 景點評分 */
    rating: PropTypes.number,
    /** 景點相關連結 */
    link: PropTypes.string,
    /** 刪除行程卡片 */
    deleteSpot: PropTypes.func,
    /** 添加備註 */
    addRemark: PropTypes.func,
	}

	static defaultProps = {
		width: 420,
		height: 150,
    rating: 0,
	}

	render() {
		const { width, height, name, src, loc, rating, link, deleteSpot, addRemark } = this.props
		return (
			<div className="trip-card-frame" style={{ width: width, height: height }}>
        <img src={src} alt={name} className="trip-card-img" />
        <div style={{ width: "55%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a href={link} target="blank" className="trip-card-title-link">{name}</a>
            <button className="trip-card-delete-btn" onClick={deleteSpot}>
              <DeleteIcon />
            </button>
          </div>
          <Rating default={rating} max={5} isFixed={true} />
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: -5 }}>
            <LocationOnIcon />
            <div className="trip-card-address">{loc}</div>
          </div>
          <button className="trip-card-add-remark" onClick={addRemark}>
            <AddIcon />
            <div>添加備註</div>
          </button>
        </div>
			</div>
		)
	}
}

export default CSSModules(TripCard, styles)