import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleTodoInput = (event) => {
    this.setState({newTodo: event.target.value})
  }

  addTodo = (event) => {
    event.preventDefault();
    const todoList = this.state.todos;
    todoList.push(this.state.newTodo);
    this.setState({
      newTodo: '',
      todos: todoList
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input id="test" 
            onChange={this.handleTodoInput}
            placeholder="Add a new todo" 
            value={this.state.newTodo}
          />
        </form>
        {this.state.todos.map((todo, i) => <Todo key={i} index={i} todo={todo} />)}
      </div>
    );
  }
}

export default TodoList;