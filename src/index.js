import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import TodoComponent from './TodoComponent';
import './index.css';

const todos = JSON.parse(localStorage.getItem('todos')) || [];

ReactDOM.render(
  <TodoComponent todos={todos}/>,
  document.getElementById('app')
);
