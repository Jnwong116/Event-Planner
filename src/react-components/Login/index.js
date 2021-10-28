import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {loginUser, validateLoginForm} from "../../actions/login"
import "./styles.css";
/*TODO: override MUI for better UI*/
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
            if (loginUser(this) === 1){
              window.location.href='/home'
            }
            if (loginUser(this) === 2){
              window.location.href='/adminEventPanel'
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
