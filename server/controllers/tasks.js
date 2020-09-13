const {Task} = require('../models/task')

module.exports = {

    

    all_tasks:(req, res)=>{
        Task.find({})
        .then(all_tasks => {
            console.log('Here are all the task', all_tasks)
            res.json(all_tasks)
    })
        .catch(err => {
            console.log('Error when showing all tasks', err)
            res.json(err)
    })
    },

    one_task:(req, res) => {
        Task.findOne({_id: req.params.id})
        .then(task => {
            console.log('Here is the one task', task)
            res.json(task)
        })
        .catch(err => {
            console.log('Error when showing a single tasks', err)
            res.json(err)
        })
    },

    add_task:(req, res) => {
        console.log('Here is the req.body', req.body)
        const task = new Task()
        task.title = req.body.title
        task.description = req.body.description
        task.completed = req.body.completed
        task.save()
        .then(new_task => {
            console.log('here is the new task', new_task)
            res.json(new_task)
        })
        .catch(err => {
            console.log('Error when creating new task', err)
            res.json(err)
        })
    },

    edit_task:(req, res)=> {
        Task.findOne({_id: req.params.id})
        .then(task_to_update => {
            console.log('Here is the task to update', task_to_update)
            task_to_update.title = req.body.title
            task_to_update.description = req.body.description
            task_to_update.completed = req.body.completed
            task_to_update.save()
            .then(updated_task => {
                console.log('here is the Updated task', updated_task)
                res.json(updated_task)
            })
            .catch(err => {
                console.log('Error from updated task', err)
                res.json(err)
            })
        })
        .catch(err => {
            console.log('Error when editing task', err)
            res.json(err)
        })
    },

    delete_task:(req, res) => {
        Task.deleteOne({_id: req.params.id})
        .then(task_to_delete => {
            console.log('Here is the task to delete', task_to_delete)
            res.json(task_to_delete)
        })
        .catch(err => {
            console.log('Error when deleting task', err)
            res.json(err)
        })
    }
}