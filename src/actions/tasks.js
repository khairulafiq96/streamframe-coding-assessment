export const ADD_TASK = "ADD_TASK"
export const ADD_CHILDTASK = "ADD_CHILDTASK"

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