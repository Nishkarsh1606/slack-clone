import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDU9IEr38bfoGZVAZmtBOuvn5dH21Vp9Vo",
  authDomain: "slack-nishkarsh.firebaseapp.com",
  projectId: "slack-nishkarsh",
  storageBucket: "slack-nishkarsh.appspot.com",
  messagingSenderId: "854701466065",
  appId: "1:854701466065:web:c200f16e0b02df965800f0"
};

const app = initializeApp(firebaseConfig);

export default app