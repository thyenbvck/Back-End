import Joi from 'joi'
import { customApiErrorModule } from '../error/customError.js'

const createNew = async (req, res, next) => {
  const dataCorrection = Joi.object({
    Name: Joi.string().uppercase().min(3).max(50).required(),
    regularMaintenance: Joi.object({
      Day: Joi.date().required(),
      Description: Joi.boolean().required()
    }),
    Status: Joi.boolean().optional(),
  })
  try {
    await dataCorrection.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    const errorMessage = new Error(error).message
    next(errorMessage)
  }
}

const update = async (req, res, next) => {
  const dataCorrection = Joi.object({
    Day: Joi.date().required(),
    Room: Joi.string().uppercase().min(3).max(50).required()
  })
  try {
    await dataCorrection.validateAsync(req.body,
      {
        abortEarly: false,
        allowUnknown: true
      })
    next()
  } catch (error) {
    const errorMessage = new Error(error).message
  }
}
export const equipmentValidation ={
    createNew,
    update
}