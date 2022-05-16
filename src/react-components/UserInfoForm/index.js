import React from "react";
import { Input} from "reactstrap"

// import DateMomentUtils from '@date-io/moment';
// import DateFnsUtils from '@date-io/date-fns';

// import {
//   DatePicker,
//   MuiPickersUtilsProvider,
// } from '@material-ui/pickers';


import './style.css';

class UserInfoForm extends React.Component {
  
    handleChange = () => {
        let username = document.getElementById('username').value
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let confirmPassword = document.getElementById('confirmPassword').value
        
        this.props.parent.setState({
            userName: username,
            password: password,
            confirmPassword: confirmPassword, 
            email: email, 
            name: name
        })
    }
  
    render() {
        const {
            name,
            userName,
            email,
            handleChange,
            parent
        } = this.props;

        return (
            <div>
                <div className="form-group">
                <Input
                    variant="outlined"
                    placeholder="Name"
                    name="name"
                    label="First and Last Name"
                    id="name"
                    defaultValue={this.props.name}
                    margin="normal"
                    onChange={this.handleChange}
                />
                </div>
                <br />
                <div className="form-group">
                <Input
                    variant="outlined"
                    name="userName"
                    placeholder="Username"
                    label="Username"
                    id="username"
                    defaultValue={this.props.userName}
                    margin="normal"
                    onChange={this.handleChange}
                />
                </div>
                <br />
                <div className="form-group">
                <Input
                    variant="outlined"
                    placeholder="Email"
                    name="email"
                    label="Email"
                    id="email"
                    defaultValue={this.props.email}
                    margin="normal"
                    onChange={this.handleChange}
                />
                </div>
                <br />
                <div className="form-group">
                <Input
                    variant="outlined"
                    placeholder="Password"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    defaultValue=""
                    margin="normal"
                    onChange={this.handleChange}
                />
                </div>
                <br />
                <div className="form-group">
                <Input
                    variant="outlined"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                    defaultValue=""
                    type="password"
                    margin="normal"
                    onChange={this.handleChange}
                />
                </div>
                <br />
                
            </div>
        )
    }
}

export default UserInfoForm;