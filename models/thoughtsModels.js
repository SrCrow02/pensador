const { database, app, ref, set, push, get } = require("../db/db");
const { getUserId } = require("../helpers/getUserId")

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
        const thoughtsRef = ref(database, `thoughts/`);
        const snapshot = await get(thoughtsRef);

        if (snapshot.exists()) {
            const thoughtsValue = snapshot.val();
            console.log('Todos os pensamentos:', thoughtsValue);
            return thoughtsValue;
        } else {
            console.log('Nenhum pensamento encontrado.');
            return null;
        }
    } catch(error) {
        console.error('Erro ao obter pensamentos:', error);
        throw error;
    }
}

async function showMyThoughts(userId) {
    try {
        const thoughtsRef = ref(database, `thoughts/${userId}/`);
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

async function getThoughtById(userId, thoughtId) {
    const thoughtRef = ref(database, `thoughts/${userId}/${thoughtId}`);
    const snapshot = await get(thoughtRef);

    if (snapshot.exists()) {
        return { id: thoughtId, ...snapshot.val() };
    } else {
        throw new Error('Pensamento não encontrado');
    }
}

async function updateThought(userId, thoughtId, newContent){
    const thoughtRef = ref(database, `thoughts/${userId}/${thoughtId}`);
    await update(thoughtRef, { thought: newContent })
}

module.exports = { createThoughts, showAllThoughts, showMyThoughts, getThoughtById, updateThought };

