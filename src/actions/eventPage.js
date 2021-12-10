import ENV from './../config.js'

const API_HOST = ENV.api_host
const log = console.log


export const getEventInfo = (eventPage, app) => {
    const eventID = app.app.state.curEvent
    // log(eventID)
    const url = `${API_HOST}/users/events/${eventID}`;

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
            name: json.event.name,
            users: json.event.userRoles,
            messages: json.event.messages,
            tasks: json.event.tasks
        })
    })
    .catch((error) => {
        log(error)
    })
}

export const addUser = (eventPage, app, username, role) => {
    const eventID = app.state.curEvent
    const url = `${API_HOST}/users/events/${eventID}/addUser`;

    const userRole = {
        username: username,
        role: role
    }

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(userRole),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
    .then((res) => {
        if (res.status === 200) {
            return res.json()
        }
        else {
            alert('Could not add user')
        }
    })
    .then((json) => {
        eventPage.setState({
            users: json.event.userRoles
        })
    })
    .catch((error) => {
        log(error)
    })
}

export const deleteUser = (eventPage, app, username) => {
    const eventID = app.state.curEvent
    const url = `${API_HOST}/users/events/${eventID}/deleteUser`;

    let user = {username: username}

    const request = new Request(url, {
        method: "delete",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })


    fetch(request)
    .then((res) => {
        if (res.status === 200) {
            return res.json()
        }
        
        else {
            alert('Could not delete user')
        }
    })
    .then((json) => {
        eventPage.setState({
            users: json.final_event.userRoles
        })
    })
    .catch((error) => {
        log(error)
    })
}

export const addTask = (eventPage, app, name, status, date) => {
    const eventID = app.state.curEvent
    const url = `${API_HOST}/users/events/${eventID}/addTask`;

    const task = {
        name: name,
        status: status,
        date: date
    }

    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(task),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    fetch(request)
    .then((res) => {
        if (res.status === 200) {
            return res.json()
        }
        else {
            alert('Could not add user')
        }
    })
    .then((json) => {
        eventPage.setState({
            tasks: json.event.tasks
        })
    })
    .catch((error) => {
        log(error)
    })
}

export const deleteTask = (eventPage, app, task_id) => {
    const eventID = app.state.curEvent
    const url = `${API_HOST}/users/events/${eventID}/deleteTask/${task_id}`;

    const request = new Request(url, {
        method: "delete",
    })

    fetch(request)
    .then((res) => {
        if (res.status === 200) {
            return res.json()
        }
        
        else {
            alert('Could not delete task')
        }
    })
    .then((json) => {
        log(json)
        eventPage.setState({
            tasks: json.final_event.tasks
        })
    })
    .catch((error) => {
        log(error)
    })
}