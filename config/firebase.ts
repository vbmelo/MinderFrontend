import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAwGP13y66oxCow6ZW8ESQUIx4F0MDhszM",
    authDomain: "minder-app-8f23c.firebaseapp.com",
    projectId: "minder-app-8f23c",
    storageBucket: "minder-app-8f23c.appspot.com",
    messagingSenderId: "397774902434",
    appId: "1:397774902434:web:5cba1e53ffc4ee0d52f3fb"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth()