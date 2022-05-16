import React from 'react';

import UserInfoForm from './../UserInfoForm';
import { Button } from "reactstrap";
import { editUser, loadUserInfo } from "../../actions/editUser"

import './style.css'

class EditProfile extends React.Component{
    state = {
        userName: "",
        password: "",
        confirmPassword: "",
        email: "",
        name: ""
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })

        console.log('changed')
    }

    componentDidMount() {
        loadUserInfo(this, this.props)
    }
    
    render() {
        const { app } = this.props;

        return (
            <div>
                
                
                <div className="card text-white">
                    <div className="card-header bg-dark">
                        <div className="profile">
                            <Button className="userProfile" onClick={()=>{app.setState({dashPage: 0})}}>
                                <span >Back to Dashboard</span>
                            </Button>
                        </div>
                    </div>
                    <div className="card-body bg-dark">
                        <h1 class="header">Edit Profile</h1>
                        <UserInfoForm
                            name = {this.state.name}
                            email = {this.state.email}
                            userName = {this.state.userName}
                            handleInputChange = {this.handleInputChange}
                            parent = {this}
                        />
                        <Button
                            onClick={() => {
                                // Edits the user's info in the server
                                editUser(this, app)
                            }}
                            className="edit_button"
                            variant="contained"
                        >Save</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfile;
