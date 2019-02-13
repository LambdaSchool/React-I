import React from 'react';
import Todo from './components/TodoComponents/Todo'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      task: '',
      id: '',
      completed: false,
    }
  }

  // This event handler will set the task value to something that mirrors what the user has input in the form input field

  handleChanges = event => {
    this.setState({ 
      task: event.target.value,
    });
  };


  // This event handler will add a timestamp to the new task object and add it to the todos array 


  addTask = event => {
    event.preventDefault();
    const newTaskItem = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed,
    };
    this.setState({
      todos: [...this.state.todos, newTaskItem],
      id: Date.now(), // assigned to new array
    });
  };

  render() {
    return (
      <div>
        <Todo 
          handleChanges = {this.handleChanges}
          addTask = {this.addTask}
          task = {this.state.task}
          id = {this.state.id}
          todos = {this.state.todos}
        />
      </div>
    );
  }
}

export default App;
