import React from "react";
import User from "./User";
import './style.css';
class UserList extends React.Component {
    
    render() {
        const {
            users
        } = this.props;
        return(
            <div className="userbox">

                <div className="msgtitle">Users</div>
                <div className="messages">
                {
                    users.map(function(item, i){
                        return (<User key={i} name={item.name} role={item.role} />)
                    })
                }
                </div>
            </div>
        )
    }
}

export default UserList;