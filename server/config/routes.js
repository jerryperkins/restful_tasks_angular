const tasks = require('../controllers/tasks')

module.exports = function(app){

    app.get('/', (req, res) =>{
        
    })

    app.get('/task', (req, res) => {
        tasks.all_tasks(req, res)
    })

    app.get('/task/:id', (req, res) => {
        tasks.one_task(req, res)
    })

    app.post('/task', (req, res) => {
        tasks.add_task(req, res)
    })

    app.put('/task/:id', (req, res) =>{
        tasks.edit_task(req, res)
    })

    app.delete('/task/:id', (req, res) => {
        tasks.delete_task(req, res)
})

}