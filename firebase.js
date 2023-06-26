// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0A1SzD14t4vuBOIwNLwcfCpBfTglMY_c",
  authDomain: "website-1a206.firebaseapp.com",
  projectId: "website-1a206",
  storageBucket: "website-1a206.appspot.com",
  messagingSenderId: "506659684787",
  appId: "1:506659684787:web:7775587bad34ca3f210bc6",
  measurementId: "G-FM95RDPW4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
export default app