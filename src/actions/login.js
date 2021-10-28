// TODO: what is queue
const log = console.log;
export const loginUser = queue => {
    log("logging in");
    const user = {
        username: queue.state.username,
        password: queue.state.password
    }
    if (user.username === "user" && user.password === "user"){
        // login to user page.
        // TODO: set state
        log("is user");
        return 1;
    }
    else if (user.username === "admin" && user.password === "admin"){
        // login to admin page.
        log("is admin");
        return 2;
    }
    else{
        log("wrong");
        return 0;
    }
};