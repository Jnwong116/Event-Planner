import React from "react";

import './style.css';

class EventPreview extends React.Component {
    render() {
        const {
            id,
            name,
        } = this.props;

        return(
                <div className="container">
                <div className="card-text">
                    {name}
                </div>
                <div className="card-body">
                    <div className="preview" id={id}>
                        
                        
                    </div>
                </div>
                </div>
                
        )
    }
}

export default EventPreview;