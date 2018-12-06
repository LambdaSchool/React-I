import React from 'react';
import './components/TodoComponents/Todo.css';
import ToDoList from './components/TodoComponents/TodoList.js';
import {AddButton} from './components/TodoComponents/TodoForm.js';
import {Input} from './components/TodoComponents/TodoForm.js';
import {ClearCompleted} from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      currentInput: '',
    };
  }

  updateState = () => {
    const input = document.querySelector('input');
    let toDoList = this.state.list.slice();
    let currInput = this.state.currentInput;
    if (input.value !== '') {
      toDoList.push({
        task: currInput,
        id: Date.now(),
        completed: false,
      });
    }
    this.setState({list: toDoList});
    input.value = '';
  };

  captureInput = event => {
    this.setState({currentInput: event.target.value});
  };

  completed = event => {
    let theList = this.state.list.slice();
    theList.map(item => {
      if (event.target.innerText === item.task) {
        if (item.completed === false) {
          item.completed = true;
          event.target.classList.add('completed');
          event.target.classList.remove('everythingElse');
        } else if (event.target.innerText === true) {
          item.completed = false;
          event.target.classList.add('everythingElse');
          event.target.classList.remove('completed');
        }
      }
    });
    this.setState({list: theList});
  };

  clear = () => {
    let newList = this.state.list.slice();
    let finalList = newList.filter(item => {
      return item.completed === false;
    });
    this.setState({list: finalList});
    let setList = document.querySelectorAll('li');
    setList.forEach(listItem => {
      listItem.classList.remove('everythingElse');
      listItem.classList.remove('completed');
      listItem.classList.add('everythingElse');
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div
        onKeyPress={event => {
          if (event.key === 'Enter') {
            this.updateState();
          }
        }}>
        <h2>To Do List</h2>
        <ToDoList checked={this.completed} state={this.state.list} />
        <Input placeholder="Enter Your Task Here" input={this.captureInput} />
        <AddButton update={this.updateState} />
        <ClearCompleted clear={this.clear} />
      </div>
    );
  }
}

export default App;
