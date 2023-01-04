import { connect } from "react-redux";
import { useSelector } from "react-redux";

function Tasks() {

    const todos = useSelector(store => store.tasks);

    return (
      <>
          Tasks
          {JSON.stringify(todos)}
      </>
    );
}


export default Tasks;