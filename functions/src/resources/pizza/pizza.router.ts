import { Router } from 'express'
import { 
    getToppings,
    getConfigs
} from './pizza.controller'

const router = Router()

//=> /user
router
    .route('/toppings')
    .get(getToppings)
//=> /user
router
    .route('/config')
    .get(getConfigs)

export default router
