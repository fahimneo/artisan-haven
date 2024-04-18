// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfuCA0o7vno59Yxs4ErOrVATx5_SPGsAQ",
  authDomain: "a9-real-estate-1e537.firebaseapp.com",
  projectId: "a9-real-estate-1e537",
  storageBucket: "a9-real-estate-1e537.appspot.com",
  messagingSenderId: "576410305342",
  appId: "1:576410305342:web:3274943eb15870f808e26f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;