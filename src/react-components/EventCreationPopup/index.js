import React from "react";
import Button from "@material-ui/core/Button";
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
                <br />
                <TextField
                    variant="outlined"
                    name="color"
                    label="Color of thumbnail"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.handleInputChange}
                />
                <br />
                <Button onClick={() => {
                    // Makes call to backend to create new event
                    
                }}
                className="create_button"
                variant="contained"
                >Create</Button>

            </div>
        )
    }
}

export default EventCreationPopup;