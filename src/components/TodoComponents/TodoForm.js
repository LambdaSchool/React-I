import React from 'react';

const TodoForm = ({task, addTask, onChange}) => {
    return (
        <div>
            <form onSubmit={addTask.bind(this)}>
                <input 
                    type="text"
                    name="task"
                    placeholder="todo..."
                    value={task}
                    onChange={onChange.bind(this)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
