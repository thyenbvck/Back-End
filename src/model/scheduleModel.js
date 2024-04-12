import Joi from 'joi'


const SCHEDULE_COLLECTION_SCHEMA = Joi.object({
  description: Joi.string().email().required().min(3).max(50),
  examinationDay: Joi.date().iso().required(),
  Time: Joi.string().regex(/^\d{2}:\d{2}$/).required().trim().strict()
})
const INVALID_DATA_UPDATE = ['_id', 'createdAt']
const validObjectValue = async (data) => {
  return await SCHEDULE_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}