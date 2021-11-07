import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {deleteUser} from "../../actions/adminPanelActions";
import './styles.css';

export const renderButtons = e => {
    const users = {
        users: e.state.users
    }
    const result = []
    for(let i = 0; i < e.state.users.length; i++){
        let key = e.state.users[i].key
        result.push(
            <Link to = {"./../user/" + e.state.users[i].username}>
                <Button>{e.state.users[i].username} </Button>
            </Link>
        ); // hardcoded pages. TODO: user profile pages.
        result.push(<Button> Update </Button>); // go to the update page. update it.
        result.push(<Button
            onClick={() =>{
              deleteUser(e, key)
            }
        }
        > Delete </Button>);
        result.push(<br></br>);
    }
    return <div> {result} </div>;
}
class AdminUserPanel extends React.Component{
    state = {
        seen: false,
        users: [
            {key : 1 , username: "user1", email : "aaa@b.c", name: "aa bb"},
            {key : 2 , username: "u", email : "aaa@b.c", name: "aa bb"},
            {key : 3 , username: "user", email : "aaa@b.c", name: "aa bb"}
        ]
    }

    render() {
        return (
            <div>
                <h1 class="userPTitle">Admin: User Management</h1>
                {renderButtons(this)}
                
                <Link to={"./../AdminEventPanel"}>
                <Button> Manage Events </Button>
                </Link> 
            </div>
        );
    }
}

export default AdminUserPanel;