// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAA7CT_dRQ_wy_ykmJ6Qc1WJ_h-yKFu08",
  authDomain: "realtor-clone-98854.firebaseapp.com",
  projectId: "realtor-clone-98854",
  storageBucket: "realtor-clone-98854.appspot.com",
  messagingSenderId: "343993443754",
  appId: "1:343993443754:web:c9131e96a215b1b3f0f7d3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
