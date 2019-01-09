import React from "react";
import List from "./components/TodoComponents/TodoList";
import Form from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    let todos = [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      }
    ];

    return (
      <div>
        <List tasks={todos} />
        <Form />
      </div>
    );
  }
}

export default App;
