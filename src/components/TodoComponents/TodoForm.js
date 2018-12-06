import React from 'react'


class TodoForm extends React.Component {
  constructor(props){
    super (props)
    this.state = {
      inputText:''
    }
  }
  changeHandler = (event) => {
    this.setState({inputText: event.target.value});
  }
  submitHandler = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state.inputText)
    this.setState ({inputText:''})
  }

  render(){
      return (
    <form onSubmit ={this.submitHandler}>
      <input 
      type = "text"
      value = {this.state.inputText}
      onChange = {this.changeHandler}
      />
      <button type="submit">Add Todo</button>
      <button>Clear Todos</button>
    </form>
)
  }
}


// const TodoForm = props => {
//   return (
//     <form>
//       <input type = "text"/>
//       <button type="submit">Add Todo</button>
//       <button>Clear Todos</button>
//     </form>
// )
// }
export default TodoForm;