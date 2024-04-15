import { Task } from '../models/task.js';

function index(req, res) {
  Task.find({}).sort('date')
  .then(tasks => { //tasks represent the result of the query, in this case ALL tasks
    res.render('tasks/index', {
      tasks: tasks
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}


function newTask(req, res) {
  res.render('tasks/new')
}

function create(req, res) {
  req.body.done = false
  Task.create(req.body)
  .then(task => {
    res.redirect(`/tasks/${task._id}`)
  })
  .catch(error => { 
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
    res.redirect('/tasks')
  })
}

function deleteTask(req, res) {
  //use model to delete a task
  Task.findByIdAndDelete(req.params.taskId)
  .then(task => {
    res.redirect('/tasks')
  })
  //redirect to todos index
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

function edit(req, res) {
  //find task and pass it to the render
  Task.findById(req.params.taskId)
  .then(task => {
    //render a view with a form (edit.ejs)
    res.render('tasks/edit', {
      task: task
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

function update(req, res) {
  //handle checkbox logic
  req.body.done = !!req.body.done
  //find task by ID and update
  Task.findByIdAndUpdate(req.params.taskId, req.body, {new:true})
  .then(task => {
    //redirect back to show view
    res.redirect(`/tasks/${req.params.taskId}`)
  })
}

export {
  newTask as new,
  create,
  show,
  index,
  deleteTask as delete,
  edit,
  update
}