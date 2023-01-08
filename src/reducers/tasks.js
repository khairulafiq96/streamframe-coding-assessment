import { ADD_TASK } from "../actions/tasks";
import { ADD_CHILDTASK } from "../actions/tasks";
import { EDIT_TASK } from "../actions/tasks";
import { filterTaskId,getParent, searchObj } from "../utils/General";

export default function tasks(state = null, action){
    switch(action.type){
        
        case ADD_TASK:
            return {...state, ...action.tasks}

        case ADD_CHILDTASK:
            //TODO : for selecting all of the ID in create task parent selection,
            //binary tree search DFS/BFS, to search for the parent, and append the values
            //searching in nested object react
            //Check out flatten deep object javascript
            const parentKey = getParent(action.tasks)
            //window.alert(JSON.stringify(getParent(action.tasks)))
            //Get the parent id inside task
            //Append the value of state[parentid] values with the payload (task)

            return {...state, [parentKey] : {...state[parentKey], ...action.tasks}}
        
        case EDIT_TASK:
            
            const taskId = filterTaskId(action.tasks)
            const parentId = getParent(action.tasks)
            //For parent
            if(taskId == parentId){
                return {...state, [taskId] : {...state[taskId], ...action.tasks[taskId]}}
            }  else {
                //For child
                const parentIdState = searchObj(state, taskId)
                //To update the latest parent
                if(parentIdState['parent']!==parentId){
                    window.alert("Deleting item")
                    delete state[parentIdState['parent']][taskId]
                }
                
                return {...state, [parentId] : {...state[parentId],
                                                [taskId] : {
                                                            ...state[parentId][taskId],
                                                            ...action.tasks[taskId]
                                                }}}
            }
           
        default:
            return state
    }
}