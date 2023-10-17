// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvXy8VP8xEmQRriDemePEBSkaqdD75R8k",
  authDomain: "mrpablobiz-42a3e.firebaseapp.com",
  projectId: "mrpablobiz-42a3e",
  storageBucket: "mrpablobiz-42a3e.appspot.com",
  messagingSenderId: "77596733020",
  appId: "1:77596733020:web:c5e614fb8e8244bb564099",
  measurementId: "G-D86PGQP2GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);