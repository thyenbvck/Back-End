import Joi from 'joi'
import { customApiErrorModule } from '../error/customError.js'


const createNew = async (req, res, next) => {
  const dataCorrection = Joi.object({
    Name: Joi.string().uppercase().min(3).max(50).required(),
    arriveTime: Joi.date().required(),
    departureTime: Joi.date().required(),
    expireDate: Joi.date().required(),
    Amount: Joi.number().min(100).optional(),
  })
  try {
    await dataCorrection.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    const errorMessage = new Error(error).message
    next(errorMessage)
  }
}

export const medicineValidation ={
    createNew
}