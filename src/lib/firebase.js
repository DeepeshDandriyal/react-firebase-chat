import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-8dbee.firebaseapp.com",
  projectId: "reactchat-8dbee",
  storageBucket: "reactchat-8dbee.appspot.com",
  messagingSenderId: "969827834370",
  appId: "1:969827834370:web:838fdaf34ae660c4a6251b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
