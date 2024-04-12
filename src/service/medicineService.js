import { medicineModel } from "../model/medicineModel.js";
const createNew = async (reqBody) => {
  try {
    const newMedicine = await medicineModel.createNew(reqBody);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const medicineService = {
  createNew
}