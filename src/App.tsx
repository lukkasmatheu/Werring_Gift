import React, { useEffect } from 'react';
import Routers from './Routes/Routes';
import StoreProvider from './context/Provider';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDITqVhMhjtsuWtB4_wDlGo80yyA4phKYs",
    authDomain: "casamento-5b991.firebaseapp.com",
    projectId: "casamento-5b991",
    storageBucket: "casamento-5b991.appspot.com",
    messagingSenderId: "1050589194693",
    appId: "1:1050589194693:web:1991b6e15f039b1e5183ac",
    measurementId: "G-TPXR6R05D8"
});

export const db = getFirestore(firebaseConfig);


const analytics = getAnalytics(firebaseConfig);

const App: React.FC = () => (
    <Routers />
);

export default App;
