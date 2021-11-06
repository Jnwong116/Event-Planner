import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {deleteUser} from "../../actions/adminPanelActions";
export const renderButtons = e => {
    const users = {
        users: e.state.users
    }
    const result = []
    for(let i = 0; i < e.state.users.length; i++){
        let id = e.state.users[i].id
        result.push(<Button> {e.state.users[i].name} </Button>);
        result.push(<Button> Update </Button>);
        result.push(<Button
            onClick={() =>{
              deleteUser(e, id)
            }
        }
        > Delete </Button>);
        result.push(<br></br>);
    }
    return <div> {result} </div>;
}
class AdminUserPanel extends React.Component{
    state = {
        users: [
            {id: "1", name: "user1"},
            {id: "2", name: "u"},
            {id: "3", name: "user"}
        ]
    }
    render() {
        return (
            <div>
                <h1>Admin: User Management</h1>
                {renderButtons(this)}
                <Link to={"./../AdminEventPanel"}>
                <Button> Manage Events </Button>
                </Link> 
            </div>
        );
    }
}

export default AdminUserPanel;