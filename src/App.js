import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './components/TodoComponents/Todo.css';

const list = [
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      list: [],
      inputValue: '', 
    };
  }

  addTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      item: this.state.inputValue,
      completed: false,
    };
    console.log(newTodo);
    // debugger;
    this.setState({
      list: [...this.state.list, newTodo],
      inputValue: '',
    });
  }

  handleChanges = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h2>To Do:</h2>
        <TodoList list={this.state.list}/>
        <TodoForm addTodo={this.addTodo} value={this.state.inputValue} handleChanges={this.handleChanges} />
        <button>Delete Completed</button>
      </div>
    );
  }
}

export default App;
