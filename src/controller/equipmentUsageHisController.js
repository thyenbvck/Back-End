import { equipmentUsageHisModel } from "../model/equipmentUsageHisModel.js";
const addHis = async (req, res, next) => {
    try {
      const His = await equipmentUsageHisModel.addHis(req.params.Id,req.body);
    } catch (e) {
      console.error("Error", e);
    }
    res.send('them thanh cong')
    }
const delHis = async (req, res, next) => {
  try {
    const Equipment = await equipmentUsageHisModel.delHis(req.params.Id,req.params.hisId);
  } catch (e) {
    console.error("Error", e);
  }
  res.send('xoa thanh cong')
  }
  const delMultiHis = async (req, res, next) => {
    try{
    const Equipment = await equipmentUsageHisModel.delMultiHis(req.params.Id,req.body);
    }catch (e) {
      console.error("Error", e);
    }
    res.send('xoa thanh cong')
  }
const updateHis = async(req,res,next) =>{
  try{
    const equipment = await equipmentUsageHisModel.updateHis(req.params.Id,req.params.hisId,req.body);
  } catch (e) {
    console.error("Error", e);
  }
  res.send(req.body)
}
export const equipmentUsageHisController = {
    addHis,
    delHis,
    updateHis,
    delMultiHis
}