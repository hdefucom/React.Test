import React, { Component } from 'react'
import Record from './Record'

export default class RecordList extends Component {
    render() {
        return (
            <ul>
                {this.props.list.map(e => <Record
                    key={e.id}
                    obj={e}
                    onDelete={obj => this.props.onDeleteItem(obj)}
                    onFinish={obj => this.props.onFinishItem(obj)}
                />)}
            </ul>
        )
    }


}
