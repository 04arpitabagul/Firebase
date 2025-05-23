// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApMhmMmeFk_X-v-juZb0ckRCHVzu9kIf4",
  authDomain: "fir-demo-bab00.firebaseapp.com",
  projectId: "fir-demo-bab00",
  storageBucket: "fir-demo-bab00.firebasestorage.app",
  messagingSenderId: "911909163900",
  appId: "1:911909163900:web:e9fac37fb88bb16fffcaf9",
  measurementId: "G-ZB3YGLMCS2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
