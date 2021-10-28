import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { renderButtons} from "../../actions/adminUserPanel";
// TODO: print buttons
class AdminUserPanel extends React.Component{
    state = {
        users: [
            {id: "1", name: "user1"},
            {id: "2", name: "user2"}
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