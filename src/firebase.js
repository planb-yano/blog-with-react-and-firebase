import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRkiud5yYzOaWt8Tp8Msr3NNzX7Zm452k",
  authDomain: "blog-d9b06.firebaseapp.com",
  projectId: "blog-d9b06",
  storageBucket: "blog-d9b06.appspot.com",
  messagingSenderId: "405449916030",
  appId: "1:405449916030:web:a7ed9e74eb3ba9b189a22f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
