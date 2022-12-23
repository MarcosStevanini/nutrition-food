import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyA9-6nVopLJJ8A1bXXgECI20Mb7U5-Gbf8",
  authDomain: "nutriforyou-97348.firebaseapp.com",
  projectId: "nutriforyou-97348",
  storageBucket: "nutriforyou-97348.appspot.com",
  messagingSenderId: "683718581326",
  appId: "1:683718581326:web:e67630c439edd493d1b71f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);