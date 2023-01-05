import { useSelector } from "react-redux";


function Tasks() {

    const tasks = useSelector(store => store.tasks);

    return (
      <div class='flex flex-col space-y-5 pt-5'>
        <div class='text-4xl'>Your Tasks</div>
        <table>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
            </tr>
            {tasks ? Object.keys(tasks).map(item=>{
            return (
                <tr key={item}>
                    <td>{item}</td>
                    <td>{tasks[item]['title']}</td>
                    <td>{tasks[item]['status']}</td>
                </tr>
            )
            }) : <div>You don't have any tasks</div> }
        </tbody>
        </table>
        
      </div>
    );
}


export default Tasks;