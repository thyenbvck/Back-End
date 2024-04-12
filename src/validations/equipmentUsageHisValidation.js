import Joi from 'joi'
import { customApiErrorModule } from '../error/customError.js'
const update = async (req, res, next) => {
  const dataCorrection = Joi.object({
    Day: Joi.date().required(),
    Room: Joi.string().min(3).max(256).trim().strict().required()
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
    const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage)
    next(customError)
  }
}

export const equipmentUsageHisValidation = {
  update
}