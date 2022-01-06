import { initializeApp } from "firebase/app"
import "firebase/firestore"
import { getFirestore } from "firebase/firestore";

//Paste your firebase config here
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };

initializeApp(firebaseConfig)

const db = getFirestore()

export default db
