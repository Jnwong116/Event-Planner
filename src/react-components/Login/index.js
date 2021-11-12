import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {validateLoginForm} from "../../actions/login"

import "./styles.css";

let users = [
  {
    "user_id": 0,
    "username":"user",
    "password":"user",
    "role":"general"
  },
  {
    "user_id": 1,
    "username":"admin",
    "password":"admin",
    "role":"admin"
  }
]

/* Component for the Login page */
class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  };

  loginUser = () => {
    const user = {
      username: this.state.username,
      password: this.state.password
    }

    // Makes backend call to check if the user credentials are correct
    for (let i = 0; i < users.length; i++) {
      let check = users[i];

      if (user.username === check.username && user.password === check.password) {
        return check;
      }
    }
    console.log("Incorrect credentials")
    return 0
  };

  
  render() {

    return (
      <div className="login__content">
        <h1 className="Title">
          Login
        </h1>
        <form
          className="login"
        >
         <TextField
          className="UsernameTextfield"
          variant="outlined"
          name="username"
          label="Username"
          id="outlined"
          defaultValue=""
          margin="normal"
          onChange={this.handleInputChange}
        />
        <br />
        <TextField
          className="PasswordTextfield"
          variant="outlined"
          name="password"
          label="Password"
          id="outlined"
          defaultValue=""
          margin="normal"
          onChange={this.handleInputChange}
          type="password"
        />
        </form>
        <br />
        <Button
          onClick={() => {
            let valid = this.loginUser()
            if (valid !== 0) {
              localStorage.setItem('user', JSON.stringify(valid))
              window.location.href='/home'
            }
          }}
          className="login__button"
          variant="contained"
          disabled={!validateLoginForm(this)}
        >
          Sign In
        </Button>
        <Link  to={"./../Register"}>
          <Button 
            className="login__button"
            variant="contained"
          > Register </Button>
        </Link> 
        
      </div>
    );
  }
}

export default Login;
