import React from 'react';
import './Todo.css';

const TodoForm = (props) => {
	return (
		<form>
        	       <input
                                type="text"
                                name="input"
                                onChange={props.changeInputHandler}
                                placeholder= "....todo"
                                value={props.input}
        	       />

        	       <button onClick={props.addTodoHandler}>Add Todo</button>
        	       <button>Clear Completed</button>
                </form>
	);
};

export default TodoForm;