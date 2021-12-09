const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
    sender: {type: String, required: true},
    content: {type: String},
    timestamp: {type: Date, default: Date.now}
})

const taskSchema = new Schema({
    id: {type: String, required: true},
    user: [Number],
    status: {type: String},
    date: {type: Date, default: Date.now}
})

const eventSchema = new Schema({
    id: {type: String, require: true},
    name: {type: String, require: true},
    style: {type: String, require: true},
    messages: [messageSchema],
    tasks: [taskSchema]  
})
