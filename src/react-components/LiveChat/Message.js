import React from "react";
import './style.css';

class Message extends React.Component {

    render() {
        const {
            sender, content, timestamp
        } = this.props;

        return(
            <div className="message">
                <div className="sender">
                    {sender}
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