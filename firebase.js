import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDA_tnNJlpEBf0m45fniIl_4ipIrfBdoxI",
  authDomain: "activities-eccbd.firebaseapp.com",
  projectId: "activities-eccbd",
  storageBucket: "activities-eccbd.appspot.com",
  messagingSenderId: "231851674455",
  appId: "1:231851674455:web:95f8b1e969525aa4578c12"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();