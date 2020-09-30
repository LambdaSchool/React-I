import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
  }

  submit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({
      ...this.state,
      newTodo: ""
    })
  }

  onChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({
      ...this.state,
      newTodo: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input 
        type="text"
        name="todo" 
        placeholder="Add New Task Here" 
        value={this.state.newTodo}
        onChange={this.onChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;