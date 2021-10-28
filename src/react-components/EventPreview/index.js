import React from "react";

import './style.css';

class EventPreview extends React.Component {
    render() {
        const {
            name,
            backgroundColor
        } = this.props;

        return(
            <div class="preview"
                style={{
                    backgroundColor: this.props.backgroundColor
                }}>
                <div class="title">{name}</div>
            </div>
        )
    }
}

export default EventPreview;