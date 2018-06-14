// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
    return (
        <div>
    <ul>{props.tasks.map(task => <Todo />)}</ul>
    </div>;
    )
};

export default TodoList