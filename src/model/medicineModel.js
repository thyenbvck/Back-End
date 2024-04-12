import Joi from 'joi'
import { addDoc, collection, doc, getDocs, updateDoc, setDoc } from "firebase/firestore"
import  {db}  from '../config/firestore.js'
// const INVALID_DATA_UPDATE = ['_id', 'createdAt']
const createNew = async (Data) => {
  try {
    const medicineRef = await db.collection("medicine").add(Data);
    console.log("Document written with ID: ", medicineRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
const delMedicine = async(id) =>{
  try{
    const response = await db.collection("medicine").doc(id).delete();
  }catch(error){
    console.log(error);
  }
}
const delMultiMedicine = async (arrayId) => {
  try{
    arrayId.forEach(async (id) => {
      // Lấy tham chiếu của tài liệu cần xóa
      const medicineRef = db.collection('medicine').doc(id);
      await medicineRef.delete();
    })
  }catch (e) {
    console.error("Error", e);
  }
}
const updateMedicine = async(id,Data) => {
  try{
    const medicineRef = db.collection('medicine').doc(id);
    medicineRef.update(Data)
  }catch(error){
    console.log(error);
  }
}

export const medicineModel = {
  createNew,
  delMedicine,
  updateMedicine,
  delMultiMedicine
}