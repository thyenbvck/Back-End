import { patientModel } from '../model/patientModel.js'

const createNew = async (reqBody) => {
  try {
    // const docRef = await addDoc(collection(db, "users"), req.body);
    const newPatient = await patientModel.createNew(reqBody);
    console.log("Document written with ID: ", newPatient);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  res.status(201).json("Tao thanh cong")

}

export const patientService = {
  createNew
}