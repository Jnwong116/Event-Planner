import ENV from './../config.js'

const API_HOST = ENV.api_host
const log = console.log


export const addUser = (register, app) => {
    const url = `${API_HOST}/users/add`;
    console.log(register)
    if (register.state.password !== register.state.confirmPassword) {
        alert('Passwords do not match')
    }else{

        const user = {
            username: register.state.userName,
            password: register.state.password,
            name: register.state.name,
            email: register.state.email,
            events: []
        }

        // Checks if user already exists
        const check_url = `${API_HOST}/users`;

        fetch(check_url)
        .then((res) => {
            if (res.status === 200) {
                return res.json()
            }
            else {
                alert('Could not get user')
            }
        })
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                let existing_user = json[i];
                
                // Exits if user already exists
                if (existing_user.username === user.username) {
                    alert('User already exists')
                    return 1;
                }
            }
        })
        .then((status) => {
            if (status !== 1) {
                const request = new Request(url, {
                    method: "post",
                    body: JSON.stringify(user),
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json"
                    }
                });
            
                fetch(request)
                .then((res) => {
                    // If user is added successfuly, logs the user in
                    if (res.status === 200) {
                        return res.json()
                    }
                    else {
                        alert('Could not add user')
                    }
                })
                .then((json) => {
                    app.setState({ currentUser: json})
                    log(app.state)
                    window.location.href = "/dashboard"
                    return;
                })
                .catch((error) => {
                    log(error)
                })
            }
        })
        .catch((error) => {
            log(error)
        })
    }
}