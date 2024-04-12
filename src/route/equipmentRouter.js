import express from 'express'
import { QuerySnapshot, addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import hisRouter from './equipmentUsageHisRouter.js'
import { db } from '../config/firestore.js'
import { equipmentValidation } from '../validations/equipmentValidation.js'
import { equipmentController } from '../controller/equipmentController.js';
import { equipmentUsageHisValidation } from '../validations/equipmentUsageHisValidation.js';
import { equipmentUsageHisController } from '../controller/equipmentUsageHisController.js';
const Router = express.Router();
Router.use('/:Id/usageHistory',hisRouter)
Router.route('/')
  .get(async (req, res) => {
    try {
      const equipmentRef = db.collection("equipment");
      equipmentRef.get().then((querySnapshot)=>{
        querySnapshot.forEach(document => {
          console.log(document.data());
        })
      })
    } catch (error) {
      console.error('Error fetching equipments:', error);
      res.status(500).json({ error: 'Failed to fetch equipments' });
    }
    })
  .post(equipmentValidation.createNew, equipmentController.createNew)
Router.delete('/:Id',equipmentController.delEquipment);
Router.delete('/',equipmentController.delMultiEquipment)
Router.post('/:Id',equipmentValidation.update,equipmentController.updateEquipment);
export default Router