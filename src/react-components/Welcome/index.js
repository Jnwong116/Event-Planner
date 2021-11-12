import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./styles.css";


/* Component for the Welcome page */
class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
          <h1 className="header">WELCOME</h1>
        <Link className="button-link button1" to={"./../Login"}>
          <Button className="button"> Login </Button>
        </Link> 
        <Link className="button-link button2" to={"./../Register"}>
          <Button className="button"> Register </Button>
        </Link> 
        {/* <Link className="button-link button3" to={"./../"}>
          <Button className="button"> Continue as Guest  </Button>
        </Link>  */}
      </div>
    );
  }
}

export default Welcome;
