import ENV from './../config.js'

const API_HOST = ENV.api_host
const log = console.log


export const getEventInfo = (eventPage, app, eventID) => {
    const user_id = app.state.currentUser._id;
    const url = `${API_HOST}/users/${user_id}/events/${eventID}`;

    fetch(url)
    .then((res) => {
        if (res.status === 200) {
            return res.json()
        }
        else {
            alert('Could not get event')
        }
    })
    .then((json) => {
        eventPage.setState({
            name: json.name,
            users: json.userRoles,
            messages: json.messages,
            taks: json.tasks
        })
    })
    .catch((error) => {
        log(error)
    })
}

