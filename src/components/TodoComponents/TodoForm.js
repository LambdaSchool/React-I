import React, { Component } from 'react';
import './Todo.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { input } = this.state;
    if (input.length > 0) {
      this.props.handleSubmit(input);
      this.setState({ input: '' });
    }
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  pressEnter = e => {
    let key = e.keyCode || e.which;
    if (key === 13) {
      this.handleSubmit(e);
    }
  };

  handleClick = () => {
    this.setState({ input: '' });
    this.props.clear();
  };

  render() {
    const { input } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="...todo"
          value={input}
          onChange={this.handleChange}
          onKeyPress={input.length < 1 ? null : this.pressEnter}
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </button>
        <svg
          onClick={this.handleClick}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </form>
    );
  }
}

export default TodoForm;
