// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpMnPJC_ZmA3gVZBaEMvRcgDVX_fLZWmc",
  authDomain: "hack2impact-69417.firebaseapp.com",
  projectId: "hack2impact-69417",
  storageBucket: "hack2impact-69417.firebasestorage.app",
  messagingSenderId: "54015197809",
  appId: "1:54015197809:web:995c75057abbf0eeded1d0",
  measurementId: "G-NYD87NMXQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);