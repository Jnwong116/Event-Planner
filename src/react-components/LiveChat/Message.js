import React from "react";
import './style.css';

class Message extends React.Component {
    textFormat(input){
        return input.charAt(0).toUpperCase() + input.substring(1);
    }
    render() {
        const {
            sender, content, timestamp
        } = this.props;

        return(
            <div className="message msg-bg">
                <div className="sender">
                    {this.textFormat(sender)}
                </div>
                <p className="content">
                    {content}
                </p>
                <span className="timestamp">
                    {timestamp}
                </span>
            </div>
        )
    }
}

export default Message;