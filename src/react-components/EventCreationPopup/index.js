import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {addEvent} from "../../actions/homePage"

import './style.css';

class EventCreationPopup extends React.Component {
    state = {
        visible: false,
        eventName: "",
        eventColor: ""
    };

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    };

    togglePop = () => {
        this.setState({
            visible: !this.state.visible
        });
    };

    render() {
        return (
            <div className="create-popup" id="popup">
                <h1>Create Event</h1>
                <TextField
                    variant="outlined"
                    name="eventName"
                    label="Name of the Event"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.handleInputChange}
                />
                <br />
                <TextField
                    variant="outlined"
                    name="eventColor"
                    label="Color of thumbnail"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.handleInputChange}
                />
                <br />
                <Button onClick={() => {
                    // Makes call to backend to create new event
                    addEvent(this);
                }}
                className="create_button"
                variant="contained"
                >Create</Button>

                </div>  
        )
    }
}

export default EventCreationPopup;