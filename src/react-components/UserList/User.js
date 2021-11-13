import React from "react";
import './style.css';
import deleteIcon from '../../images/delete_icon.png';

class User extends React.Component {
    textFormat(input){
        return input.charAt(0).toUpperCase() + input.substring(1);
    }

    render() {
        const {
            id, name, role, deleteUser
        } = this.props;
        console.log(id)
        return(
            <div className="user">
                <div>
                    <div className="name">
                        {this.textFormat(name)}
                    </div>

                    <span className="role">
                        {this.textFormat(role)}
                    </span>
                </div>
                <div>
                    <img src={deleteIcon} alt="delete icon" className="deleteIcon" onClick={deleteUser(this.props.id)}></img>
                </div>
            </div>
        )
    }
}

export default User;