// Jag valde att lägga alla uppgifter och firebase-konfigurationer i denna modul
// för att skilja firebase-basen från mina egenskrivna funktioner.


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, query, where } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAPGZ26M5xovGSmt4CfvJttCQoCBJYaUU4",
    authDomain: "de-ve-de-f6c9b.firebaseapp.com",
    projectId: "de-ve-de-f6c9b",
    storageBucket: "de-ve-de-f6c9b.appspot.com",
    messagingSenderId: "763838063478",
    appId: "1:763838063478:web:843dadca7eeaf4cf6e5057"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { collection, addDoc, getDocs, deleteDoc, doc, query, where }
export { app, db }