import React from "react";
import './style.css';

class AddTask extends React.Component {

    insertTaskWrap = (insertUser)=>{
        let tuser = document.getElementById('tuser').value
        let tdesc = document.getElementById('tdesc').value
        let tstatus = document.getElementById('tstatus').value
        this.props.insertTask(tuser, tdesc, tstatus)
    }
    render() {
        const {
            insertTask
        } = this.props;
        return(
            <div className="user">
                <div>
                    <label>Task User</label>
                    <input id="tuser" type="text"></input>
                </div>
                <div>
                     <label>Task Description</label>
                    <input id="tdesc" type="text"></input>
                </div>
                <div>
                     <label>Task Status</label>
                    <input id="tstatus" type="text"></input>
                </div>
                <button onClick={()=>this.insertTaskWrap(insertTask)}>Add Task</button>
            </div>
        )
    }
}

export default AddTask;