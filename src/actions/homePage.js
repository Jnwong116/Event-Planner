import ENV from './../config.js'

const API_HOST = ENV.api_host
const log = console.log

export const getUser = (homePage, app) => {
    const user_id = app.app.state.currentUser._id;
    const url = `${API_HOST}/users/${user_id}`;

    fetch(url)
    .then((res) => {
        if (res.status === 200) {
            return res.json()
        }
        else {
            alert('Could not get user')
        }
    })
    .then((json) => {
        homePage.setState({
            user: json,
            eventsList: json.events
        })
    })
    .catch((error) => {
        log(error)
    })
}

export const addEvent = (popComp) => {
    const userID = popComp.state.user._id;

    const url = `${API_HOST}/users/${userID}/events`;

    const event = {
        name: popComp.state.eventName,
        style: popComp.state.eventColor,
        messages: [],
        tasks: []
    }

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(event),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
        .then(function (res) {
            if (res.status === 200) {
                return res.json()
            }

            else {
                alert('Could not add event')
            }
        })
        .then((json) => {
            popComp.setState({
                eventsList: json.user.events
            })
        })
        .catch(error => {
            log(error)
        })
}

export const deleteEvent = (homePage, eventID) => {
    const userID = homePage.state.user._id;
    const url = `${API_HOST}/users/${userID}/events/${eventID}`;

    const request = new Request(url, {
        method: "delete"
    })

    fetch(request)
    .then((res) => {
        if (res.status === 200) {
            return res.json()
        }
        
        else {
            alert('Could not delete event')
        }
    })
    .then((json) => {
        homePage.setState({
            eventsList: json.user.events
        })
    })
    .catch((error) => {
        log(error)
    })
}