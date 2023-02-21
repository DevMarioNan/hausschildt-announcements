import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxo1upScJOg0Dk1CgEFw4qUpDr0ZXa0R8",
    authDomain: "hausschildt-announcements.firebaseapp.com",
    projectId: "hausschildt-announcements",
    storageBucket: "hausschildt-announcements.appspot.com",
    messagingSenderId: "429715511528",
    appId: "1:429715511528:web:3b4a03d58dbf695d1a115d",
    measurementId: "G-VWFZBDRWKL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth
        , db };