import express from 'express'
import { QuerySnapshot, addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from '../config/firestore.js'
import { medicineValidation } from '../validations/medicineValidation.js'
import { medicineController } from '../controller/MedicineController.js'
const Router = express.Router();
Router.route('/')
  .get(async (req, res) => {
    try {
      const medicineRef = db.collection("medicine");
      medicineRef.get().then((querySnapshot)=>{
        querySnapshot.forEach(document => {
          console.log(document.data());
        })
      })
    } catch (error) {
      console.error('Error fetching medicines:', error);
      res.status(500).json({ error: 'Failed to fetch medicines' });
    }
    })
  .post(medicineValidation.createNew, medicineController.createNew)
Router.delete('/:id',medicineController.delMedicine);
Router.delete('/',medicineController.delMultiMedicine)
Router.post('/:id',medicineValidation.createNew,medicineController.updateMedicine);
export default Router