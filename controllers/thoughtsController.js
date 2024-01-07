const { createThoughts, showAllThoughts, showMyThoughts } = require("../models/thoughtsModels");
const { getUserId } = require("../models/authModels")

async function addThoughts(req, res) {
    let thought = req.body.thought;
    let id = await getUserId()

    await createThoughts(thought, id);
    res.redirect("/");
}

async function showThoughts(req, res) {
    try {
        const thoughts = await showAllThoughts();
        res.render("index", { thoughts });
    } catch (error) {
        console.error('Erro ao exibir pensamentos:', error);
        res.status(500).send('Erro interno ao exibir pensamentos.');
    }
}

async function showMy(req, res) {
    const id = await getUserId();
    const my = await showMyThoughts(id)

    res.render('myThoughts', { my });
}

module.exports = { addThoughts, showThoughts, showMy }
