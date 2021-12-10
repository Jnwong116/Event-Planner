import React from "react";
import './style.css';
import deleteIcon from '../../images/delete_icon.png';
import { deleteUser } from "../../actions/eventPage";

class User extends React.Component {
    textFormat(input){
        return input.charAt(0).toUpperCase() + input.substring(1);
    }

    render() {
        const {
            name, role, eventPage, app
        } = this.props;
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
                    <img src={deleteIcon} alt="delete icon" className="deleteIcon" onClick={() => {deleteUser(eventPage, app, name)}}></img>
                </div>
            </div>
        )
    }
}

export default User;