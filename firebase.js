// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGsdf6DeU_zOhhw-e_N_m_A_oCK-1lRPg",
  authDomain: "x-clone-8fb06.firebaseapp.com",
  projectId: "x-clone-8fb06",
  storageBucket: "x-clone-8fb06.appspot.com",
  messagingSenderId: "880524853164",
  appId: "1:880524853164:web:92c61d71d2b1a319418409",
  measurementId: "G-872XJ1NLHJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
