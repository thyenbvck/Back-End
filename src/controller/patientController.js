
import { patientService } from '../service/patientService.js'
const createNew = async (req, res, next) => {
  try {
    // const docRef = await addDoc(collection(db, "users"), req.body);
    const newPatient = await patientService.createNew(req.body);
    console.log("Document written with ID: ", newPatient);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  res.status(201).json("Tao thanh cong")

}

export const patientController = {
  createNew
}