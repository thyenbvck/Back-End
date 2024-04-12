import Joi from 'joi'
import { customApiErrorModule } from '../error/customError.js'


const createNew = async (req, res, next) => {
  const dataCorrection = Joi.object({
    description: Joi.string().required().min(3).max(2000).trim().strict(),
    examinationDay: Joi.date().iso().required(),
    Time: Joi.string().regex(/^\d{2}:\d{2}$/).required().trim().strict()
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

export const schedulesValidation = {
  createNew
}