import { useSelector } from "react-redux";
import { filterTaskId } from "../utils/General"; 
import React,{ useState } from "react";
import EditTaskPopup from "./EditTaskPopup";
import { searchObj, dependenciesStatus } from "../utils/General";





function Tasks() {

    const tasks = useSelector(store => store.tasks);
    const[displayEditTaskPopup, setDisplayEditTaskPopup]=useState(false)
    const[task, setTask]=useState("")
    const[filter, setFilter]=useState("")

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
      <div className='flex flex-col space-y-5 pt-5'>
        <div className='text-4xl'>Your Tasks</div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th> Status : 
                        <select className='ml-2' name="filter" id="filter"
                                    value={filter}
                                    onChange={e=>setFilter(e.target.value)}>
                                <option value="">All</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Done">Done</option>
                                <option value="Complete">Complete</option>
                        </select>
                    </th>
                    <th>Total/Done/Complete</th>
                </tr>
            </thead>
            <tbody>
            {tasks ? Object.keys(tasks).map(item=>{
                if(filter === "" || (tasks[item]['status']===filter)){
                    return(
                        <React.Fragment key={item}>
                        <tr onClick={()=>editTask(item)}>
                            <td>{item}</td>
                            <td>{tasks[item]['title']}</td>
                            <td>{tasks[item]['status']}</td>
                            <td>{dependenciesStatus(tasks, item)}</td>
                        </tr>
                        {filterTaskId(tasks[item]).map(child=>{
                              if(filter === "" || (tasks[item][child]['status']===filter)){
                                return(
                                    <tr key={child} onClick={()=>editTask(child)}>
                                        <td className='child'>{child}</td>
                                        <td>{tasks[item][child]['title']}</td>
                                        <td>{tasks[item][child]['status']}</td>
                                        <td></td>
                                    </tr>
                                )
                              }
                        })}
                        </React.Fragment>
                    )
                }
            }) : <div className='text-xl'>You don't have any tasks</div> }
        </tbody>
        </table>
        {displayEditTaskPopup ? <EditTaskPopup taskId={task} props={searchObj(tasks,task)} onClose={()=>setDisplayEditTaskPopup(false)} visible={displayEditTaskPopup}></EditTaskPopup> : null}
      </div>
    );
}


export default Tasks;