import express from 'express'
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore"
import { db } from '../config/firestore.js'
import { schedulesValidation } from '../validations/schedulesValidation.js'
import { specialistController } from '../controller/specialistController.js'
import { specialistValidation } from '../validations/specialistValidation.js'
const Router = express.Router();
Router.route('/')
  .get(async (req, res) => {
    res.status(200).end('<h1>Hello World!</h1><hr>')
  })
  .post(specialistValidation.createNew, specialistController.createNew)
Router.route('/:id')
  .post(schedulesValidation.createNew, async (req, res) => {
    try {
      const { id } = req.params;
      const specialistSchedule = [];
      const docref = await addDoc(collection(db, 'users', id, 'schedules'), req.body)

      const cityDocs = collection(db, 'users', id, 'schedules')

      const schedules = await getDocs(cityDocs);

      schedules.forEach(data => { specialistSchedule.push(data.data()) });

      const newDoc = doc(db, 'users', id);

      await updateDoc(newDoc, { Schedule: specialistSchedule })
      console.log("Document written with ID: ", docref.id);
      res.status(201).json("oke luoon")
    } catch (error) {
      throw new Error(error)
    }
  })

export default Router