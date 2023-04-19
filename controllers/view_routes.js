const router = require("express").Router();
const handlebar = require("express-handlebars")
const path = require("path");

router.get("/", async (req, res) => {
    res.render("index", {

    })
});

module.exports = router;
