import React from 'react';
import Todo from './Todo';
class TodoList extends React.Component {

    render() {
        return(
            <div>
                {
                    this.props.todoList.map((todo) => {
                        return <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed} />;
                    })
                }
            </div>
        )
    }
}

export default TodoList;