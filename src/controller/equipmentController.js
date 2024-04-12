import { equipmentModel } from "../model/equipmentModel.js";
import { equipmentService } from "../service/equipmentService.js";
const createNew = async (req, res, next) => {
  try {
    const newEquipment = await equipmentService.createNew(req.body);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  res.status(201).json("Tao thanh cong")
}
const delEquipment = async (req, res, next) => {
  try {
    const Equipment = await equipmentModel.delEquipment(req.params.Id);
  } catch (e) {
    console.error("Error", e);
  }
  res.send('xoa thanh cong')
  }
  const delMultiEquipment = async (req, res, next) => {
    try{
    const Equipment = await equipmentModel.delMultiEquipment(req.body);
    }catch (e) {
      console.error("Error", e);
    }
    res.send('xoa thanh cong')
  }

const updateEquipment = async(req,res,next) =>{
  try{
    const equipment = await equipmentModel.updateEquipment(req.params.Id, req.body);
  } catch (e) {
    console.error("Error", e);
  }
  res.send(req.body)
}
export const equipmentController = {
  createNew,
  delEquipment,
  updateEquipment,
  delMultiEquipment
}