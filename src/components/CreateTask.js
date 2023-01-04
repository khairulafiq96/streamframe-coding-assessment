import React, {Component} from "react";
import Popup from "./Popup";

class CreateTask extends Component {

    state = {
        "popup" : false
    }

    render(){

        const {popup} = this.state

        if(popup){
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }

        return (
            <div>
               <button onClick={()=> this.setState({"popup" : true})}>+ Create new Task</button>
               {popup ? <Popup onClose={()=>this.setState({"popup" : false})} visible={popup}></Popup> : <></>}
            </div>
          );
        }
    }
    
  
  export default CreateTask;