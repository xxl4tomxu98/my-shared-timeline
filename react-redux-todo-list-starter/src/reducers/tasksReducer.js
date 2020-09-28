import { CREATE_TASK, DELETE_TASK, RESET_TASK_LIST } from "../actions/taskActions";

const tasksReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch(action.type){
    case CREATE_TASK:
      const newTask = { id: action.taskId, message: action.taskMessage };
      newState[action.taskId] = newTask;
      return newState;
    case DELETE_TASK:
      const taskId = action.taskId;
      delete newState[taskId];
      return newState;
    case RESET_TASK_LIST:
      return {};
    default:
      return state;
  }
};

export default tasksReducer;
