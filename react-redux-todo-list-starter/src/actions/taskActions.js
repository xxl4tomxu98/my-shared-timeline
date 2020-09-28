export const CREATE_TASK = "CREATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const RESET_TASK_LIST = 'RESET_TASK_LIST';

export const createTask = (taskMessage) => {
    return { type: CREATE_TASK,
             taskId: (new Date()).getTime(),
             taskMessage: taskMessage
            }
}

export const deleteTask = (taskId) => {
    return {
        type: DELETE_TASK,
        taskId: taskId
    }
}

export const resetTaskList = () => {
    return {
        type: RESET_TASK_LIST,
    }
}
