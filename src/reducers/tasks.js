import { ADD_TASK } from "../actions/tasks";
import { ADD_CHILDTASK } from "../actions/tasks";

export default function tasks(state = null, action){
    switch(action.type){
        
        case ADD_TASK:
            return {...state, ...action.tasks}

        case ADD_CHILDTASK:
            const taskKey = Object.keys(action.tasks)
            window.alert(JSON.stringify(state[action.tasks[taskKey[0]]['parent']]))
            //Get the parent id inside task
            //Append the value of state[parentid] values with the payload (task)

            return {...state, [action.tasks[taskKey[0]]['parent']] : {...state[action.tasks[taskKey[0]]['parent']], ...action.tasks}}

        default:
            return state
    }
}