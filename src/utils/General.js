export function filterTaskId(task){
    return Object.keys(task).filter(item => item != 'parent' && item!='title' && item!='status')
}