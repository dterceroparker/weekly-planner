import { Task } from '../models/task.js';

function newTask(req, res) {
  res.render('tasks/new')
}

function index(req, res) {
  Task.find({})
  .then(tasks => { //tasks represent the result of the query, in this case ALL tasks
    res.render('tasks/index', {
      tasks: tasks,
      date: date
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res) {
  Task.findById(req.params.taskId)
  .then(task => {
    res.render('tasks/show', {
      task: task
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/todos')
  })
}

export {
  newTask as new,
  index,
  show,
}