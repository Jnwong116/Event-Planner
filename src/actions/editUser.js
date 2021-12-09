import ENV from './../config.js'

const API_HOST = ENV.api_host
const log = console.log

export const editUser = (editUser, app) => {
    log(app.state.currentUser)

    const user_id = app.state.currentUser._id;
    const url = `${API_HOST}/users/${user_id}`;
    
    const fields = [
        {"op": "replace", "path": "/username", "value": editUser.state.userName},
        {"op": "replace", "path": "/password", "value": editUser.state.password},
        {"op": "replace", "path": "/name", "value": editUser.state.name},
        {"op": "replace", "path": "/email", "value": editUser.state.email},
    ]

    const request = new Request(url, {
        method: "patch",
        body: JSON.stringify(fields),
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
            alert('Could not edit user')
        }
    })
    .then((json) => {
        app.setState({ currentUser: json })
        window.location.href = "/home"
        return;
    })
    .catch((error) => {
        log(error)
    })
    
}

export const loadUserInfo = (editUser, app) => {
    const user_id = app.state.currentUser._id;
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
        editUser.setState({
            userName: json.username,
            email: json.email,
            name: json.name
        })
    })
    .catch((error) => {
        log(error)
    })


}