import React from 'react';
import './TodoList.css';
import paw from './paw.png';

class TodoList extends React.Component {
  handleDelete() {
    this.props.onDelete(this.props.item);
  }
  render() {
    return (
        <li>
          <div className='todo-item'>
            <span className='item-name'><img src={paw} alt='paw print' width='50' /> {this.props.item} </span>
            <span className='item-remove' onClick={this.handleDelete.bind(this)}> X</span>
          </div>
          </li>
    );
  }
}


export default TodoList;
