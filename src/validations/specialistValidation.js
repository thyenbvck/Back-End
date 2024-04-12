import Joi from 'joi'
import { customApiErrorModule } from '../error/customError.js'

const createNew = async (req, res, next) => {
  const dataCorrection = Joi.object({
    fullname: Joi.string().regex(/^[A-Z]+ [A-Z]+$/i).uppercase().min(3).max(50).required(),
    email: Joi.string().email().required().min(3).max(50),
    phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
    birthday: Joi.date().iso().required(),
    age: Joi.string().pattern(/^[0-9]+$/, 'numbers').trim().strict().required(),
    cert: Joi.array().default([]),
    education: Joi.array().default([])
  })
  try {
    await dataCorrection.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    const errorMessage = new Error(error).message
    const customError = new customApiErrorModule.CustomAPIError(422, errorMessage)
    next(customError)
  }
}

// const update = async (req, res, next) => {
//   const dataCorrection = Joi.object({
//     title: Joi.string().min(3).max(256).trim().strict(),
//     description: Joi.string().min(3).max(256).trim().strict(),
//     columnOrderIds: Joi.array().items(
//       Joi.string().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE)
//     ).default([]),
//     type: Joi.string().valid('public', 'private')
//   })
//   try {
//     await dataCorrection.validateAsync(req.body,
//       {
//         abortEarly: false,
//         allowUnknown: true
//       })
//     next()
//   } catch (error) {
//     const errorMessage = new Error(error).message
//     const customError = new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, errorMessage)
//     next(customError)
//   }
// }

export const specialistValidation = {
  createNew
}