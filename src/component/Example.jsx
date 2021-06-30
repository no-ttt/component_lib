import React, { Component } from 'react'
import './test.styl'
import PropTypes from 'prop-types'

export default class Example extends Component {
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
            <div className="test styl">
                { text }, {text2}
            </div>
        )
    }
}
