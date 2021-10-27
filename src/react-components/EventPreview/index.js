import React from "react";

import './style.css';

class EventPreview extends React.Component {
    render() {
        const {
            name,
            thumbnail
        } = this.props;

        return(
            <div class="preview">
                <div class="title">{name}</div>
            </div>
        )
    }
}