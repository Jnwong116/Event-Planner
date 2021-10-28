import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

// TODO: print buttons
class AdminEventPanel extends React.Component{
    state = {
        
    }
    render() {
        return (
            <div>
                <h1>Admin: Event Management</h1>
                <Link to={"./../AdminEventPanel"}>
                <Button> Manage Events </Button>
                </Link> 
            </div>
        );
    }
}

export default AdminEventPanel;