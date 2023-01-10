import { ADD_TASK } from "../actions/tasks";
import { ADD_CHILDTASK } from "../actions/tasks";
import { EDIT_TASK } from "../actions/tasks";
import { filterTaskId,getParent, searchObj, updateParentStatus } from "../utils/General";

export default function tasks(state = null, action){
    switch(action.type){
        
        case ADD_TASK:
            return {...state, ...action.tasks}

        case ADD_CHILDTASK:
            const parentKey = getParent(action.tasks)
            var newParentState = {...state, [parentKey] : {...state[parentKey], ...action.tasks}}
            return updateParentStatus(newParentState, parentKey)
        
        case EDIT_TASK:
            
            const taskId = filterTaskId(action.tasks)
            const parentId = getParent(action.tasks)
            //Checking for parent update
            //For parent
            if(taskId == parentId){
                var newParentState = {...state, [taskId] : {...state[taskId], ...action.tasks[taskId]}}
                return updateParentStatus(newParentState, taskId)
            }  else {
                //For child
                const parentIdState = searchObj(state, taskId)
                //To update the latest parent
                if(parentIdState['parent']!==parentId){
                    delete state[parentIdState['parent']][taskId]
                }
                var newParentState = {...state, [parentId] : {...state[parentId],
                                                [taskId] : {
                                                            ...state[parentId][taskId],
                                                            ...action.tasks[taskId]
                                                }}}
                //to update the previous parent status, nested function is called
                return updateParentStatus(updateParentStatus(newParentState, parentIdState['parent']), parentId)
            }
           
        default:
            return state
    }
}