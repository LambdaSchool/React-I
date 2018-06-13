import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'
import TodoList from './components/TodoComponents/TodoList.js';

let testArr = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      "todoList": testArr,
      "todoInput": ''
    }
  }

  handleChange (event) {
    this.setState({
      'todoInput': event.target.value
    })
  }

  addTodo (event) {
    let copy = this.state.todoList.slice(0,);
    let newTodo = {
      "task": this.state.todoInput,
      "complete": false,
      "id": Date.now().toString()
    }
    copy.push(newTodo);
    this.setState({
      "todoList": copy,
      "todoInput": ''
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todoList} />
        <TodoForm value={this.state.todoInput} handleChange={this.handleChange} handleClick={this.addTodo} />
      </div>
    );
  }
}

export default App;
