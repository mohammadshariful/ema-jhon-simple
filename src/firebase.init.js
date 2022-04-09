import { getAuth, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAse5ZGno8bKYTwl2ggHpFN-QG6RAUB7cQ",
  authDomain: "ema-jhon-simple-a5b4f.firebaseapp.com",
  projectId: "ema-jhon-simple-a5b4f",
  storageBucket: "ema-jhon-simple-a5b4f.appspot.com",
  messagingSenderId: "613368119967",
  appId: "1:613368119967:web:dfb564777ad1e5242398aa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
