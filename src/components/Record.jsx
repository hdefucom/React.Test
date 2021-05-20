import React, { Component } from 'react'

export default class Record extends Component {
    render() {
        const { obj, onFinish, onDelete } = this.props
        const { finish, name } = obj
        return (
            <li>
                <input type="checkbox" value={finish} checked={finish} onChange={() => onFinish(obj)} />
                {name}
                <button onClick={() => onDelete(obj)}>删除</button>
            </li>
        )
    }
}
