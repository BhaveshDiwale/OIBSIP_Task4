import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import env from "react-dotenv";

  const firebaseConfig = {
    apiKey: "AIzaSyBXUqnKO4TCGQyuRY18OeJA9USqgZSmMk4",
    authDomain: "login-authentication-c5f33.firebaseapp.com",
    projectId: "login-authentication-c5f33",
    storageBucket: "login-authentication-c5f33.appspot.com",
    messagingSenderId: "113900158468",
    appId: "1:113900158468:web:85b9e356b9afeb3c333f51",
    measurementId: "G-GSE7WZ261Q"
  };
  
  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);
