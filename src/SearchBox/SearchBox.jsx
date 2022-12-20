import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/SearchBox.styl'
import SearchIcon from '@material-ui/icons/Search'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export class SearchBox extends Component {
	static propTypes = {
		/** 搜尋欄寬度 (min-width: 100px) */
		width: PropTypes.number,
		/** 搜尋欄高度 (min-height: 30px) */
		height: PropTypes.number,
		/** 提示字大小 */
		fontSize: PropTypes.number,
		/** 提示字 */
		hintText: PropTypes.string,
		/** 執行搜尋的 event (return suggestions) */
		setOption: PropTypes.func.isRequired,
		/** 搜尋底下可能會出現的結果 (get option) */
		option: PropTypes.func.isRequired,
		/** 搜尋結果的連結 (get link) */
		link: PropTypes.func.isRequired,
	}

	static defaultProps = {
		width: 400,
		height: 35,
		fontSize: 16,
	}

	constructor(props) {
		super(props)
		this.state = {
			value: "",
			suggestions: [],
			activeSuggestion: -1,
			setIsOnComposition: false,
		}
	}

	handleKeyDown = (e) => {
		const { activeSuggestion, suggestions, setIsOnComposition } = this.state
		if (setIsOnComposition) {
			if (e.key === 'ArrowDown') {
				e.preventDefault()
				this.setState({
					activeSuggestion: (activeSuggestion + 1) % suggestions.length,
				})
			} else if (e.key === 'ArrowUp') {
				e.preventDefault()
				this.setState({
					activeSuggestion: (activeSuggestion - 1) % suggestions.length,
				})
			} else if (e.key === 'Enter') {
				e.preventDefault()
				document.getElementById("link-to").click()
			}
		}
	}

	handleChange = (e) => {
		const { setOption } = this.props
		console.log(e.target.value)
		if (e.target.value === "") {
			this.setState({
				value: "",
				suggestions: [],
				setIsOnComposition: false,
			})
		} else {
			this.setState({
				value: e.target.value,
				suggestions: setOption(e.target.value)
			})
		}
	}

	render() {
		const { width, height, fontSize, hintText, option, link } = this.props
		const { value, suggestions, activeSuggestion } = this.state
		return (
			<div id="searchbox-content" style={{ width: width }}>
				<div className="searchbox-block" style={{ width: (width - 20), height: height }}>
					<SearchIcon className="searchbox-icon" />
					<input type="text" placeholder={hintText} value={option(value)}
						className="searchbox-input" style={{ fontSize: fontSize }}
						onKeyDown={this.handleKeyDown}
						onChange={this.handleChange}
						onCompositionEnd={(e) => { if (e.type === 'compositionend') this.setState({ setIsOnComposition: true }) }}
						onFocus={() => document.getElementById("searchbox-content").style.borderRadius = "10px"}
						onBlur={() => suggestions.length === 0 ? document.getElementById("searchbox-content").style.borderRadius = "30px" : ""}
					/>
				</div>
				{
					suggestions.map((cond, i) => (
						<a key={i} id="link-to" href={link(cond)} 
							className={i === activeSuggestion ? 'searchbox-dropdown-content-option-active' : 'searchbox-dropdown-content-option'}
							onMouseOver={() => this.setState({ activeSuggestion: -1 })}
						>
							<LocationOnIcon fontSize="small" style={{ margin: "0 10px" }} />
							<div style={{ fontSize: fontSize }} className="searchbox-dropdown-link">
								{option(cond)}
							</div>
						</a>
					))
				}
			</div>
		)
	}
}

export default CSSModules(SearchBox, styles)