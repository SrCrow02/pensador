const { createThoughts, showAllThoughts, showMyThoughts, getThoughtById, updateThought } = require("../models/thoughtsModels");
const { getUserId } = require("../helpers/getUserId")

async function addThoughts(req, res) {
    let thought = req.body.thought;
    let id = await getUserId()

    await createThoughts(thought, id);
    res.redirect("/");
}

async function showThoughts(req, res) {
    try {
        const thoughts = await showAllThoughts();
        console.log('Pensamentos obtidos:', thoughts);
        res.render("index", { thoughts });
    } catch (error) {
        console.error('Erro ao exibir pensamentos:', error);
        res.status(500).send('Erro interno ao exibir pensamentos.');
    }
}

async function showMy(req, res) {
    try {
        const id = await getUserId();
        const myThoughts = await showMyThoughts(id);

        res.render('myThoughts', { myThoughts });
    } catch (error) {
        // Lide com erros adequadamente
        console.error('Erro ao mostrar meus pensamentos:', error);
        res.status(500).send('Erro interno do servidor');
    }
}

async function getThought(req, res){
    const id = await getUserId();

    const thoughtId = req.params.id;

    const thought = await getThoughtById(id, thoughtId); 

    res.render('editThought', { thought });
}

async function editThought(req, res) {
    const { content } = req.body;
    const thoughtId = req.params.id;

    try{
        const user = await getUserId()
        const thought = await getThoughtById(user, thoughtId)

        updateThought(user, thought, content);

        res.redirect("/mythoughts")
    } catch (err) {
        console.log(err)
    }
}

module.exports = { addThoughts, showThoughts, showMy, getThought, editThought }
