
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk0IErh2lnoiyZCEfnYX4niRqPnBzhb24",
  authDomain: "finda-e7fd7.firebaseapp.com",
  projectId: "finda-e7fd7",
  storageBucket: "finda-e7fd7.appspot.com",
  messagingSenderId: "834445091491",
  appId: "1:834445091491:web:393da6f81981b84b7fd516",
  measurementId: "G-C7J9ESWRQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

auth.languageCode = 'es-mx';