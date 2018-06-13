import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './app.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super();
    this.state = {
      input: '',
      todos: [
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 3,
          completed: false
        }
      ]
    }
  }
  handleChange = (e) =>{
    e.preventDefault();

    console.log('inputting ' + e.target.value);
    this.setState({
      input: e.target.value
    })
  };
  addTodo = (item) => {
    item.preventDefault();
    let obj= {}
    obj.task = this.state.input;
    obj.id = Math.floor(Date.now() + Math.random());
    obj.completed = false;
    const todo = this.state.todos;
    todo.push(obj);
    this.setState({ todo: todo, input:''  })

  }

  render() {
    return (
      <div className='app'>
        <h2>Todo List: MVP</h2>
        <TodoForm 
            onChange={this.handleChange} 
            input={this.state.input} 
            onSubmit={this.addTodo}

        />
        <TodoList todoList={this.state.todos}/>
      </div>
    );
  }
}

export default App;
