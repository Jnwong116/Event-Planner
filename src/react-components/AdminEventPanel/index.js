import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { deleteEvent } from "../../actions/adminEventPanelActions";

export const renderButtons = e => {
    const result = []
    for(var i = 0; i < e.state.events.length; i++){
        var id = e.state.events[i].id;
        result.push(<Button> {e.state.events[i].name} </Button>);
        result.push(<Button> Update </Button>);
        result.push(<Button
                        onClick={() =>{
                          deleteEvent(e, id)
                        }
                    }
                    > Delete </Button>);
        result.push(<br></br>);
    }
    return <div> {result} </div>;
}
class AdminEventPanel extends React.Component{
    state = {
        events: [
            {id: "0", name: "eventname1"},
            {id: "1", name: "eventname2"}
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