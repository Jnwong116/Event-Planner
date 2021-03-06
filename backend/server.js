const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const env = process.env.NODE_ENV 
const app = express()
const port = process.env.PORT || 5000

const options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(options))
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully")
})

const usersRouter = require('./routes/users')
//app.use('/events', eventsRouter)


const session = require("express-session");
const MongoStore = require('connect-mongo') // to store session information on the database in production

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'POST', 'OPTIONS', 'PATCH', 'DELETE', 'GET')
    next();
});


// Create a session and session cookie
console.log(env)
app.use(
    session({
        secret: process.env.SESSION_SECRET || "our hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000,
            httpOnly: true
        },
        // store the sessions on the database in production
        
        store: env === 'production' ? MongoStore.create({
                                                mongoUrl: process.env.ATLAS_URI || 'mongodb://localhost:27017/StudentAPI'
                                 }) : null
    })
);

app.use('/users', usersRouter)
// Middleware for authentication of resources
/*const authenticate = (req, res, next) => {
    if (env !== 'production' && USE_TEST_USER)
        req.session.user = TEST_USER_ID // test user on development. (remember to run `TEST_USER_ON=true node server.js` if you want to use this user.)

    if (req.session.user) {
        User.findById(req.session.user).then((user) => {
            if (!user) {
                return Promise.reject()
            } else {
                req.user = user
                next()
            }
        }).catch((error) => {
            res.status(401).send("Unauthorized")
        })
    } else {
        res.status(401).send("Unauthorized")
    }
}*/

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})