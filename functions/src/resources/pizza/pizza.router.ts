import { Router } from 'express'
import { 
    getToppings
} from './pizza.controller'

const router = Router()

//=> /user
router
    .route('/toppings')
    .get(getToppings)

export default router
