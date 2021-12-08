import React from "react";
import { Link } from "react-router-dom";
import EventPreview from "./../EventPreview";
import userProfileIcon from './../../images/user.png';
import redX from './../../images/delete_icon.png';
import plus from './../../images/plus.png';
// import EventCreationPopup from "../EventCreationPopup";
//import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {getUser} from "../../actions/homePage"
import {Input, Button} from "reactstrap";
import './style.css';

const log = console.log

let userData = [
    {
        "id": "event1",
        "name": "Event 01",
        "style": "blue",
        "users": ["Bob", "Amy", "Jane"],
        "messages":[
            {
                "sender": "Bob",
                "content": "Bonjour",
                "timestamp": "2021-04-23T00:00:00.000Z"
            },
            {
                "sender": "Amy",
                "content": "How ya doin",
                "timestamp": "2021-04-25T00:00:00.000Z"
            },{
                "sender": "Jane",
                "content": "Noice",
                "timestamp": "2021-04-26T00:00:00.000Z"
            }
        ],
        "tasks": [
            {
                "description": "temp",
                "date":"2021-04-26T00:00:00.000Z",
                "status":"in-progress",
                "user" : 0
            }
        ]
    },
    {
        "id": "event2",
        "name": "Event 02",
        "style": "purple",
        "users": ["Bob", "Amy", "Jane"],
        "messages":[
            {
                "sender": "Bob",
                "content": "Bonjour",
                "timestamp": "2021-04-23T00:00:00.000Z"
            },
            {
                "sender": "Amy",
                "content": "How ya doin",
                "timestamp": "2021-04-25T00:00:00.000Z"
            },{
                "sender": "Jane",
                "content": "Noice",
                "timestamp": "2021-04-26T00:00:00.000Z"
            }
        ]
    },{
        "id": "event3",
        "name": "Event 03",
        "style": "green",
        "users": ["Bob", "Amy", "Jane"],
        "messages":[
            {
                "sender": "Bob",
                "content": "Bonjour",
                "timestamp": "2021-04-23T00:00:00.000Z"
            },
            {
                "sender": "Amy",
                "content": "How ya doin",
                "timestamp": "2021-04-25T00:00:00.000Z"
            },{
                "sender": "Jane",
                "content": "Noice",
                "timestamp": "2021-04-26T00:00:00.000Z"
            }
        ]
    }
    ]

class HomePage extends React.Component {
    state = {
        user: JSON.parse(localStorage.getItem('user')), // Would make call to backend to get the current user
        eventName: "",
        eventColor: ""
    }

    deleteEvent = (id, eventsList) => {
        for (let i = 0; i < eventsList.length; i++) {
            let event = eventsList[i];
            let eventName = event.id;
            if (id === eventName) {
                userData.splice(i, 1)
                // Makes backend call to delete an event from this user's list of events
            }
        }
        
        this.forceUpdate();
    }

    getEvents = () => {
        // Makes backend call to get all events user has access to
        const eventsList = []
        for (let i = 0; i < userData.length; i++) {
            let event = userData[i];
            let id = event.id;
            let name = event.name;
            let backgroundColor = event.style;
            
            eventsList.push({
                id: id,
                name: name,
                backgroundColor: backgroundColor
            })
        }
        return eventsList
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    };

    showPopup = (visibility) => {
        // let popup = document.getElementById('popup');

        // if (!visibility) {
        //     popup.style.visibility = "visible";
        //     visibility = true;
        // }
        // else {
        //     popup.style.visibility = "hidden";
        //     visibility = false;
        // }
        
    }

    addEvent = () => {
        // Makes call to backend to create new event
        userData.push({
            id: this.state.eventName,
            name: this.state.eventName,
            style: this.state.eventColor
        })

        this.forceUpdate();
    }

    componentDidMount() {
        let user = getUser();
        log(user)
    }

    render() {
        const eventsList = this.getEvents();
        let popUpVisible = false;
        return (
            <div> 
                <div className="profile">
                <h1 className="grid-header">Your Events</h1>
                    <Link to={"./../EditProfilePanel"}>
                        <button className="userProfile">
                            <span className="greeting">Hello {this.state.user.username}</span>
                            <img src={userProfileIcon} alt="user profile" className="userIcon"></img>
                        </button>
                    </Link>
                </div>
                
                <div className="container">  
                <div className="row mb-5">  
                    {
                        eventsList.map((item, i) => {
                            return (
                            <div className="col-3">
                                <div className="card pu">
                                    <div className="card-header" style={{
                backgroundColor: item.backgroundColor
            }}>
                                        <button onClick={() => {
                                            this.deleteEvent(item.id, eventsList)
                                        }} className="delete-button">
                                            <img src={redX} alt="Delete button" className="delete-button-icon"></img>
                                        </button>
                                    </div>
                                    <div className="card-body" style={{
                backgroundColor: item.backgroundColor
            }}>
                                <div onClick={() => {
                                    window.location.href='/events/' + item.id;
                                }}>
                                    <EventPreview id={item.id} name={item.name} backgroundColor={item.backgroundColor} />
                                    
                                </div>
                                </div>
                                </div>
                            </div>)
                            
                        })
                    }
                </div>
                

                <div className="row mt-5">
                    <div className="col">
                    <button className="create-button" onClick={() => {
                    this.showPopup(popUpVisible);
                }}>
                        <img src={plus} alt="Create new event button"></img>
                </button>
                <div className="card pu">
                    <div className="card-body pu-body">
                    
                        <h1>Create Event</h1>
                        <Input
                            placeholder="Event Name"
                            variant="outlined"
                            name="eventName"
                            label="Name of the Event"
                            id="outlined"
                            defaultValue=""
                            margin="normal"
                            onChange={this.handleInputChange}
                        />
                        <br />
                        <Input
                            placeholder="Event Color"
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
                            this.addEvent();
                        }}
                        className="create_button btn-sm"
                        variant="contained"
                        >Create</Button>
                    </div>  
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default HomePage;