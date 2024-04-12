import { medicineModel } from "../model/medicineModel.js";
import { medicineService } from "../service/medicineService.js";
const createNew = async (req, res, next) => {
  try {
    const newMedicine = await medicineService.createNew(req.body);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  res.status(201).json("Tao thanh cong")

}
const delMedicine = async (req, res, next) => {
  try {
    const Medicine = await medicineModel.delMedicine(req.params.id,req.body.Name);
  } catch (e) {
    console.error("Error", e);
  }
  res.send('xoa thanh cong')
  }
  const delMultiMedicine = async (req, res, next) => {
    try{
    const Medicine = await medicineModel.delMultiMedicine(req.body);
    }catch (e) {
      console.error("Error", e);
    }
    res.send('xoa thanh cong')
  }

const updateMedicine = async(req,res,next) =>{
  try{
    const Medicine = await medicineModel.updateMedicine(req.params.id, req.body);
  } catch (e) {
    console.error("Error", e);
  }
  res.send('sua thanh cong')
}
export const medicineController = {
  createNew,
  delMedicine,
  updateMedicine,
  delMultiMedicine
}