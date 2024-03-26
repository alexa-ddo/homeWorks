import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAl047C5FHymdv-3Z7bdAfQUY46liJbFvg",
  authDomain: "dancesitefinal.firebaseapp.com",
  projectId: "dancesitefinal",
  storageBucket: "dancesitefinal.appspot.com",
  messagingSenderId: "507036272665",
  appId: "1:507036272665:web:9c5ccd77be665bbe430288",
  databaseURL: "https://dancesitefinal-default-rtdb.europe-west1.firebasedatabase.app"
};


export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);