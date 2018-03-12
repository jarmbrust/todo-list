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
        ],
        newItem: ''
    }

    addToListHandler = () => {
        let listCopy = [...this.state.listItems];
        console.log('>>', listCopy);
        listCopy.push({label: this.state.newItem, completed: this.state.changed});
        this.setState({ listItems: listCopy, newItem: '' });
    }

    enterValueHandler = (event) => {
        console.log(event.target.value);
        this.setState({ newItem: event.target.value});
    }

    checkboxHandler = () => {
        
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="enter item" value= {this.state.newItem} onChange={ this.enterValueHandler }/>
                <button onClick={() => this.addToListHandler()}>Enter</button>
                <div className="TodoList">
                    <ListItems listItems={this.state.listItems} />
                </div>
            </div>
        )
    }
}

export default TodoList;