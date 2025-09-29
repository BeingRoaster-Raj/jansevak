// src/firebase.js
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBjLBz6bZ2UVp7UkdF0IdKx8aGt3T2qLx0",
  authDomain: "jansevak-b2254.firebaseapp.com",
  projectId: "jansevak-b2254",
  storageBucket: "jansevak-b2254.appspot.com",   // ✅ fixed here
  messagingSenderId: "1089053095327",
  appId: "1:1089053095327:web:99a4e06f09e92964d379aa"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export { auth, googleProvider, facebookProvider }
