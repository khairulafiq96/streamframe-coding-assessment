export const ADD_TASK = "ADD_TASK"
export const ADD_CHILDTASK = "ADD_CHILDTASK"
export const EDIT_TASK="EDIT_TASK"

export function addTask(tasks){
    return {
        type : ADD_TASK,
        tasks
    }
}

export function addChildTask(tasks){
    return{
        type : ADD_CHILDTASK,
        tasks
    }
}

export function editTask(tasks){
    return{
        type : EDIT_TASK,
        tasks
    }
}