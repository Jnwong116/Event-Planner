import React from "react";
import UserInfoForm from "../UserInfoForm";
import Button from "@material-ui/core/Button";
import "./styles.css";
// TODO: finish this.
class Register extends React.Component{
    state = {
        name: "",
        userName: "",
        password: "",
        passwordConfirm: "",
        email: ""
    };
    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    };

    render() {
        return(
            <div>
                <h1>Register</h1>
                <UserInfoForm
                name = {this.state.name}
                userName= {this.state.userName}
                password= {this.state.password}
                passwordConfirm= {this.state.passwordConfirm}
                email= {this.state.email}
                handleChange= {this.handleChange}
                />
                <Button
                    onClick={() => {
                        // Checks if the user already exists in the server
                        // If not creates a new user and goes to the next page
                        console.log('Registered new user');
                        window.location.href = '/home'
                    }}
                    className="register_button"
                    variant="contained"
                >Register</Button>
            </div>
            
        );
    }
}


export default Register;