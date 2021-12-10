import React from "react";
import Task from "./Task";
import './style.css';
import AddTask from "./AddTask";
class TaskList extends React.Component {
    
    render() {
        let {
            popupOpen, tasks, users, eventPage, app
        } = this.props;
        return(
            <div className="userbox">

                <div className="msgtitle">Tasks</div>
                <div className="messages">
                {
                    tasks.map(function(item, i){
                        return (<Task key={i} id={item._id} description={item.name} status={item.status} eventPage={eventPage} app={app}/>)
                    })
                }
                </div>{ popupOpen ? 
                <AddTask eventPage={eventPage} app={app}/> : (<div></div>)
                }
            </div>
        )
    }
}

export default TaskList;