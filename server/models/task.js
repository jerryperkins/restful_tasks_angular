const mongoose = require('mongoose')

const TasksSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String, default: ''},
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

const Task = mongoose.model('Task', TasksSchema)

module.exports = {
    Task:Task,
    TasksSchema:TasksSchema
}