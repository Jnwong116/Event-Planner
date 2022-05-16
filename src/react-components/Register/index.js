import React from "react";
import { Link } from "react-router-dom";

import UserInfoForm from "../UserInfoForm";
import {Button} from "reactstrap";

import {addUser} from "../../actions/register"
//import "./styles.css";
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
        console.log(target.name)
        console.log(target.value)
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    };
    componentDidMount(){
        if(this.props.app.state.currentUser){
            this.props.history.push("/dashboard")
        }
    }
    render() {
        const { app } = this.props

        return(
            <div className="card text-center card-main">
                <div className="card-header header-bg">
                    <div className="profile">
                        <Link  to={"./../login"}>
                        <Button className="userProfile" onClick={()=>{app.setState({dashPage: 0})}}>
                            <span >Login</span>
                        </Button>
                        </Link>
                    </div>
                </div>
            <div className="card-body header-bg">
            <h1 className="Title">Register</h1>
                <UserInfoForm
                name = {this.state.name}
                userName= {this.state.userName}
                email= {this.state.email}
                handleChange= {this.handleChange}
                parent={this}
                />
                <Button
                    onClick={() => {
                        // Checks if the user already exists in the server
                        // If not creates a new user and goes to the next page
                        addUser(this, app)
                    }}
                    className="register_button"
                    variant="contained"
                >Register</Button>
            </div>
            </div>
            
        );
    }
}


export default Register;