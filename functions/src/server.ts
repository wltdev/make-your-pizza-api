import * as express from 'express'
import * as cors from 'cors'
import { json } from 'body-parser'

import pizzaRouter from './resources/pizza/pizza.router'

const app = express()

app.use(cors())
app.use(json())

app.use('/pizza', pizzaRouter)

export default app