import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super();
    this.state = {
      header: "Todo List: MVP",
      tasks: [ "Static Task"],
      task: ""
    };
  }

  render() {
    console.log("render called")
    return (
      <div>
        <h2>{this.state.header}</h2>
        <TodoList />
      </div>
    );
  }
}

export default App;
