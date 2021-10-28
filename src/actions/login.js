
const log = console.log;
export const loginUser = form => {
    log("logging in");
    const user = {
        username: form.state.username,
        password: form.state.password
    }
    if (user.username === "user" && user.password === "user"){

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

export const validateLoginForm = form => {
    const user = {
        username: form.state.username,
        password: form.state.password
    }
    return user.username.length > 0 && user.password.length > 0;
}