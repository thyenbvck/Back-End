import { equipmentModel } from "../model/equipmentModel.js";
const createNew = async (reqBody) => {
  try {
    const newEquipment = await equipmentModel.createNew(reqBody);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export const equipmentService = {
  createNew,
}