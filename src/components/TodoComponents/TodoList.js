import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  return (
    <div className="TodoList">
      {props.list.map(item => {
        return <Todo item={item} key={item.id} />
      })}
    </div>
  )
}

export default TodoList