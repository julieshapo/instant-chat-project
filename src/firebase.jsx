import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNVZFgytEjdMvwOde8nxXCOC7qITp-zno",
  authDomain: "instantchat-35d43.firebaseapp.com",
  projectId: "instantchat-35d43",
  storageBucket: "instantchat-35d43.appspot.com",
  messagingSenderId: "361874264885",
  appId: "1:361874264885:web:e44f2f6f67bf35c2a9f27c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
