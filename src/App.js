import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  //stateful component

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();

    this.state = {
      tasks: [],
      inputText: ''
    };
  }

  changeHandler = event => {
    //event.preventDefault();
    console.log(event.target.name);
    this.setState({[event.target.name] : event.target.value});
  }

  // addTodo = event => {
  //   // this.setState({
  //   //   tasks: [
  //   //     ...this.state.tasks, {id: "", task: "", completed: false}
  //   //   ]
  //   // })
  // }
  
  render() {
    return (
      <div className="main-container">
        <TodoForm formInput={this.state.formInput} inputText={this.state.inputText} changeHandler={this.changeHandler} />
        <TodoList todoList={this.state.tasks} inputText={this.state.inputText}/>
      </div>
    );
  }
}

export default App;
