const { createNewUser, login } = require("../models/authModels");

async function register(req, res) {
    const { email, password } = req.body;
    try {
        createNewUser(email, password);   
        console.log("Cadastrado com sucesso!");
        res.redirect("auth/login")
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Erro ao registrar usuário: ${errorCode} - ${errorMessage}`);
    }
}

async function userLogin(req, res) {
    const { email, password } = req.body;

    try{
        login(email, password);
        console.log("Usuario logado com sucesso!")
        res.redirect("/")
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Erro ao registrar usuário: ${errorCode} - ${errorMessage}`);
    }
}

module.exports = { register, userLogin }