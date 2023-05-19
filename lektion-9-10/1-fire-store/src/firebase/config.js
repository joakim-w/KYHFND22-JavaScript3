import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "fire-store-7a918.firebaseapp.com",
  projectId: "fire-store-7a918",
  storageBucket: "fire-store-7a918.appspot.com",
  messagingSenderId: "78931965104",
  appId: "1:78931965104:web:50b2fa270eb3cd3bf9b775"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export { db }