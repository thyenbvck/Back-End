// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from "firebase-admin/firestore"
import { env } from '../config/environment.js'
import admin from 'firebase-admin';
import serviceAccount from '../config/privateAccountKey.json' with { type: "json" };

const firebaseConfig = {

  apiKey: env.API_KEY,

  authDomain: env.AUTH_DOMAIN,
  
  databaseurl: env.DATABASE_URL,

  projectId: env.PROJECT_ID,

  storageBucket: env.STORAGE_BUCKET,

  messagingSenderId: env.MESSAGING_SENDER_ID,

  appId: env.APP_ID,

  measurementId: env.MEASUREMENT_ID

}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lntc-hopital-default-rtdb.firebaseio.com"
});

// Initialize Firebase
export const db =admin.firestore()
