// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLgJmxcCPOKzh5RVA5MiTwBWqK4Hdx5yU",
  authDomain: "car-doctor-c9f1a.firebaseapp.com",
  projectId: "car-doctor-c9f1a",
  storageBucket: "car-doctor-c9f1a.appspot.com",
  messagingSenderId: "554271543758",
  appId: "1:554271543758:web:f6db852456786ac3101b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app