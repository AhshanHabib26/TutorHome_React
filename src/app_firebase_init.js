import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAn-uDQcbztVQenS6yMZ29Vy3aTqJC-STQ",
  authDomain: "tutorh-7de1a.firebaseapp.com",
  projectId: "tutorh-7de1a",
  storageBucket: "tutorh-7de1a.appspot.com",
  messagingSenderId: "1096172355326",
  appId: "1:1096172355326:web:834eb3a243e142ea092faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth