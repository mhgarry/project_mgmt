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

router.get("/main", (req, res) =>  {
    res.render("./layouts/main")
});

router.get("/login", (req, res) =>  {
    res.render("login")
});

router.get("/register", (req, res) => {
    res.render("register")
});


module.exports = router;