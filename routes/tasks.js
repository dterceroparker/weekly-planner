import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'

const router = Router()

//GET localhost:3000/tasks
router.get('/', tasksCtrl.index)

// GET localhost:3000/tasks/new
router.get('/new', tasksCtrl.new)

//GET localhost:3000/tasks/:taskId
router.get('/:taskId', tasksCtrl.show)

//GET localhost:3000/tasks/:taskId/edit
router.get('/:taskId/edit', tasksCtrl.edit)

//POST localhost:3000/tasks
router.post('/', tasksCtrl.create)


//DELETE localhost:3000/tasks/:taskId
router.delete('/:taskId', tasksCtrl.delete)

export { router }
