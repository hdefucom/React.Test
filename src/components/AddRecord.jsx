import React, { Component } from 'react'

export default class AddRecord extends Component {

    render() {
        return (
            <input type='text' onKeyDown={this.keyDown} />
        )
    }

    keyDown = (e) => {
        if (e.keyCode === 13 && e.target.value) {
            if (e.target.value.trim())
                this.props.onAddItem(e.target.value)
            e.target.value = '';

        }
    }

}
