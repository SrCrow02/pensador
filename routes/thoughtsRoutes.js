const { addThoughts, showThoughts, showMy } = require("../controllers/thoughtsController");
const express = require("express")
const router = express.Router()

router.get("/add", (req, res) => {
    res.render("createIdea")
})

router.post("/add", addThoughts)

router.get("/", showThoughts)

router.get("/mythoughts", showMy)

module.exports = router