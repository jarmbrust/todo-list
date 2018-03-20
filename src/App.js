import React, { Component } from 'react';
import './App.css';
import TodoList from './containers/TodoList/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="title">Todo List</p>
        <TodoList />
      </div>
    );
  }
}

export default App;
