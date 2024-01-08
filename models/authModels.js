const { auth } = require('../db/db');
const { getDatabase, ref, child, get } = require('firebase/database');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } = require('firebase/auth');

const firebaseAuth = getAuth(auth);
const database = getDatabase();

async function createNewUser(email, password) {
    try{
        createUserWithEmailAndPassword(firebaseAuth, email, password)
    } catch(err){
        console.log(err);
        res.status(500).send('Erro interno ao criar usuario.');
    }
}

async function login(email, password) {
    try{
        signInWithEmailAndPassword(firebaseAuth, email, password)
    } catch (err) {
        res.status(500).send('Erro interno ao logar com o usuario.');
    }
}

module.exports = { createNewUser, login }