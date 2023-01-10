import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addChildTask, addTask } from '../actions/tasks';

function Popup({visible, onClose}){

    const [title, setTitle] = useState(null);
    const [status,setStatus] = useState(null);
    const [parent, setParent] = useState("");
    const dispatch = useDispatch();
    const tasks = useSelector(store => store.tasks);

    const handleSubmit = (e) => {
        e.preventDefault();
        //Checking for null form parameters
        if(title && status){
            const unique_id = uuid();
            var obj = {
                //dynamic property
                [unique_id] : {
                    title : title,
                    status : status,
                    parent : parent ? parent : unique_id,
                }
            }
            if (!parent){
                dispatch(addTask(obj))
                //Closing the popup
                onClose()
            } else {
                dispatch(addChildTask(obj))
                onClose()
            }
        } else {
            window.alert("Please provide the title and status" )
        }

       
        
    }

    return(
    <div className='fixed w-screen h-screen 
                flex items-center justify-center
                inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
       <div className='bg-slate-500 p-5'>
            <div>Create new task</div>
            <form className='flex flex-col py-5 space-y-2'>
                <div className="flex space-x-4">
                    <label>Title : 
                        <input type="text" name="title" 
                               onChange={e=>setTitle(e.target.value)}
                               value={title}></input>
                    </label>
                    <label htmlFor="status">
                        Status 
                        <select name="status" id="status"
                                value={status}
                                onChange={e=>setStatus(e.target.value)}>
                            <option value="">None</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </label>
                    <label htmlFor="parent">Parent :
                        <select name="parent" id="parent"
                                value={parent}
                                onChange={e=>setParent(e.target.value)}>
                            <option value="">None</option>
                            {tasks ? Object.keys(tasks).map(item=>{
                                return(
                                    <option key={item} value={item}>{tasks[item]['title']}</option>
                                )
                            }) : null}
                        </select>
                    </label>
                </div>
            </form>
            <div className='flex space-x-5'>
                <button onClick={e=>handleSubmit(e)}>Create Task</button>
                <button onClick={onClose}> Close</button>
            </div>
       </div>
    </div>)
}


export default Popup;