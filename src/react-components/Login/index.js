import React from "react";
import { Link } from "react-router-dom";
//import Button from "@material-ui/core/Button";
import { Button, Input, InputGroup } from "reactstrap"
import TextField from "@material-ui/core/TextField";
import {validateLoginForm, login} from "../../actions/login"

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
  constructor(props) {
    super(props);
    this.props.history.push("/login");
  }

  state = {
    username: "",
    password: "",
    login: ""
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

  componentDidMount(){
    console.log(this.props)
    if(this.props.app.state.currentUser){
      this.props.history.push("/dashboard")
    }
  }
  render() {
    const { history, app } = this.props
    return (
        
      <div className="card text-center card-main">
        <div className="card-header header-bg">
          <div className="profile">
            <Link  to={"./../register"}>
              <Button className="userProfile" onClick={()=>{app.setState({dashPage: 3})}}>
                  <span >Register</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="card-body cardb-bg cyber-border">
          <h1 className="Title">
              Login
          </h1>
        <form>
        
       
        <div className="form-group">
          <Input
            className="UsernameTextfield"
            placeholder="Username"
            variant="outlined"
            name="username"
            label="Username"
            id="outlined"
            defaultValue=""
            margin="normal"
            onChange={this.handleInputChange}
          />
          </div>
          <br />
          <div className="form-group">
          <Input
            className="PasswordTextfield"
            placeholder="Password"
            variant="outlined"
            name="password"
            label="Password"
            id="outlined"
            defaultValue=""
            margin="normal"
            onChange={this.handleInputChange}
            type="password"
          />
        </div>
        <br />
        <Button
          onClick={() => login(this, app)}
          className="button-bg"
          variant="contained"
          disabled={!validateLoginForm(this)}
        >
          Sign In
        </Button>

        </form>
        </div>
      </div>
    );
  }
}

export default Login;
