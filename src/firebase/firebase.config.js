// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpyADVZZYYj22GyVvftQUcc910TyY9IP4",
  authDomain: "react-dragon-news-80842.firebaseapp.com",
  projectId: "react-dragon-news-80842",
  storageBucket: "react-dragon-news-80842.appspot.com",
  messagingSenderId: "1089030037729",
  appId: "1:1089030037729:web:e7098cb1a723887c2817a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app