import React from 'react';
import {ToDoInput, ToDoButton, ClearCompletedButton} from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const Todos=[];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state={
      list: Todos,
      savedList: localStorage.getItem('taskListItems')
    }
  }
  addTodos=()=>{
    if (document.querySelector('.input-field').value.length>=1){
      const list=this.state.list.slice(0);
      list.push({'task': document.querySelector('.input-field').value, 'id':Date.now(),'completed':false});
      this.setState({list:list},localStorage.setItem('taskListItems',JSON.stringify(this.state.list)));
      document.querySelector('.input-field').value='';
    } 
  }
  componentDidMount() {
    console.log(this.state.savedList)
    if (this.state.savedList) {
      this.setState({list:JSON.parse(this.state.savedList)});
    }
  }
 
  updateTaskStatus=event=>{
    const list=this.state.list.slice(0);
    const task=event.target.textContent;
    for (let i=0,n=list.length; i<n; i++) {
      if (list[i]['task']===task){
        list[i]['completed']=!(list[i]['completed']);
        list[i]['completed']===true ? event.target.classList.add('completed'):event.target.classList.remove('completed');
      }
    }
    this.setState({list:list},localStorage.setItem('taskListItems',JSON.stringify(this.state.list)));;
  }
  removeCompleted=()=>{
    let list=this.state.list.slice(0);
    list=list.filter((e)=>e.completed===false);
    this.setState({list:list},localStorage.setItem('taskListItems',JSON.stringify(this.state.list)));
  }
  render() {
    return (
      <div className='tasklist'>
        <h1>Task List</h1>
        <div className='input' onKeyPress={ (e) => {if (e.key === 'Enter') {this.addTodos()}}}><ToDoInput/></div>
        <div className="waves-effect waves-light btn ccbtn" onClick={this.removeCompleted}><ClearCompletedButton /></div>
        <div className="waves-effect waves-light btn todobtn" onClick={this.addTodos}><ToDoButton /></div>
        <div onClick={this.updateTaskStatus}><TodoList taskProp={this.state.list} /></div>
      </div>
    );
  }
}

export default App;
