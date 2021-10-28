import React from "react";
import UserInfoForm from "../UserInfoForm";
import "./styles.css";
// TODO: finish this.
class Register extends React.Component{
    state = {
        name: "",
        userName: "",
        password: "",
        passwordConfirm: "",
        email: "",
        birthday: "",
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
                birthday= {this.state.birthday}
                handleChange= {this.handleChange}
                />
            </div>
            
        );
    }
}


export default Register;