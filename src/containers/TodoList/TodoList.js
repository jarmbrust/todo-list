import React, { Component } from 'react';
import ListItems from '../../components/ListItems/ListItems';

class TodoList extends Component {

    state = {
        listItems: [
            { label: 'Shovel sidewalk', completed: false },
            { label: 'Walk dogs', completed: false },
            { label: 'Write react program', completed: true },
            { label: 'Do dishes', completed: false }
        ]
    }

    render() {
        return(
            <div>
                <ListItems listItems={this.state.listItems} />
            </div>
        )
    }
}

export default TodoList;