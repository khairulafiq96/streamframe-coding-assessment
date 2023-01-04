import { connect } from "react-redux";
import { useSelector } from "react-redux";


function Tasks() {

    const tasks = useSelector(store => store.tasks);

    return (
      <div class='pt-5'>
        <div class='text-4xl'>Tasks</div>
        <table>
            <tbody>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Status</th>
            </tr>
            {Object.keys(tasks).map(item=>{
            return (
                <tr key={item}>
                    <td>{item}</td>
                    <td>{tasks[item]['title']}</td>
                    <td>{tasks[item]['status']}</td>
                </tr>
            )
        })}
        </tbody>
        </table>
        
      </div>
    );
}


export default Tasks;