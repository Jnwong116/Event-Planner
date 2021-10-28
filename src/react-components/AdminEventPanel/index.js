import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { renderButtons} from "../../actions/adminEventPanel";
class AdminEventPanel extends React.Component{
    state = {
        events: [
            {id: "1", name: "event1"},
            {id: "2", name: "event2"}
        ]
    }
    render() {
        return (
            <div>
                <h1>Admin: Event Management</h1>
                {renderButtons(this)}
                <Link to={"./../AdminUserPanel"}>
                <Button> Manage Users </Button>
                </Link>
            </div>
        );
    }
}

export default AdminEventPanel;