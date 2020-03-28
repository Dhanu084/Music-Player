import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDtFZcWYhmh5wfRBEWi_JtD0FSMXe3Bbfs",
  authDomain: "cart-c9fd0.firebaseapp.com",
  databaseURL: "https://cart-c9fd0.firebaseio.com",
  projectId: "cart-c9fd0",
  storageBucket: "cart-c9fd0.appspot.com",
  messagingSenderId: "888407523331",
  appId: "1:888407523331:web:b76cf987f14651dd864e36"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

