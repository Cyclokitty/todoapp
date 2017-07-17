import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './TodoComponent.css';

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      todos: this.props.todos
    };
  }

  onAdd(item) {
    const updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  onDelete(item) {
    const updatedTodos = this.state.todos.filter((val, index) => {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  render() {
    const todoItems = this.state.todos.map((todo, index) => {
      return <TodoList item={todo} key={index} onDelete={this.onDelete.bind(this)}/>
    });

    return (
      <div className="TodoComponent">
        <h1>Cyclokitty's Todos!  {this.state.date.toDateString()}</h1>
        <AddTodo onAdd={this.onAdd.bind(this)}/>
        <ul>{todoItems}</ul>
        <h4 className='OwnerInfo'>made with love by <a href='https://cyclokitty.github.io' target='_blank'>Laura Veee</a> &copy; {this.state.date.getFullYear()}</h4>
        <h5 className='OwnerInfo'>source code for this project can be found <a href='https://github.com/Cyclokitty/todoapp' target='_blank'>here</a></h5>
      </div>
    );
  }
}

export default TodoComponent;
