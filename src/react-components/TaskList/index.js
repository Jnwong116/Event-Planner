import React from "react";
import Task from "./Task";
import './style.css';
class TaskList extends React.Component {
    
    render() {
        const {
            tasks, users, deleteTask
        } = this.props;
        return(
            <div className="userbox">

                <div className="msgtitle">Tasks</div>
                <div className="messages">
                {
                    tasks.map(function(item, i){
                        return (<Task key={i} description={item.description} date={item.date} status={item.status} user={users[item.user]} deleteTask={deleteTask}/>)
                    })
                }
                </div>
            </div>
        )
    }
}

export default TaskList;