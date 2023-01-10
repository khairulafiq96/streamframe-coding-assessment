import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../actions/tasks";
import { editParameter } from "../utils/General";

function EditTaskPopup ({props,visible, onClose, taskId}){

    const [title, setTitle] = useState("");
    const [status,setStatus] = useState("");
    const [parent, setParent] = useState("");
    const [isParent, setIsParent] = useState(false)
    const dispatch = useDispatch();
    const tasks = useSelector(store => store.tasks);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Checking for null form parameters
        if(title && status){
            var obj = {
                //dynamic property
                [taskId] : {
                    title : title,
                    status : status,
                    parent : parent ? parent : taskId,
                }
            }

            dispatch(editTask(obj))
            onClose()
        } else {
            window.alert("Please provide the title and status" )
        }
    }

    useEffect(()=>{
        setTitle(props['title'])
        setStatus(props['status'])
        setParent(props['parent'])
        setIsParent(editParameter(taskId,props['parent']))
    },[])

    return(
       <div className='fixed w-screen h-screen 
                flex items-center justify-center
                inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
        <div className='bg-slate-500 p-5'>
            <div>Edit Task</div>
            <form className='flex flex-col py-5 space-y-2'>
                <div className="flex space-x-4">
                    <label>Title : 
                        <input type="text" name="title" 
                               onChange={e=>setTitle(e.target.value)}
                               value={title}></input>
                    </label>
                    <label htmlFor="status">Status :
                        <select disabled={isParent} name="status" id="status"
                                value={status}
                                onChange={e=>setStatus(e.target.value)}>
                            <option value="">None</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </label>
                    <label htmlFor="parent">Parent :
                        <select disabled={isParent} name="parent" id="parent"
                                value={parent}
                                onChange={e=>setParent(e.target.value)}>
                            <option value="none">None</option>
                            {tasks ? Object.keys(tasks).map(item=>{
                                return(
                                    <option key={item} value={item}>{tasks[item]['title']}</option>
                                )
                            }) : <></>}
                        </select>
                    </label>
                </div>

            </form>
            <div className='flex space-x-5'>
                <button onClick={e=>handleSubmit(e)}>Edit Task</button>
                <button onClick={onClose}> Close</button>
            </div>
            
       </div>
    </div>
    )
}

export default EditTaskPopup;