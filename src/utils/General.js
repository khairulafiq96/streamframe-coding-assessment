export function filterTaskId(task){
    return Object.keys(task).filter(item => item != 'parent' && item!='title' && item!='status')
}

export function searchObj(tasks, target){
    //Recursive method
    //https://stackoverflow.com/questions/52066403/recursive-tree-search-in-a-nested-object-structure-in-javascript
    
    if (tasks[target]){
        //window.alert(JSON.stringify(tasks[target]))
        return tasks[target]
    }

    for (const parent of Object.keys(tasks)){
        //checkings to avoid title, parent & status which returns 0
        if(parent !== 'title' && parent !== 'parent' && parent !== 'status'){
            const found = searchObj(tasks[parent], target)
            if (found){
                return found
            }
        }
    }
}

export function getParent(target){
    const taskKey = Object.keys(target)
    return target[taskKey[0]]['parent']
}

