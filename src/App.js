import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const toDoItems = [
  {
    task: "Test1",
    id: "1",
    completed: false,
  },
];

class App extends React.Component {
  // first let's define our state based on the data structure in toDos
  constructor() {
    super();
    this.state = {
      toDoList: toDoItems,
    };
  }

  // Method that will strike out the ToDos. It will change Completed to TRUE, thereby changing the CSS style, marking it out
  toggleItem = id => {
    const newToDoList = this.state.toDoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      } else {
        return item;
      }
    });
    this.setState({
      toDoList: newToDoList,
    });
  };

  // Method by which we add a new item to the list.
  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      toDoList: [...this.state.toDoList, newItem],
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toDoList={this.state.toDoList} toggleItem={this.toggleItem} />

        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
