import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input />
      <button onClick={event => console.log(event)}>Add Todo</button>
      <button onCLick={event => console.log(event)}>Clear Completed</button>
    </form>
  );
}

export default TodoForm;