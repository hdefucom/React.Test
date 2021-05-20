import React, { Component } from 'react'

export default class Summary extends Component {

    state = {
        finishall: false
    }

    render() {
        const { list, onFinishAll, onDeleteAll } = this.props;
        const finish = list.filter(r => r.finish).length

        // if (finish == list.length && finish != 0)
        //     this.setState({ finish: true });
        return (
            <div>
                <input type="checkbox" value={this.state.finishall} checked={this.state.finishall} onChange={onFinishAll} />
                总结：已完成{finish}/全部{list.length}
                <button onClick={onDeleteAll}>删除全部</button>
            </div>
        )
    }
}
