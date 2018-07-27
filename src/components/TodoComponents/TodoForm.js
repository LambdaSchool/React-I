import React from 'react';


const ToDoForm = (props) => {
     return (
        <form>
            <input placeholder= 'To Do Here' onChange={props.handleInputChange} value={props.value} />
            <button onClick={props.addToDo} > Add To Do! </button>
            <button onClick={props.done} >  Erase </button> 
         </form>

         
    )
}

export default ToDoForm; 