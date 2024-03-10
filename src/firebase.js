import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDY3UuHfdedtR-sEr4pwLZtyCg8LMBoi9o",
    authDomain: "geeks-40666.firebaseapp.com",
    projectId: "geeks-40666",
    storageBucket: "geeks-40666.appspot.com",
    messagingSenderId: "212970108358",
    appId: "1:212970108358:web:b3664769cb368625546ec7"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)