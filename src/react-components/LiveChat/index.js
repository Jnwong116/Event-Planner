import React from "react";
import Message from "./Message";
import './style.css';
class LiveChat extends React.Component {
    
    render() {
        const {
            messages
        } = this.props;
        return(
            <div className="chatbox">

                <div className="msgtitle">Messages</div>
                <div className="messages">
                {
                    messages.map(function(item, i){
                        return (<Message key={i} sender={item.sender} content={item.content} timestamp={item.timestamp}/>)
                    })
                }
                </div>
            </div>
        )
    }
}

export default LiveChat;