import { specialistService } from '../service/specialistService.js'
const createNew = async (req, res, next) => {
  try {
    // const docRef = await addDoc(collection(db, "users"), req.body);
    const newSpecialist = await specialistService.createNew(req.body);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  res.status(201).json("Tao thanh cong")

}

export const specialistController = {
  createNew
}