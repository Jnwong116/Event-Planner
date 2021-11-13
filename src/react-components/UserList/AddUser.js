import React from "react";
import './style.css';

class AddUser extends React.Component {
    state={
        user:"",
        role:""
    }
    /*changeName(event){
        this.setState({user:event.target.value})
    }
    changeRole(event){
        this.setState({role:event.target.value})
    }*/
    render() {
        const {
            insertUser
        } = this.props;
        return(
            <div className="user">
                <div>
                    <label>User Name</label>
                    <input id="username" type="text" /*value={this.state.user} onChange={this.changeName}*/></input>
                </div>
                <div>
                     <label>User Role</label>
                    <input id="userrole" type="text" /*value={this.state.role} onChange={this.changeRole}*/></input>
                </div>
                <button onClick={insertUser(document.getElementById('username'), document.getElementById('userrole'))}>Add User</button>
            </div>
        )
    }
}

export default AddUser;