import React from "react";
import {Button} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";


/* Component for the Welcome page */
class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
          <h1 className="header">WELCOME</h1>
        <Link className="button-link button1" to={"./../Login"}>
          <Button color="primary"> Login </Button>
        </Link> 
        <Link className="button-link button2" to={"./../Register"}>
          <Button color="primary"> Register </Button>
        </Link> 
        {/* <Link className="button-link button3" to={"./../"}>
          <Button className="button"> Continue as Guest  </Button>
        </Link>  */}
      </div>
    );
  }
}

export default Welcome;
