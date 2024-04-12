import express from 'express'
import { QuerySnapshot, addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from '../config/firestore.js'
import { equipmentUsageHisValidation } from '../validations/equipmentUsageHisValidation.js';
import { equipmentUsageHisController } from '../controller/equipmentUsageHisController.js';
import { equipmentUsageHisModel } from '../model/equipmentUsageHisModel.js';
const Router = express.Router({ mergeParams: true });
Router.post('/',equipmentUsageHisValidation.update,equipmentUsageHisController.addHis)
Router.post('/:hisId',equipmentUsageHisValidation.update,equipmentUsageHisController.updateHis)
Router.delete('/:hisId',equipmentUsageHisController.delHis)
Router.delete('/',equipmentUsageHisController.delMultiHis)
export default Router