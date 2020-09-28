import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ResetButton from './components/ResetButton';
const App = () => (
  <div>
    <h1>To-do List</h1>
    <TodoForm />
    <ResetButton />
    <TodoList />
  </div>
);

export default App;
