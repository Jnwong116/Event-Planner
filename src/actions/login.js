// TODO: what is queue
const log = console.log;
export const loginUser = queue => {
    log("logging in");
    const user = {
        username: queue.state.username,
        password: queue.state.password
    }
    if (user.username === user.password === "user"){
        // login to user page.
        log("is user")
    }
    else if (user.username === user.password === "admin"){
        // login to admin page.
        log("is admin")
    }
};