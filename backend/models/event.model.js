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