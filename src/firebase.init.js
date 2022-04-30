// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3dgrqc99RlJWQsMRwwBMgRhqvbwITlqU",
  authDomain: "laptop-warehouse-37066.firebaseapp.com",
  projectId: "laptop-warehouse-37066",
  storageBucket: "laptop-warehouse-37066.appspot.com",
  messagingSenderId: "757610826176",
  appId: "1:757610826176:web:a49bd21e13a482f799e025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
