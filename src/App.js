import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  constructor () {
    super();
  
  // you will need a place to store your state in this component.
    this.state = {
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
      ],
      input: " "
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Handlers


  //Allows for text to be added to input
  changeInputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  //Adds text to todo list displayed onscreen
  addTodoHandler = event => {
    event.preventDefault();
    const todos = this.state.todos.slice();
    todos.push({task: this.state.input, completed: false, id: Date.now()});
    this.setState({ todos: todos, input: " " });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList dailyTodos={this.state.todos}/>
        <TodoForm 
          changeInputHandler={this.changeInputHandler}
          input={this.state.input}
          addTodoHandler={this.addTodoHandler}
        />
      </div>
    );
  }
}

export default App;

