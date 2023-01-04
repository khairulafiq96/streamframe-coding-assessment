import { ADD_TASK } from "../actions/tasks";

export default function tasks(state = null, action){
    switch(action.type){
        
        case ADD_TASK:
            return {...state, ...action.tasks}

        default:
            return state
    }
}