import React from "react";
import ReactDom from "react-dom";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      greeting: "Todo List: MVP",
      Todo: []
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <h1>Learn setstate()</h1>
        <h1> Style my Todo list</h1>
      </div>
    );
  }
}

export default App;
