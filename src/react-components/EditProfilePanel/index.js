import React from 'react';

import UserInfoForm from './../UserInfoForm';
import Button from "@material-ui/core/Button";
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
    }

    componentDidMount() {
        loadUserInfo(this, this.props)
    }
    
    render() {
        const { app } = this.props;
        console.log(app.state)

        return (
            <div classname="">
                <h1 class="header">Edit Profile</h1>
                <UserInfoForm
                    name = {this.state.userName}
                    password = {this.state.password}
                    passwordConfirm = {this.state.confirmPassword}
                    email = {this.state.email}
                    handleInputChange = {this.handleInputChange}
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
        )
    }
}

export default EditProfile;
