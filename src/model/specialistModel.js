import Joi from 'joi'


const SPECIALIST_COLLECTION_SCHEMA = Joi.object({
  fullname: Joi.string().regex(/^[A-Z]+ [A-Z]+$/i).uppercase().min(3).max(50).required(),
  email: Joi.string().email().required().min(3).max(50),
  phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
  birthday: Joi.date().iso().required(),
  age: Joi.string().pattern(/^[0-9]+$/, 'numbers').trim().strict().required(),

  // Lưu ý các item trong mảng columnOrderIds là ObjectId
  schedule: Joi.array().default([]),

})
const INVALID_DATA_UPDATE = ['_id', 'createdAt']
const validObjectValue = async (data) => {
  return await SPECIALIST_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
}
const createNew = async (Data) => {
  try {
    const validData = validObjectValue(Data)
    const docRef = await addDoc(collection(db, "Specialist"), validData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const patientModel = {
  createNew,
  SPECIALIST_COLLECTION_SCHEMA
}