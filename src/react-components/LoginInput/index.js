import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import "./styles.css";

/* Component for the Input field, specifically for login and register. a wrapper around MUI TextField */
class LoginInput extends React.Component {
  render() {
    const { label, value, onChange, name, type } = this.props;

    return (
        <TextField
          required
          variant = "outlined"
          name={name}
          label={label}
          id="outlined"
          defaultValue={value || ""}
          className="input"
          margin="normal"
          onChange={onChange}
          type={type}
        />
    );
  }
}

export default LoginInput;
