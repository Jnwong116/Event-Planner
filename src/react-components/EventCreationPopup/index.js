import React from "react";
import TextField from "@material-ui/core/TextField";

import './style.css';

class EventCreationPopup extends React.Component {
    state = {
        eventName: ""
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    };

    render() {
        return (
            <div>
                <h1 className="header">Create Event</h1>
                <TextField
                    variant="outlined"
                    name="name"
                    label="Name of the Event"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.handleInputChange}
                />

            </div>
        )
    }
}

export default EventCreationPopup;