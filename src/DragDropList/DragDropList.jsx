import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/DragDropList.styl'
import TripCard from '../TripCard/TripCard'

export class DragDropList extends Component {
	static propTypes = {
		/** 所有景點資訊 */
		data: PropTypes.array.isRequired,
		/** 景點名稱 */
		name: PropTypes.func.isRequired,
		/** 景點圖片 */
		src: PropTypes.func.isRequired,
		/** 景點位置 */
		loc: PropTypes.func.isRequired,
		/** 景點相關連結 */
		link: PropTypes.func.isRequired,
		/** 景點評分 */
		rating: PropTypes.func.isRequired,
		/** 框的寬度 */
		width: PropTypes.number,
		/** 框的高度 */
		height: PropTypes.number,
		/** 回傳更改後的陣列 (list) => {} */
		changeList: PropTypes.func,
	}

	static defaultProps = {
		width: 250,
		height: 60,
	}

	constructor(props) {
		super(props);
		this.state = {
			list: this.props.data
		}
		// 正在拖移的元素
		this.draggingItem = React.createRef();
		// 被取代位置的元素
		this.dragOverItem = React.createRef();
	}

	handleDragStart = (e, position) => {
		this.draggingItem.current = position;
		// console.log("handleDragStart: " + e.target.innerHTML);
	}

	handleDragEnter = (e, position) => {
		this.dragOverItem.current = position;
		// console.log("handleDragEnter: " + e.target.innerHTML);
		const listCopy = [...this.state.list];
		// console.log("dragging: " + this.draggingItem.current, "drag over: " + this.dragOverItem.current);
		// 將正在拖移的元素存入 draggingItemContent
		const draggingItemContent = listCopy[this.draggingItem.current];
		// 從 list 刪除正在拖移的元素
		listCopy.splice(this.draggingItem.current, 1);
		// 將 正在拖移的元素(draggingItemContent) 加到要移入的位置
		listCopy.splice(this.dragOverItem.current, 0, draggingItemContent);

		this.draggingItem.current = this.dragOverItem.current;
		this.dragOverItem.current = null;

		this.setState({
			list: listCopy
		})
	}

	handleonDragEnd = () => {
		this.props.changeList(this.state.list)
	}

	handleDelete = (item) => {
		let updateList = this.state.list.filter(listItem => listItem !== item)
		this.setState({
			list: updateList
		})
		this.props.changeList(updateList)
	}

	render() {
		const { width, height, name, src, loc, link, rating } = this.props
		const { list } = this.state
		return (
			<div>
				{list.map((item, index) => (
					<div key={index}
						onDragStart={(e) => this.handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
						onDragEnter={(e) => this.handleDragEnter(e, index)}
						onDragEnd={(e) => this.handleonDragEnd(e, index)}
						draggable
						className="dragdroplist-frame"
						style={{ width: width }}
					>
						<TripCard name={name(item)} src={src(item)} loc={loc(item)} rating={rating(item)} link={link(item)} width={width} heihgt={height} deleteSpot={() => this.handleDelete(item)} />
					</div>
				))}
			</div>
		)
	}
}

export default CSSModules(DragDropList, styles)