import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../style/Example.styl'

export class Example extends Component {
    static propTypes = {
        /** 文字一*/
        text: PropTypes.string.isRequired,
        /** 文字二*/
        text2: PropTypes.string
    }
    static defaultProps = {
        text2: "it is my model."
    }

    render() {
        const { text, text2 } = this.props;
        return (
            <div className="example">
                { text }, {text2}
            </div>
        )
    }
}

export default CSSModules(Example, styles)