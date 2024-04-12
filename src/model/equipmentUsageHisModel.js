import Joi from 'joi'
import { addDoc, collection, doc, getDocs, updateDoc, setDoc } from "firebase/firestore"
import  {db}  from '../config/firestore.js'
const createNew = async (Id) => {
  try {
    const hisRef = await db.collection("equipment").doc((Id)).collection("usageHistory").add({})
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
const addHis = async (Id,Data) => {
    try {
      const hisRef = await db.collection("equipment").doc((Id)).collection("usageHistory").add(Data)
      // hisRef =  db.collection("equipmentUsageHistory").doc((Id))
      // await hisRef.update(Data)
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
const delHis = async(equipId,hisId) =>{
  try{
    const hisRef = await db.collection("equipment").doc((equipId)).collection("usageHistory").doc(hisId).delete()
  }catch(error){
    console.log(error);
  }
}
const delMultiHis = async (equipId,arrayId) => {
  try{
    arrayId.forEach(async (id) => {
      const HisRef = db.collection('equipment').doc(equipId).collection("usageHistory").doc(id);
      await HisRef.delete();
    })
  }catch (e) {
    console.error("Error", e);
  }
}
const delAll = async(equipId) =>{
  try{
    const Hisref = db.collection("equipment").doc(equipId).collection("usageHistory")
    Hisref.onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        Hisref.doc(doc.id).delete()
      })
    })
    }catch(error){
    console.log(error);
  }
}
const updateHis = async(equipId,hisId,Data) => {
  try{
    const hisRef = db.collection("equipment").doc((equipId)).collection("usageHistory").doc(hisId)
    await hisRef.update(Data);
  }catch(error){
    console.log(error);
  }
}
export const equipmentUsageHisModel = {
  createNew,
  addHis,
  delHis,
  delMultiHis,
  delAll,
  updateHis,
}