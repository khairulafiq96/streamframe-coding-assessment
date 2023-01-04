export const ADD_TASK = "ADD_TASK"

export function addTask(tasks){
    return {
        type : ADD_TASK,
        tasks
    }
}