import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../actions/tasks";

function EditTaskPopup ({props,visible, onClose, taskId}){

    const [title, setTitle] = useState("");
    const [status,setStatus] = useState("");
    const [parent, setParent] = useState("");
    const dispatch = useDispatch();
    const tasks = useSelector(store => store.tasks);

    const handleSubmit = (e) => {
        e.preventDefault();

        var obj = {
            //dynamic property
            [taskId] : {
                title : title,
                status : status,
                parent : parent ? parent : taskId,
            }
        }

        dispatch(editTask(obj))
        
    }

    useEffect(()=>{
        setTitle(props['title'])
        setStatus(props['status'])
        setParent(props['parent'])
    },[])

    return(
       <div class='fixed w-screen h-screen 
                flex items-center justify-center
                inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
        <div class='bg-slate-500 p-5'>
            <div>Edit Task</div>
            {JSON.stringify(props)}
            <form class='flex flex-col py-5 space-y-2'>
                <div className="flex space-x-4">
                    <label>Title {props['title']}: 
                        <input type="text" name="title" 
                               onChange={e=>setTitle(e.target.value)}
                               value={title}></input>
                    </label>
                    <label htmlFor="status">Status {status} :
                        <select name="status" id="status"
                                value={status}
                                onChange={e=>setStatus(e.target.value)}>
                            <option value="">None</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </label>
                    <label htmlFor="parent">Parent {parent} :
                        <select name="parent" id="parent"
                                value={parent}
                                onChange={e=>setParent(e.target.value)}>
                            <option value="none">None</option>
                            {tasks ? Object.keys(tasks).map(item=>{
                                return(
                                    <option value={item}>{tasks[item]['title']}</option>
                                )
                            }) : <></>}
                        </select>
                    </label>
                </div>

            </form>
            <button onClick={e=>handleSubmit(e)}>Edit Task</button>
            <button onClick={onClose}> Close</button>
       </div>
    </div>
    )
}

export default EditTaskPopup;