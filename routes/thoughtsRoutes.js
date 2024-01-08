const { addThoughts, showThoughts, showMy, getThought, editThought } = require("../controllers/thoughtsController");
const express = require("express");
const router = express.Router()

router.get("/add", (req, res) => {
    res.render("createIdea")
})

router.post("/add", addThoughts)

router.get("/", showThoughts)

router.get("/mythoughts", showMy)

router.get("/edit/:id", getThought)
router.post("/edit/:id", editThought)

module.exports = router