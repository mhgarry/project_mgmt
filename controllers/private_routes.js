const router = require("express").Router();
const User = require("../models/User");
const Card = require("../models/Card")

function isAuthenticated(req, res, next) {
    if (!req.session.user_id) {
        return res.redirect("/login");
    }
    next();
}

router.get("/dashboard", isAuthenticated, async (req, res) => {
    const user = await User.findByPk(req.session.user_id);
    res.render("dashboard", {
        email: user.email
    });
});

router.post("/cards", async (req, res) => {
    try {
      const { task_title, task_desc, task_cat, teammate_id } = req.body;
      const newCard = await Card.create({
        task_title,
        task_desc,
        task_cat,
        teammate_id,
      });
      res.status(201).json(newCard);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });

module.exports = router;