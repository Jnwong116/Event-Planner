import React from "react";

import './style.css';

class UserInfoForm extends React.Component {
    render() {
        const {
            name,
            userName,
            password,
            passwordConfirm,
            email,
            birthday,
            handleChange
        } = this.props;

        return (
            <div>
                <input
                value={name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Enter First and Last Name" />
                <input
                value={userName}
                onChange={handleChange}
                type="text"
                name="userName"
                placeholder="Enter UserName" />
                <input
                value={password}
                onChange={handleChange}
                type="text"
                name="password"
                placeholder="Enter Password" />
                <input
                value={passwordConfirm}
                onChange={handleChange}
                type="text"
                name="passwordConfirm"
                placeholder="Confirm your Password" />
                <input
                value={email}
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Enter your email" />
                <input
                value={birthday}
                onChange={handleChange}
                type="text"
                name="birthday"
                placeholder="Enter your birthday" />
            </div>
        )
    }
}

export default UserInfoForm;