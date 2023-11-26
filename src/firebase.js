import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwEr9BSVHaEYusNnJoVcx3Gj2znG1KQ2Y",
  authDomain: "chat-app-abd08.firebaseapp.com",
  projectId: "chat-app-abd08",
  storageBucket: "chat-app-abd08.appspot.com",
  messagingSenderId: "1015934311002",
  appId: "1:1015934311002:web:d040a58332f86332d29663"
};

 export const app = initializeApp(firebaseConfig);