// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC90G3c8tA8oYOiBZpSR6cIRNi4HstU_5w",
  authDomain: "my-fiancee-47809.firebaseapp.com",
  projectId: "my-fiancee-47809",
  storageBucket: "my-fiancee-47809.appspot.com",
  messagingSenderId: "45063157351",
  appId: "1:45063157351:web:5a89fd9df276b5fced46c2",
  measurementId: "G-P507F38VQS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
