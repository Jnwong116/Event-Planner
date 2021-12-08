const prod = {
    env: 'production',
    api_host: ''
};

const dev = {
    env: 'development',
    api_host: 'http://localhost:5000',
}

export default process.env.NODE_ENV === 'production' ? prod : dev;