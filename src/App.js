import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todoData = [
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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
      this.state = {
        todo: todoData
    };
  }
  
  addItem = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm addItem={this.addItem} />
        <TodoList todo={this.state.todo}/>
      </div>
    );
  }
}

export default App;
