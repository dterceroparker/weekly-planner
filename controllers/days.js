import { Day } from '../models/day.js';

function newDay(req, res) {
  res.render('days/new')
}

function index(req, res) {
  Day.find({})
  .then(days => { //days represents the result of the query, in this case ALL days
    res.render('days/index', {
      days: days,
      date: req.date
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}


export {
  newDay as new,
  index,
}