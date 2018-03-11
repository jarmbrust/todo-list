import React, { Component } from 'react';
import ListItems from '../../components/ListItems/ListItems';
import './TodoList.css';

class TodoList extends Component {

    state = {
        listItems: [
            { label: 'Shovel sidewalk', completed: false },
            { label: 'Walk dogs', completed: false },
            { label: 'Write react program', completed: true },
            { label: 'Do dishes', completed: false }
        ]
    }

    addToListHandler = (event) => {
        let listCopy = [...this.state.listItems];
        console.log(listCopy, event);
        listCopy.push({label: event.target.value});
        this.setState({ listItems: listCopy });
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="enter item" onChange={this.addToListHandler} />
                <div className="TodoList">
                    <ListItems listItems={this.state.listItems} />
                </div>
            </div>
        )
    }
}

export default TodoList;