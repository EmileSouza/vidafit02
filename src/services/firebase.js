import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ⚠️ Substitua pelas suas credenciais do Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyBazbU4RY1NPgfQ3w1DxhljP-YInP7k99g",
  authDomain: "vidafit02-2ff2c.firebaseapp.com",
  projectId: "vidafit02-2ff2c",
  storageBucket: "vidafit02-2ff2c.firebasestorage.app",
  messagingSenderId: "777877569707",
  appId: "1:777877569707:web:19b2b95f85cc4d69ea37ee",
  measurementId: "G-EJC310QXM2"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);