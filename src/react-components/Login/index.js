import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
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
  }
  
  render() {

    return (
      <div className="login__content">
        <h1 className="Title">
          Log In
        </h1>
        <form
          className="login"
          method="post"
          onSubmit={this.handleSubmit}
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
            /* TODO: validate. alert if invalid */
          }}
          className="login__button"
          type="submit"
          variant="contained"
        >
          Sign In
        </Button>
        <Link  to={"./../Register"}>
          <Button 
            className="login__button"
            type="submit"
            variant="contained"
          > Register </Button>
        </Link> 
        
      </div>
    );
  }
}

export default Login;
