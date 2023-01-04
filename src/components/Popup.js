import {useDispatch,useSelector} from 'react-redux'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addTask } from '../actions/tasks';

function Popup({visible, onClose}){

    const [title, setTitle] = useState("");
    const [status,setStatus] = useState("");
    const [parent, setParent] = useState("");
    const dispatch = useDispatch();
    const tasks = useSelector(store => store.tasks);

    const handleSubmit = (e) => {
        e.preventDefault();

        //TODO : Please do not submit form with empty title, status & optional parent

        const unique_id = uuid();
        var obj = {
            //dynamic property
            [unique_id] : {
                title : title,
                status : status,
                parent : parent,
            }
        }
        dispatch(addTask(obj))
        //Closing the popup
        onClose()
    }

    return(
    <div class='fixed w-screen h-screen 
                flex items-center justify-center
                inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
       <div class='bg-slate-500 p-5'>
            <div>Create new task</div>
            <form class='flex flex-col py-5 space-y-2'>
                <div className="flex space-x-4">
                    <label>Title {title}: 
                        <input type="text" name="title" 
                               onChange={e=>setTitle(e.target.value)}
                               value={title}></input>
                    </label>
                    <label htmlFor="status">Status {status} :
                        <select name="status" id="status"
                                value={status}
                                onChange={e=>setStatus(e.target.value)}>
                            <option value="none">None</option>
                            <option value="inprogress">In Progress</option>
                            <option value="done">Done</option>
                            <option value="complete">Complete</option>
                        </select>
                    </label>
                    <label htmlFor="parent">Parent {parent} :
                        <select name="parent" id="parent"
                                value={parent}
                                onChange={e=>setParent(e.target.value)}>
                            <option value="none">None</option>
                            {Object.keys(tasks).map(item=>{
                                return(
                                    <option value={item}>{tasks[item]['title']}</option>
                                )
                            })}
                        </select>
                    </label>
                </div>
                <label>Description : 
                    <input type="text" name="title"></input>
                </label>
            </form>
            <button onClick={e=>handleSubmit(e)}> Create new task</button>
            <button onClick={onClose}> Close</button>
       </div>
    </div>)
}


export default Popup;