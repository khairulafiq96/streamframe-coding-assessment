function Popup({visible, onClose}){
    return(
    <div class='fixed w-screen h-screen 
                flex items-center justify-center
                inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
       <div class='bg-slate-500 p-5'>
            <div>Create new task</div>
            <form class='flex flex-col py-5 space-y-2'>
                <div className="flex space-x-4">
                    <label>Title : 
                        <input type="text" name="title"></input>
                    </label>
                    <label for="status">Status :
                        <select  name="status" id="status">
                            <option value="inprogress">In Progress</option>
                            <option value="done">Done</option>
                            <option value="complete">Complete</option>
                        </select>
                    </label>
                    <label for="parent">Parent :
                        <select name="status" id="status">
                        </select>
                    </label>
                </div>
                <label>Description : 
                    <input type="text" name="title"></input>
                </label>
            </form>
            <button> Create new task</button>
            <button onClick={onClose}> Close</button>
       </div>
    </div>)
}

export default Popup;