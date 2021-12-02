const log = console.log

export function getUser() {
    const url = '/users';

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
        log(json)
        return json
    })
    .catch((error) => {
        log(error)
    })
}