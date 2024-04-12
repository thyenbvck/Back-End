import { patientModel } from '../model/specialistModel.js'

const createNew = async (reqBody) => {
  try {
    // const docRef = await addDoc(collection(db, "users"), req.body);
    const newSpecialist = await specialistModel.createNew(reqBody);
    console.log("", newSpecialist);
  } catch (e) {
    console.error("", e);
  }

  res.status(201).json("Tao thanh cong")

}

export const specialistService = {
  createNew
}