import { Request, Response } from "express"

import { INTERNAL_SERVER_ERROR } from '../../consts/status_code'
import { db } from '../../utils/firebaseAdmin'


/**
 * Get Toppings list
 * @param req 
 * @param res 
 */
export const getToppings = async (req: Request, res: Response) => {
  try {   

    const toppingsDoc = await db.collection('toppings').orderBy('name', 'asc').get()

    const toppings = toppingsDoc.docs.map((doc: any) => {
      return {
        ...doc.data(),
        uid: doc.id
      }
    })

    res.send(toppings)
  } catch (error) {    
    res.status(INTERNAL_SERVER_ERROR).send({ response: error.message })
  }
}
