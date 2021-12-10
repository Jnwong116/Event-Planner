import React from "react";
import User from "./User";
import AddUser from "./AddUser";
import './style.css';

class UserList extends React.Component {
    
    render() {
        let {
            users, popupOpen, eventPage, app
        } = this.props;
        return(
            <div className="userbox">

                <div className="msgtitle">Users</div>
                <div className="messages">
                {
                    users.map(function(item, i){
                        return (<User  id={i} name={item.username} role={item.role} eventPage={eventPage} app={app}/>)
                    })
                }
                </div>{ popupOpen ? 
                <AddUser eventPage={eventPage} app={app}/> : (<div></div>)
                }
            </div>
        )
    }
}

export default UserList;