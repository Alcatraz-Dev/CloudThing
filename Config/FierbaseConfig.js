// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "cloud-file-manager-b7417.firebaseapp.com",
    projectId: "cloud-file-manager-b7417",
    storageBucket: "cloud-file-manager-b7417.appspot.com",
    messagingSenderId: "129426910429",
    appId: "1:129426910429:web:a85289f7922c6226977f34",
    measurementId: "G-VTEWVJ565C"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
