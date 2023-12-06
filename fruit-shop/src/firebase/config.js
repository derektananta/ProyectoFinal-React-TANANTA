import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPm1J0D6CraA5ohgVQshKE2Y6SIqt0IJM",
  authDomain: "fruitshop-5db5e.firebaseapp.com",
  projectId: "fruitshop-5db5e",
  storageBucket: "fruitshop-5db5e.appspot.com",
  messagingSenderId: "655560316280",
  appId: "1:655560316280:web:6153cfe5e77d611a24648d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);