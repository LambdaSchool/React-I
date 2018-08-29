import React from 'react';
// import ReactDOM from 'react-dom';

// import Todo from './components/TodoComponents/Todo.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';


class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor()  {
	super();
	this.state = {
	    todos: [],
	    inputText: ""
	};
    }

    addInput = event => {
	event.preventDefault();
	if (this.state.inputText) {
	    this.setState({
		todos: [...this.state.todos, this.state.inputText],
		inputText: ""
	    });
	}
    };

    handleInput = event => {
	this.setState({
	    inputText: event.target.value
	});
    };
    
    render() {
	return (
	    <div>
	      <TodoList todos={this.state.users} />
	      <TodoForm
		addTodo={this.addTodo}
		inputText={this.state.inputText}
		handleInput={this.handleInput}
		/>
	    </div> 
	);
    }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

export default App;
