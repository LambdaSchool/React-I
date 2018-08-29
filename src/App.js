import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  // constructor
  constructor() {
    super();
  }
  // add state 
  state = {
    input: "",
    todos: [
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
    ]
  };

  // addTodo method
  addTodo = event => {
    event.preventDefault();
    const task = this.state.input;
    const id = Date.now();
    const nextTodo = {task: task, id: id, completed: false };
    let todos = this.state.todos;
    todos.push(nextTodo);
    this.setState({todos: todos, input: "" });
  };
  // updateInput method
  updateInput = event => {
    this.setState({ input: event.target.value });
  }
  // TODO: render method
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default App;
