import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/DragDropList.styl'
import DeleteIcon from '@material-ui/icons/Delete'

export class DragDropList extends Component {
	static propTypes = {
		/** 所有景點 */
		listItem: PropTypes.array.isRequired,
		/** 框的寬度 */
		width: PropTypes.number,
		/** 框的高度 */
		height: PropTypes.number,
	}

	static defaultProps = {
		width: 250,
		height: 60,
	}

	constructor(props) {
		super(props);
		this.state = {
			list: this.props.listItem
		}
		// 正在拖移的元素
		this.draggingItem = React.createRef();
		// 被取代位置的元素
		this.dragOverItem = React.createRef();
		this.handleDragStart = this.handleDragStart.bind(this);
		this.handleDragEnter = this.handleDragEnter.bind(this);
	}

	handleDragStart = (e, position) => {
		this.draggingItem.current = position;
		console.log("handleDragStart: " + e.target.innerHTML);
	}

	handleDragEnter = (e, position) => {
		this.dragOverItem.current = position;
		console.log("handleDragEnter: " + e.target.innerHTML);
		const listCopy = [...this.state.list];
		console.log("dragging: " + this.draggingItem.current, "drag over: " + this.dragOverItem.current);
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

	render() {
		const { width, height } = this.props;
		return (
			<div>
				{this.state.list.map((item, index) => (
          <div
            onDragStart={(e) => this.handleDragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => this.handleDragEnter(e, index)}
            key={index}
						draggable
						className="dragdroplist-frame"
						style={{width: width, height: height}}
					>
						<div className="dragdroplist-layout">
							<img title={item.title} src={item.src} alt={item.title} className="dragdroplist-img-frame"></img>
							<div>{item.title}</div>
						</div>
						<button className="dragdroplist-btn" 
							onClick={() => this.setState({list: this.state.list.filter(listItem => listItem !== item)})}
						>
							<DeleteIcon />
						</button>
					</div>
				))}
			</div>
		)
	}
}

export default CSSModules(DragDropList, styles)