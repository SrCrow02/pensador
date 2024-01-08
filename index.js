const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

let PORT = 5080;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const router = require("./routes/thoughtsRoutes")
app.use("/", router)

const routerAuth = require("./routes/authRoutes")
app.use("/auth", routerAuth)

app.listen(PORT, () => {
    console.log(`Estou rodando na rota ${PORT}`);
})