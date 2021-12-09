import React from "react";
import { Input, Button } from "reactstrap";
import './style.css';

class AddUser extends React.Component {
    state={
        user:"",
        role:""
    }
    insertUserWrap = (insertUser)=>{
        let username = document.getElementById('username').value
        let userrole = document.getElementById('userrole').value
        console.log(username)
        console.log(userrole)
        console.log(this.props)
        this.props.insertUser(username, userrole)
    }
    render() {
        const {
            insertUser
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
                        <Button onClick={()=>this.insertUserWrap(insertUser)}>Add User</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser;