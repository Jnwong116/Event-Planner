import React from "react";
import './style.css';
import deleteIcon from '../../images/delete_icon.png';
import { deleteTask } from "../../actions/eventPage";


class Task extends React.Component {
    textFormat(input){
        return input.charAt(0).toUpperCase() + input.substring(1);
    }
    render() {
        const {
            description, status, eventPage, app, id
        } = this.props;
        //try to make progress user changeable
        return(
            <div className="task">
                    {/* <div className="name">
                        {this.textFormat(user.name)}
                    </div> */}
                    <div>
                        <img src={deleteIcon} alt="delete icon" className="deleteIcon" onClick={() => {deleteTask(eventPage, app, id)}}></img>
                    </div>
                    <p>
                        {description}
                    </p>
                    <p className="progress">
                        {this.textFormat(status)}   
                    </p>
                    
                    {/* <span className="date">
                        {this.textFormat(date)}
                    </span> */}

            </div>
        )
    }
}

export default Task;