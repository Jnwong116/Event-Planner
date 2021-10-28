import React from "react";

import EventPreview from "./../EventPreview";

import './style.css';

class HomePage extends React.Component {
    render() {
        return (
            <div class="grid">
                <h1 class="grid-header">Your Events</h1>
                <EventPreview
                    name="Event 01"
                    backgroundColor="purple"
                />
                <EventPreview
                    name="Event 02"
                    backgroundColor="blue"
                />
                <EventPreview
                    name="Event 03"
                    backgroundColor="red"
                />
                <EventPreview
                    name="Event 04"
                    backgroundColor="brown"
                />
                <EventPreview
                    name="Event 05"
                    backgroundColor="yellow"
                />


            </div>
        )
    }
}

export default HomePage;