import React from 'react';
import './AddTodo.css';

class AddTodo extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
    this.refs.newItem.value='';
  }

  render() {
    return (
      <form id='add-todo' onSubmit={this.handleSubmit.bind(this)}>
        <div className='form-group'>
          <input
              type='text' required ref='newItem'
              className='form-control'
              placeholder='Fill your todo list with good stuff!'
          />
          <input
            className='btn btn-info btn-block'
            type='submit'
            value='Add Todo' />
        </div>
      </form>

    )
  }
}

export default AddTodo;
