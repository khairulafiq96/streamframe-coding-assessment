import { useSelector } from "react-redux";
import { filterTaskId } from "../utils/General"; 
import { useState } from "react";
import EditTaskPopup from "./EditTaskPopup";
import { searchObj } from "../utils/General";





function Tasks() {

    const tasks = useSelector(store => store.tasks);
    const[displayChild,setDisplayChild]=useState(true);
    const[displayEditTaskPopup, setDisplayEditTaskPopup]=useState(false)
    const[task, setTask]=useState("")

    if(displayEditTaskPopup){
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const editTask = (e) =>{
        setTask(e)
        setDisplayEditTaskPopup(true)
        
    }

    return (
      <div class='flex flex-col space-y-5 pt-5'>
        <div class='text-4xl'>Your Tasks</div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th class='right'>Status</th>
                </tr>
            </thead>
            <tbody>
            {tasks ? Object.keys(tasks).map(item=>{
            return (
                <>
                <tr key={item} onClick={()=>editTask(item)}>
                    <td>{filterTaskId(tasks[item]).length > 0 ? 
                        <button class='small' onClick={()=>setDisplayChild(!displayChild)}>&#8595;</button> : null} {JSON.stringify(displayChild)} {item}</td>
                    <td>{tasks[item]['title']}</td>
                    <td class='right'>{tasks[item]['status']}</td>
                </tr>
                {filterTaskId(tasks[item]).map(child=>{
                        return(
                            <tr  onClick={()=>editTask(child)}>
                                <td class='child'>&#x2022; {child}</td>
                                <td>{tasks[item][child]['title']}</td>
                                <td class='right'>{tasks[item][child]['status']}</td>
                            </tr>
                        )
                    })}
                </>
            )
            }) : <div class='text-xl'>You don't have any tasks</div> }
        </tbody>
        </table>
        {displayEditTaskPopup ? <EditTaskPopup taskId={task} props={searchObj(tasks,task)} onClose={()=>setDisplayEditTaskPopup(false)} visible={displayEditTaskPopup}></EditTaskPopup> : null}
      </div>
    );
}


export default Tasks;