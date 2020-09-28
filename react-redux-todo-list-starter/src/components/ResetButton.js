import React from 'react';
import { store } from '../store';
import { resetTaskList } from '../actions/taskActions';

const ResetButton = () => {
  const handleClick = () => {
    store.dispatch(resetTaskList());
  }


  return (
    <button onClick={handleClick}>Reset List</button>

  )
}

export default ResetButton;
