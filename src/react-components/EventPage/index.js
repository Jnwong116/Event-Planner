import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import LiveChat from "./../LiveChat";
import UserList from "../UserList";
import TaskList from "../TaskList";
import userProfileIcon from './../../images/user.png';
import { getEventInfo, loadMessages, sendMessage } from "../../actions/eventPage";
import plus from './../../images/plus.png';

import './style.css';

const log = console.log

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
        popupOpen: false,
        curMessage:"",
        userRoles:[],
        isAdmin: false
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    componentDidMount(){
        this.getEventData();
        
        setInterval(()=>{loadMessages(this, this.props)}, 2000);
        if(this.checkRoles()){
            this.setState({isAdmin: true})
        }

    }
    checkRoles = ()=>{
        console.log(this.props)
        let found = false
        for(let i=0; i<this.state.userRoles.length; i++){
            console.log(this.state.userRoles[i])
            if(this.props.app.state.currentUser.username == this.state.userRoles[i].username && this.state.userRoles[i].role=="Admin"){
                found = true
            }
        }
        return found
    }
    handleChange = event => {
        const target = event.target;
        const value = target.value;
        this.setState({
            curMessage: value
        })
    }
    sendMessage = ()=>{
        sendMessage(this, this.props)
    }
    getEventData = ()=>{
        getEventInfo(this, this.props)
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
                            {this.state.isAdmin?
                            <UserList popupOpen={this.state.popupOpen} users={this.state.users} eventPage={this} app={app}/>
                            :(<div></div>)}<TaskList popupOpen={this.state.popupOpen} tasks={this.state.tasks} users={this.state.users} eventPage={this} app={app}/>
                            <LiveChat sendMessage={this.sendMessage} handleChange={this.handleChange} messages={this.state.messages}/>
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