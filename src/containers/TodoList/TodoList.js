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
        let listCopy = {...this.state.listItems};
        listCopy[this.state.newItem] = { completed: false };
        this.setState({ listItems: listCopy, newItem: '' });
    }

    enterValueHandler = (event) => {
        this.setState({ newItem: event.target.value});
    }

    checkboxHandler = (event) => {
        const listCopy = {...this.state.listItems};
        listCopy[event].completed = !listCopy[event].completed;
        this.setState({
            listItems: listCopy
        });
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="enter item" value= {this.state.newItem} onChange={ this.enterValueHandler }/>
                <button onClick={() => this.addToListHandler()}>Enter</button>
                <div className="TodoList">
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