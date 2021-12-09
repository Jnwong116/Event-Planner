const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    sender: {type: String, required: true},
    content: {type: String},
    timestamp: {type: Date, default: Date.now}
})

const taskSchema = new Schema({
    users: [mongoose.ObjectId],
    status: {type: String},
    date: {type: Date, default: Date.now}
})

const eventSchema = new Schema({
    name: {type: String, require: true},
    style: {type: String, require: true},
    messages: [messageSchema],
    tasks: [taskSchema],
    userRoles: [Object]
})

const Event = mongoose.model('Event', eventSchema)

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    username: {type: String, require: true},
    password: {type: String, require: true},
    events: [{type: mongoose.Schema.Types.ObjectId, ref: 'Event'}]
})

const User = mongoose.model('User', userSchema)

module.exports = { User, Event };