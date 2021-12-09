import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import LiveChat from "./../LiveChat";
import UserList from "../UserList";
import TaskList from "../TaskList";
import userProfileIcon from './../../images/user.png';
import { getEventInfo } from "../../actions/eventPage";
import plus from './../../images/plus.png';

import './style.css';

class EventPage extends React.Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);

    }
    state = {
        user: "",
        id:"",
        name:"",
        users:[],
        messages:[],
        tasks:[],
        dropdownOpen: false,
        popupOpen: false
    }
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }
    componentDidMount(){
        this.getEventData();
    }
    componentDidUpdate(){
        console.log(this.props)
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
                <div className="card text-white bg-dark">
                    <div className="card-header bg-dark mb-5">
                        
                        <div className="row">

                        <div className="col userProfile">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                <span className="greeting">Hello {app.state.currentUser.username}</span>
                                <img src={userProfileIcon} alt="user profile" className="userIcon"></img>
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem onClick={()=>{app.setState({dashPage: 0})}}>Back to Dashboard</DropdownItem>
                            {/* <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem> */}
                            </DropdownMenu>
                        </Dropdown>
                            
                            
                        </div>
                    </div>
                    </div>
                    <div className="card-body bg-dark">
                        {/* <div className="profile">
                            <span className="greeting">Hello {this.state.username}</span>
                            <Button className="userProfile" onClick={()=>{app.setState({dashPage: 1})}}>
                                <span className="greeting">Edit Profile</span>
                                <img src={userProfileIcon} alt="user profile" className="userIcon"></img>
                            </Button>
                        </div> */}
                        <div className="grid">
                            <h1 className="grid-header">You Are Viewing {this.state.name}</h1>
                            <UserList popupOpen={this.state.popupOpen} users={this.state.users} deleteUser={()=>this.deleteUser} insertUser={this.insertUser}/>
                            <TaskList tasks={this.state.tasks} users={this.state.users} deleteTask={()=>this.deleteTask}/>
                            <LiveChat messages={this.state.messages}/>
                            {/* getEvents(this.state.user) */}

                        </div>

                    </div>
                    <div className="card-footer bg-dark">
                        <div className="card-footer bg-dark mt-5">
                            <button className="create-button" onClick={() => {
                                this.setState({popupOpen: !this.state.popupOpen})
                                }}>
                                <img src={plus} alt="Create new event button"></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventPage;