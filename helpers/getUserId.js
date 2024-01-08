const { auth } = require('../db/db')
const { getDatabase, ref, child, get } = require('firebase/database');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } = require('firebase/auth');

const firebaseAuth = getAuth(auth);
const database = getDatabase();

async function getUserId() {
    const user = firebaseAuth.currentUser;

    if (!user) {
        throw new Error("Usuário não autenticado. Faça o login.");
    }
    
    const userId = user.uid;  
    
    return userId;
}

module.exports = { getUserId }