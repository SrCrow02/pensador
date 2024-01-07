const { register, userLogin } = require("../controllers/authController")
const express = require("express")
const routerAuth = express.Router()

routerAuth.get("/register", (req, res) => {
    res.render('register');
})

routerAuth.post("/register", register)

routerAuth.get("/login", (req, res) => {
    res.render('login')
})

routerAuth.post("/login", userLogin);

module.exports = routerAuth;