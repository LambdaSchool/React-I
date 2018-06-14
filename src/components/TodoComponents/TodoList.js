// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {

  if(props.items) {
    return (
      <div> {
          props.items.map((item, index) => {
            return (
                <Todo 
                    key={index}
                    index={index}
                    item={item}
                    handleCompleted={props.handleCompleted}
                    className={!item.completed ? "none" : "completed"}
                />
            );
          })}
      </div>
    );
  } else {
    return null;
  }
}

export default TodoList;