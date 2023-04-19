const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index", {
        
    })
});

router.get("/project", (req, res) => {
    res.render("project", {

    })
});

router.get("/dashboard", (req, res) => {
    res.render("dashboard", {

    })
});

module.exports = router;