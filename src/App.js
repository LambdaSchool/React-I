import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {thingsToDo: []};
  }

  handleInputChange = event => {
    const {thingsToDo} = this.state;
    let newItem = event.target.value; 
    thingsToDo.push(newItem);
    //this.setState({thingsToDo:thingsToDo}); 
    console.log(this.state); 
  }

  handleEnter = event => {
    const {thingsToDo} = this.state;
    // event.target.value.preventDefault()
    // event.preventDefault();
    console.log(this.state);
     
    if(event.keyCode === 13){
      
      thingsToDo.push(event.target.value);
      this.setState({thingsToDo:thingsToDo}) 
      console.log("enter key pressed");
      console.log(this.state)
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <p>{this.state.thingsToDo}</p>
        <TodoList />
        <TodoForm handleInputChange = {this.handleInputChange} handleEnter = {this.handleEnter}/>
        
      </div>
    );
  }
}

export default App;
