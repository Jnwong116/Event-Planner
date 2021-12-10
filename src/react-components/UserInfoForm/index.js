import React from "react";
import { TextField } from "@material-ui/core";
import { Button, Input, InputGroup } from "reactstrap"

// import DateMomentUtils from '@date-io/moment';
// import DateFnsUtils from '@date-io/date-fns';

// import {
//   DatePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';


import './style.css';

class UserInfoForm extends React.Component {
  render() {
        const {
            name,
            userName,
            email,
            handleChange
        } = this.props;

        return (
            <div>
                <div className="form-group">
                <Input
                    variant="outlined"
                    placeholder="Name"
                    name="name"
                    label="First and Last Name"
                    id="outlined"
                    defaultValue={this.props.name}
                    margin="normal"
                    onChange={handleChange}
                />
                </div>
                <br />
                <div className="form-group">
                <Input
                    variant="outlined"
                    name="userName"
                    placeholder="Username"
                    label="Username"
                    id="outlined"
                    defaultValue={this.props.userName}
                    margin="normal"
                    onChange={handleChange}
                />
                </div>
                <br />
                <div className="form-group">
                <Input
                    variant="outlined"
                    placeholder="Email"
                    name="email"
                    label="Email"
                    id="outlined"
                    defaultValue={this.props.email}
                    margin="normal"
                    onChange={handleChange}
                />
                </div>
                <br />
                <div className="form-group">
                <Input
                    variant="outlined"
                    placeholder="Password"
                    name="password"
                    label="Password"
                    id="outlined"
                    type="password"
                    defaultValue=""
                    margin="normal"
                    onChange={handleChange}
                />
                </div>
                <br />
                <div className="form-group">
                <Input
                    variant="outlined"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    label="Confirm Password"
                    id="outlined"
                    defaultValue=""
                    type="password"
                    margin="normal"
                    onChange={handleChange}
                />
                </div>
                <br />
                
            </div>
        )
    }
}

export default UserInfoForm;