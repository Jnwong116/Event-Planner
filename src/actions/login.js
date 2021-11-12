export const validateLoginForm = form => {
    const user = {
        username: form.state.username,
        password: form.state.password
    }
    return user.username.length > 0 && user.password.length > 0;
}