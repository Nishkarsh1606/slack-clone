import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDU9IEr38bfoGZVAZmtBOuvn5dH21Vp9Vo",
  authDomain: "slack-nishkarsh.firebaseapp.com",
  projectId: "slack-nishkarsh",
  storageBucket: "slack-nishkarsh.appspot.com",
  messagingSenderId: "854701466065",
  appId: "1:854701466065:web:c200f16e0b02df965800f0"
};

//initialise firebase
const app = initializeApp(firebaseConfig);

//setup google auth
const auth= getAuth(app)
const provider= new GoogleAuthProvider()

//setup firestore
const db=getFirestore(app)
const messagesRef=collection(db,'general')

export {auth,provider,messagesRef}
export default app