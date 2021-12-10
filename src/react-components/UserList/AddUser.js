import React from "react";
import { Input, Button } from "reactstrap";
import { addUser } from "../../actions/eventPage";

import './style.css';

class AddUser extends React.Component {
    state={
        user:"",
        role:""
    }
    insertUserWrap = (insertUser)=>{
        let username = document.getElementById('username').value
        let userrole = document.getElementById('userrole').value
        addUser(this.props.eventPage, this.props.app, username, userrole)
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
                            <label>User Name</label>
                            <Input placeholder="Username" variant="outlined" id="username"/>
                            {/* <input id="username" type="text"></input> */}
                        </div>
                        <div>
                            <label>User Role</label>
                            <Input placeholder="User Role" variant="outlined" id="userrole"/>
                            {/* <input id="userrole" type="text"></input> */}
                        </div>
                        <br/>
                        <Button onClick={()=>this.insertUserWrap()}>Add User</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser;