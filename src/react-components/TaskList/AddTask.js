import React from "react";
import { Input, Button } from "reactstrap";
import { addTask } from "../../actions/eventPage";

import './style.css';

class AddTask extends React.Component {
    state = {
        name: "",
        status: "",
        date: ""
    }

    insertTaskWrap = (insertUser)=>{
        let tdesc = document.getElementById('name').value
        let tstatus = document.getElementById('status').value
        let tdate = document.getElementById('date').value
        addTask(this.props.eventPage, this.props.app, tdesc, tstatus, tdate)
    }
    render() {
        const {
            eventPage, app
        } = this.props;
        return(
            <div className="card bg-dark text-white">
                <div className="card-body bg-dark">
                    <div className="user">
                        <div>
                            <label>Task Description</label>
                            <Input placeholder="Task Description" variant="outlined" id="name"/>
                        </div>
                        <div>
                            <label>Task Status</label>
                            <Input placeholder="Status" variant="outlined" id="status"/>
                        </div>
                        <div>
                            <label>Due Date</label>
                            <Input placeholder="Date" variant="outlined" id="date"/>
                        </div>
                        <br/>
                        <Button onClick={()=>this.insertTaskWrap()}>Add Task</Button>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default AddTask;