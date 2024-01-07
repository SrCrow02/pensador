const { database, app, ref, set, push, get } = require("../db/db");

async function createThoughts(thought, userId) {
    try {
        const thoughtsRef = ref(database, `thoughts/${userId}/`);
        const newThoughtRef = push(thoughtsRef);
        await set(newThoughtRef, { thought });
        console.log('Novo pensamento adicionado:', thought);
    } catch (error) {
        console.error('Erro ao criar pensamento:', error);
        throw error;
    }
}

async function showAllThoughts() {
    try {
        const thoughtsRef = ref(database, 'thoughts/');
        const snapshot = await get(thoughtsRef);

        if (snapshot.exists()) {
            const thoughts = snapshot.val();
            console.log('Todos os pensamentos:', thoughts);
            return thoughts;
        } else {
            console.log('Nenhum pensamento encontrado.');
            return null;
        }
    } catch (error) {
        console.error('Erro ao obter pensamentos:', error);
        throw error;
    }
}

async function showMyThoughts(userId) {
    try {
        const thoughtsRef = ref(database, `thoughts/${userId}`);
        const snapshot = await get(thoughtsRef);

        if (snapshot.exists()) {
            const thoughts = snapshot.val();
            console.log('Todos os pensamentos:', thoughts);
            return thoughts;
        } else {
            console.log('Nenhum pensamento encontrado.');
            return null;
        }
    } catch(error) {
        console.error('Erro ao obter pensamentos:', error);
        throw error;
    }
}

module.exports = { createThoughts, showAllThoughts, showMyThoughts };

