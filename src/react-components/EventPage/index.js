import React from "react";
import { Link } from "react-router-dom";
import EventPreview from "./../EventPreview";
import { getEvents } from "../../actions/homePage";
import userProfileIcon from './../../images/user.png';

import './style.css';
let eventData = [
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
        "style": "red",
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
class EventPage extends React.Component {
    state = {
        user: localStorage.getItem('user'),
        id:"",
        name:"",
        style:"",
        users:[],
        messages:[],
        tasks:[]
    }

    componentDidMount(){
        this.getEventData();
    }
    getEventData = ()=>{
        let urlParse = window.location.href.split("/")  //gets last part of url
        let urlEventInfo = urlParse[urlParse.length-1]
        console.log(urlEventInfo)
        console.log(eventData)
        let foundEvent = null;
        for(let i=0; i<eventData.length; i++){
            if(eventData[i].id == urlEventInfo){
                foundEvent = eventData[i]
                break
            }
        }
        this.setState({
            name: foundEvent.name,
            id: foundEvent.id,
            style: foundEvent.style,
            users: foundEvent.users,
            messages: foundEvent.messages,
            tasks: foundEvent.tasks
        }, ()=>{
            console.log(this.state)
        })
    }
    render() {
        console.log(this.state)
        const {name} = this.state
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
                    <h1 className="grid-header">You Are Viewing {name}</h1>
                    {/* getEvents(this.state.user) */}

                </div>
            </div>
        )
    }
}

export default EventPage;