import React from "react";
import Message from "./Message";
import {Input, Button} from "reactstrap"
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
                    messages.map ? messages.map(function(item, i){
                        return (<Message key={i} sender={item.sender} content={item.content} timestamp={item.timestamp}/>)
                    }) : <div></div>
                }
                </div>
                <div className="form-group">
                <Input
                    variant="outlined"
                    placeholder="Enter message"
                    name="message"
                    label="message"
                    id="outlined"
                    defaultValue=""
                    margin="normal"
                    onChange={this.props.handleChange}
                />
                <Button onClick={this.props.sendMessage}>Send</Button>
                </div>
            </div>
        )
    }
}

export default LiveChat;