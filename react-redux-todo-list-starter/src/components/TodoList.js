import React from 'react';
import Task from './Task';
import { store } from "../store";
import { deleteTask } from "../actions/taskActions";

class TodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  deleteTask = (id) => {
    store.dispatch(deleteTask(id));
  }

  render() {
    const tasksState = store.getState()
    if (!tasksState) return null;
    else return (
      <ul>
        {Object.values(tasksState).map(task => <Task key={task.id} task={task} deleteTask={this.deleteTask} />)}
      </ul>
    );
  }
}

export default TodoList;
