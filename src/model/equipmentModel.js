import Joi from 'joi'
import { addDoc, collection, doc, getDocs, updateDoc, setDoc } from "firebase/firestore"
import  {db}  from '../config/firestore.js'
import { equipmentUsageHisModel } from './equipmentUsageHisModel.js';
// async function deleteQueryBatch(db, query, resolve) {
//   const snapshot = await query.get();

//   const batchSize = snapshot.size;
//   if (batchSize === 0) {
//     // When there are no documents left, we are done
//     resolve();
//     return;
//   }

//   // Delete documents in a batch
//   const batch = db.batch();
//   snapshot.docs.forEach((doc) => {
//     batch.delete(doc.ref);
//   });
//   await batch.commit();

//   // Recurse on the next process tick, to avoid
//   // exploding the stack.
//   process.nextTick(() => {
//     deleteQueryBatch(db, query, resolve);
//   });
// }
// async function deleteCollection(db, collectionPath, batchSize) {
//   const collectionRef = db.collection(collectionPath);
//   const query = collectionRef.orderBy('__name__').limit(batchSize);

//   return new Promise((resolve, reject) => {
//     deleteQueryBatch(db, query, resolve).catch(reject);
//   });
// }

const createNew = async (Data) => {
  try {
    const equipmentRef = await db.collection("equipment").add(Data);
    await equipmentUsageHisModel.createNew(equipmentRef.id);
    console.log("Document written with ID: ", equipmentRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
const delEquipment = async(Id) =>{
  try{
    await equipmentUsageHisModel.delAll(Id)
    await db.collection("equipment").doc(Id).delete();
  }catch(error){
    console.log(error);
  }
}
const delMultiEquipment = async (arrayId) => {
  try{
    arrayId.forEach(async (id) => {
      const equipmentRef = db.collection('equipment').doc(id);
      await equipmentRef.delete();
    })
  }catch (e) {
    console.error("Error", e);
  }
}
const updateEquipment = async(Id,Data) => {
  try{
    const equipmentRef = db.collection('equipment').doc(Id);
    await equipmentRef.update({Data});
  }catch(error){
    console.log(error);
  }
}
export const equipmentModel = {
  createNew,
  delEquipment,
  delMultiEquipment,
  updateEquipment
}