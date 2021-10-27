import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LoginInput from "../LoginInput"

import "./styles.css";


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
  }
  
  render() {

    return (
      <div className="Login">
        <LoginInput
          name="username"
          value=""
          onChange={this.handleInputChange}
          label="Username"
        />
        <LoginInput
          name="password"
          value=""
          label="Password"
          onChange={this.handleInputChange}
          type="password"
        />

      </div>
    );
  }
}

export default Login;
