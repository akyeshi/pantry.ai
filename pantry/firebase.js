// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOLsP0oBRUk-nHBwMpXdLhjyNBGcfsjWY",
  authDomain: "pantry-ai-b1f0a.firebaseapp.com",
  projectId: "pantry-ai-b1f0a",
  storageBucket: "pantry-ai-b1f0a.appspot.com",
  messagingSenderId: "284324287239",
  appId: "1:284324287239:web:64754c91ba6ecec59daba2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }