// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIn0ErPgW6D4pRVAK49B0I_mLv6hmnA2U",
    authDomain: "jerry-kitchen-service.firebaseapp.com",
    projectId: "jerry-kitchen-service",
    storageBucket: "jerry-kitchen-service.appspot.com",
    messagingSenderId: "666744884670",
    appId: "1:666744884670:web:234184e4c6a82479de3def"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;