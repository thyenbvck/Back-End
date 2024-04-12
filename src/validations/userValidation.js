import Joi from 'joi'
import { customApiErrorModule } from '../error/customError.js'


const createNew = async (req, res, next) => {
  const dataCorrection = Joi.object({
    email: Joi.string().email().required().min(3).max(50),
    password: Joi.string().min(7).required().strict()
  })
  try {
    await dataCorrection.validateAsync(req.body, { abortEarly: false })
    next()

  } catch (error) {
    const errorMessage = new Error(error).message
    const customError = new customApiErrorModule.CustomAPIError(422, errorMessage)
    next(customError)
    // throw new Error(error)
  }
}


export const schedulesValidation = {
  createNew
}