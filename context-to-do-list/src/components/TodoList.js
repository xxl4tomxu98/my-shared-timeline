import React from 'react';
import Task from './Task';
import TodoContext from '../contexts/TodoContext';

class TodoList extends React.Component {
  // TODO: Access context
  static contextType = TodoContext;
  render() {
    return (
      <ul>
        {Object.values(this.context.tasks).map(task => (
          <Task task={task} key={task.id} deleteTask={this.context.deleteTask} />

        )
        )}
      </ul>
    );
  }
}

export default TodoList;
