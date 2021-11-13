import React from "react";
import './style.css';

class AddUser extends React.Component {
    state={
        user:"",
        role:""
    }
    insertUserWrap(insertUser){
        let username = document.getElementById('username').value
        let userrole = document.getElementById('userrole').value

        insertUser(username, userrole)
    }
    render() {
        const {
            insertUser
        } = this.props;
        return(
            <div className="user">
                <div>
                    <label>User Name</label>
                    <input id="username" type="text"></input>
                </div>
                <div>
                     <label>User Role</label>
                    <input id="userrole" type="text"></input>
                </div>
                <button onClick={this.insertUserWrap(insertUser)}>Add User</button>
            </div>
        )
    }
}

export default AddUser;