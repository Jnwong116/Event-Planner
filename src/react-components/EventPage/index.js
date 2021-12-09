import React from "react";
import { Link } from "react-router-dom";
import LiveChat from "./../LiveChat";
import UserList from "../UserList";
import TaskList from "../TaskList";
import userProfileIcon from './../../images/user.png';
import { getEventInfo } from "../../actions/eventPage";

import './style.css';

class EventPage extends React.Component {
    state = {
        user: "",
        id:"",
        name:"",
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
        let eventID = urlParse[urlParse.length-1]
        console.log(eventID)
        getEventInfo(this, this.props, eventID)
    }
    render() {
        const {app} = this.props;
        return (
            <div>
                <div className="profile">
                    <Link to={"./../EditProfilePanel"}>
                        <button className="userProfile">
                            <span className="greeting">Hello {this.state.username}</span>
                            <img src={userProfileIcon} alt="user profile" className="userIcon"></img>
                        </button>
                    </Link>
                </div>
                <div className="grid">
                    <h1 className="grid-header">You Are Viewing {this.state.name}</h1>
                    <UserList users={this.state.users} deleteUser={()=>this.deleteUser} insertUser={this.insertUser}/>
                    <TaskList tasks={this.state.tasks} users={this.state.users} deleteTask={()=>this.deleteTask}/>
                    <LiveChat messages={this.state.messages}/>
                    {/* getEvents(this.state.user) */}

                </div>

            </div>
        )
    }
}

export default EventPage;