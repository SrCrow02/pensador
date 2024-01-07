const { auth } = require('../db/db');
const { getDatabase, ref, child, get } = require('firebase/database');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } = require('firebase/auth');

const firebaseAuth = getAuth(auth);
const database = getDatabase();

async function createNewUser(email, password) {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
}

async function login(email, password) {
    signInWithEmailAndPassword(firebaseAuth, email, password)
}

async function getUserId() {
    const user = firebaseAuth.currentUser;
    
    const userId = user.uid;  
    
    return userId;
}

module.exports = { createNewUser, login, getUserId }