import React from "react";
import User from "./User";
import AddUser from "./AddUser";
import './style.css';
class UserList extends React.Component {
    
    render() {
        let {
            users, deleteUser, insertUser
        } = this.props;
        return(
            <div className="userbox">

                <div className="msgtitle">Users</div>
                <div className="messages">
                {
                    users.map(function(item, i){
                        return (<User  id={i} name={item.name} role={item.role} deleteUser={deleteUser} />)
                    })
                }
                </div>
                <AddUser insertUser={insertUser}/>
            </div>
        )
    }
}

export default UserList;