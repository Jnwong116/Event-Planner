import React from "react";
import { Link } from "react-router-dom";
import LiveChat from "./../LiveChat";
import UserList from "../UserList";
import TaskList from "../TaskList";
import { getEvents } from "../../actions/homePage";
import userProfileIcon from './../../images/user.png';

import './style.css';
let userData = [
    {
        "user_id": 0,
        "username":"user",
        "password":"user",
        "role":"general"
    },
    {
        "user_id": 1,
        "username":"user",
        "password":"user",
        "role":"general"
    },
    {
        "user_id": 2,
        "username":"admin",
        "password":"admin",
        "role":"admin"
    }
]
let eventData = [
    {
        "id": "event1",
        "name": "Event 01",
        "style": "blue",
        "users": [
            {
                "name": "user",
                "role": "general"
            },
            {
                "name": "admin",
                "role": "admin"
            },
        ],
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
                "description": "Walk down a road",
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
        "users": [
            {
                "name": "user",
                "role": "general"
            },
            {
                "name": "user1",
                "role": "general"
            },
            {
                "name": "admin",
                "role": "admin"
            },
        ],
        "messages":[
            {
                "sender": "user",
                "content": "Bonjour",
                "timestamp": "2021-04-23T00:00:00.000Z"
            },
            {
                "sender": "admin",
                "content": "How ya doin",
                "timestamp": "2021-04-25T00:00:00.000Z"
            },{
                "sender": "user",
                "content": "Noice",
                "timestamp": "2021-04-26T00:00:00.000Z"
            }
        ],
        "tasks": [
            {
                "description": "Spin in a circle",
                "date":"2021-04-26T00:00:00.000Z",
                "status":"in-progress",
                "user" : 0
            },
            {
                "description": "Jump around ",
                "date":"2021-04-26T00:00:00.000Z",
                "status":"in-progress",
                "user" : 0
            }
        ]
    },{
        "id": "event3",
        "name": "Event 03",
        "style": "green",
        "users": [
            {
                "name": "user",
                "role": "general"
            },
            {
                "name": "admin",
                "role": "admin"
            },
        ],
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
                "description": "Do a handstand",
                "date":"2021-04-26T00:00:00.000Z",
                "status":"in-progress",
                "user" : 0
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
    deleteUser = (id)=>{
        console.log(id)
        let curUsers = this.state.users;
        curUsers.splice(id, 1)

        if(this.state.users.length>0){
            this.setState({
                users: curUsers
            }, ()=>{
                console.log(this.state)
            })
        }
    }
    insertUser = (name, role)=>{
        let curUsers = this.state.users;
        curUsers.push({name:name,role:role})
        console.log(name)
        console.log(role)
        this.setState({users:curUsers})
    }
    deleteTask = (id)=>{
        let curTasks = this.state.tasks;
        curTasks.splice(id, 1)

        if(this.state.tasks.length>0){
            this.setState({
                tasks: curTasks
            }, ()=>{
                console.log(this.state)
            })
        }
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
                    <UserList users={this.state.users} deleteUser={()=>this.deleteUser} insertUser={()=>this.insertUser}/>
                    <TaskList tasks={this.state.tasks} users={this.state.users} deleteTask={()=>this.deleteTask}/>
                    <LiveChat messages={this.state.messages}/>
                    {/* getEvents(this.state.user) */}

                </div>

            </div>
        )
    }
}

export default EventPage;