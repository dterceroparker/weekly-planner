import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'

const router = Router()

// GET localhost:3000/tasks/new
router.get('/new', tasksCtrl.new)

//GET localhost:3000/tasks
router.get('/', tasksCtrl.index)

//GET localhost:3000/tasks/:taskId
router.get('/:taskId', tasksCtrl.show)

export { router }
