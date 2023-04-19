const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index", {
        
    })
});

router.get("/project", (req, res) => {
    res.render("project", {

    })
});

module.exports = router;