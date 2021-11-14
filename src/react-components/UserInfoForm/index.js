import React from "react";
import { TextField } from "@material-ui/core";

// import DateMomentUtils from '@date-io/moment';
// import DateFnsUtils from '@date-io/date-fns';

// import {
//   DatePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';


import './style.css';

class UserInfoForm extends React.Component {
  render() {
        // const {
        //     name,
        //     userName,
        //     password,
        //     confirmPassword,
        //     email,
        //     handleChange
        // } = this.props;

        return (
            <div>
                <TextField
                    variant="outlined"
                    name="name"
                    label="First and Last Name"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.props.handleChange}
                />
                <br />
                <TextField
                    variant="outlined"
                    name="userName"
                    label="Username"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.props.handleChange}
                />
                <br />
                <TextField
                    variant="outlined"
                    name="password"
                    label="Password"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.props.handleChange}
                />
                <br />
                <TextField
                    variant="outlined"
                    name="confirmPassword"
                    label="Confirm Password"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.props.handleChange}
                />
                <br />
                <TextField
                    variant="outlined"
                    name="email"
                    label="Email"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.props.handleChange}
                />
            </div>
        )
    }
}

export default UserInfoForm;