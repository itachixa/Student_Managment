// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB2DQS5WP7HzZI3Ig2u056qIHK7p3vzfmU",
  authDomain: "srm-app-4ebc0.firebaseapp.com",
  projectId: "srm-app-4ebc0",
  storageBucket: "srm-app-4ebc0.appspot.com",
  messagingSenderId: "809166407032",
  appId: "1:809166407032:web:a7093a4ae7ea5838e3b48d",
  measurementId: "G-2FKS8B3G4H"
};

const app = initializeApp(firebaseConfig);

// Exportation des services
export const db = getFirestore(app);
export const auth = getAuth(app);
