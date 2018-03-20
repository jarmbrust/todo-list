import React, { Component } from 'react';
import ListItems from '../../components/ListItems/ListItems';
import './TodoList.css';

class TodoList extends Component {

    state = {
        listItems: {
            'Shovel sidewalk': { completed: false },
            'Walk dogs': { completed: false },
            'Write react program': { completed: true },
            'Do dishes': { completed: false }
        },
        newItem: ''
    }

    addToListHandler = () => {
        if (this.state.newItem.trim() === '') { return; }
        let listCopy = {...this.state.listItems};
        listCopy[this.state.newItem] = { completed: false };
        this.setState({ listItems: listCopy, newItem: '' });
    }

    enterValueHandler = (event) => {
        if (event.key === 'Enter') {
            this.addToListHandler();
        } else {
            this.setState({ newItem: this.state.newItem + event.key });
        }
    }

    checkboxHandler = (event) => {
        const listCopy = {...this.state.listItems};
        listCopy[event].completed = !listCopy[event].completed;
        this.setState({ listItems: listCopy });
    }

    render() {
        return(
            <div className="TodoList">
                <input 
                    type="text" 
                    placeholder="enter item" 
                    value= {this.state.newItem} 
                    onKeyUp={ this.enterValueHandler }
                />
                <button onClick={() => this.addToListHandler()}>Enter</button>
                <div>
                    <ListItems 
                        listItems={this.state.listItems} 
                        checkboxChecked={this.checkboxHandler}
                    />
                </div>
            </div>
        )
    }
}

export default TodoList;