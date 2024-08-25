import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { initializeApp} from "firebase/app";
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyB5ldYU8E2AuXzrfqOZwgZHD0U_TPO5Bs0",
  authDomain: "mi-proyecto-pessi.firebaseapp.com",
  projectId: "mi-proyecto-pessi",
  storageBucket: "mi-proyecto-pessi.appspot.com",
  messagingSenderId: "1042785438495",
  appId: "1:1042785438495:web:a1bc9a8586caff98a2be2a"
};
// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
