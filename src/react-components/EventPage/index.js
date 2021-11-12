import React from "react";
import { Link } from "react-router-dom";
import EventPreview from "./../EventPreview";
import { getEvents } from "../../actions/homePage";
import userProfileIcon from './../../images/user.png';

import './style.css';

class HomePage extends React.Component {
    state = {
        user: localStorage.getItem('user')
    }

    render() {
        return (
            <div>
                <div className="profile">
                    <Link to={"./../EditProfilePanel"}>
                        <button className="userProfile">
                            <span className="greeting">Hello {this.state.user}</span>
                            <img src={userProfileIcon} alt="user profile" className="userIcon"></img>
                        </button>
                    </Link>
                </div>
                <div className="grid">
                    <h1 className="grid-header">Your Events</h1>
                    {/* getEvents(this.state.user) */}
                    <EventPreview
                        name="Event 01"
                        backgroundColor="purple"
                    />
                    <EventPreview
                        name="Event 02"
                        backgroundColor="blue"
                    />
                    <EventPreview
                        name="Event 03"
                        backgroundColor="red"
                    />
                    <EventPreview
                        name="Event 04"
                        backgroundColor="brown"
                    />
                    <EventPreview
                        name="Event 05"
                        backgroundColor="yellow"
                    />
                </div>
            </div>
        )
    }
}

export default HomePage;