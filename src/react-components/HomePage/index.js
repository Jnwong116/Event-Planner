import React from "react";
import { Link } from "react-router-dom";
import EventPreview from "./../EventPreview";
import userProfileIcon from './../../images/user.png';
import redX from './../../images/delete_icon.png';
import plus from './../../images/plus.png';
// import EventCreationPopup from "../EventCreationPopup";
//import Button from "@material-ui/core/Button";
import {getUser, addEvent, deleteEvent} from "../../actions/homePage"
import {Input, Button} from "reactstrap";
import './style.css';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/home");
    }
    
    state = {
        user: "",
        eventsList: [],
        eventName: "",
        eventColor: ""
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

    componentDidMount() {
        getUser(this);
    }

    render() {
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
                        this.state.eventsList.map((item, i) => {
                            return (
                            <div className="col-3">
                                <div className="card pu">
                                    <div className="card-header" style={{
                backgroundColor: item.backgroundColor
            }}>
                                        <button onClick={() => {
                                            deleteEvent(this, item._id)
                                        }} className="delete-button">
                                            <img src={redX} alt="Delete button" className="delete-button-icon"></img>
                                        </button>
                                    </div>
                                    <div className="card-body" style={{
                backgroundColor: item.backgroundColor
            }}>
                                <div onClick={() => {
                                    window.location.href='/events/' + item._id;
                                }}>
                                    <EventPreview id={item._id} name={item.name} backgroundColor={item.backgroundColor} />
                                    
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
                            addEvent(this);
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