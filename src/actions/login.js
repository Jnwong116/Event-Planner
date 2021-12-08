import ENV from './../config.js'
const API_HOST = ENV.api_host

const log = console.log

export const validateLoginForm = form => {
    const user = {
        username: form.state.username,
        password: form.state.password
    }
    return user.username.length > 0 || user.password.length > 0;
}

export const login = (loginComp, app) => {
    const request = new Request(`${API_HOST}/`)
}