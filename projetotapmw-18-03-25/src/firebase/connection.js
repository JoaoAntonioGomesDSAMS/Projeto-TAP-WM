// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsOF3JWLTh756c2tO9xfR6HHI-6YqhPMY",
  authDomain: "projeto-tarde-tapwm-4cc74.firebaseapp.com",
  projectId: "projeto-tarde-tapwm-4cc74",
  storageBucket: "projeto-tarde-tapwm-4cc74.firebasestorage.app",
  messagingSenderId: "578873591151",
  appId: "1:578873591151:web:6059eb83601df8b08d549a"
};

const app = initializeApp(firebaseConfig);
 
const db = getFirestore(app);
 
export { db };