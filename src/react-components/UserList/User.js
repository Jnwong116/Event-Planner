import React from "react";
import './style.css';

class User extends React.Component {
    textFormat(input){
        return input.charAt(0).toUpperCase() + input.substring(1);
    }
    render() {
        const {
            name, role
        } = this.props;

        return(
            <div className="user">
                <div className="name">
                    {this.textFormat(name)}
                </div>

                <span className="role">
                    {this.textFormat(role)}
                </span>
            </div>
        )
    }
}

export default User;