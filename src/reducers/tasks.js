import { ADD_TASK } from "../actions/tasks";
import { ADD_CHILDTASK } from "../actions/tasks";
import { EDIT_TASK } from "../actions/tasks";
import { filterTaskId } from "../utils/General";

export default function tasks(state = null, action){
    switch(action.type){
        
        case ADD_TASK:
            return {...state, ...action.tasks}

        case ADD_CHILDTASK:
            //TODO : for selecting all of the ID in create task parent selection,
            //binary tree search DFS/BFS, to search for the parent, and append the values
            //searching in nested object react
            //Check out flatten deep object javascript
            const taskKey = Object.keys(action.tasks)
            window.alert(JSON.stringify(state[action.tasks[taskKey[0]]['parent']]))
            //Get the parent id inside task
            //Append the value of state[parentid] values with the payload (task)

            return {...state, [action.tasks[taskKey[0]]['parent']] : {...state[action.tasks[taskKey[0]]['parent']], ...action.tasks}}
        
        case EDIT_TASK:
            //window.alert(JSON.stringify(action.tasks))
            const parentID = filterTaskId(action.tasks)
            return {...state, [parentID] : {...state[parentID], ...action.tasks[parentID]}}
        default:
            return state
    }
}