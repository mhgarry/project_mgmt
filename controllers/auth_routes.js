const router = require("express").Router();
const User = require("../models/User");

// login post
router.post("/", async (req, res) => {
    const user_data = req.body;
    
    const user = await User.findOne({
        where: {
            email: user_data.email
        }
    });

    if (!user) return res.redirect("/");

    const valid_pass = await user.validatePass(user_data.password);

    if (!valid_pass) return res.redirect("/");

    req.session.user_id = user.id;

    res.redirect("/dashboard");
});

// register post
router.post("/", async (req, res) => {
    const user_data = req.body;
    
    try {
        const user = await User.create(user_data);
        req.session.user_id = user.id;
        res.redirect("/dashboard");

    } catch (err) {
        res.redirect("/");
    }
});

// user logout
router.get("/", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;