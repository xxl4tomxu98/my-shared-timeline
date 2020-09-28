import React from 'react';

const Task = (props) => {
  const handleClick = () => {
    props.deleteTask(props.task.id);
  }

  return (
    <li>
      <h1>{props.task.message}</h1>
      <button onClick={handleClick}>Delete Task</button>
    </li>
  );
}

export default Task;
