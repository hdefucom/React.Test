import React, { Component } from 'react'

import AddRecord from './AddRecord'
import RecordList from './RecordList'
import Summary from './Summary'

export default class RecordBoard extends Component {

    state = {
        records: []
    }

    onAddItem = (record) => {
        const { records } = this.state;
        this.setState({ records: [{ id: records.length, name: record, finish: false }, ...records] });
    }
    onDeleteItem = (record) => {
        const { records } = this.state;
        for (var i = 0; i < records.length; i++) {
            if (records[i] === record) {
                records.splice(i--, 1);
                this.setState({ records });
                return;
            }
        }
    }
    onFinishItem = (record) => {
        record.finish = !record.finish
        const { records } = this.state;
        this.setState({ records });
    }

    onDeleteAll = () => {
        this.setState({ records: [] });
    }
    onFinishAll = e => {
        console.log(e.target.value)
        const records = this.state.records.map(r => {
            r.finish = e.target.value;
            return r;
        });
        this.setState({ records: records });
        this.forceUpdate()
    }

    render() {
        return (
            <div style={{ width: '500px', margin: '100px auto', border: '1px solid' }}>
                <AddRecord onAddItem={this.onAddItem} />
                <RecordList
                    list={this.state.records}
                    onDeleteItem={this.onDeleteItem}
                    onFinishItem={this.onFinishItem}
                />
                <Summary
                    list={this.state.records}
                    onDeleteAll={this.onDeleteAll}
                    onFinishAll={this.onFinishAll}
                />
            </div >
        )
    }
}
