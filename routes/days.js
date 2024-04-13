import { Router } from 'express'
import * as daysCtrl from '../controllers/days.js'

const router = Router()

// GET localhost:3000/days/new
router.get('/new', daysCtrl.new)

//GET localhost:3000/days
router.get('/', daysCtrl.index)

export { router }
