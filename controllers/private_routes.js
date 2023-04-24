const router = require("express").Router();
const { User } = require("../models/User");
const Project = require("../models/Project");
const Card = require("../models/Card");

function isAuthenticated(req, res) {
  if (!req.session.user_id) {
    return res.redirect("/");
  }
}

router.get("/dashboard", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);

    const projects = await Project.findAll({
      raw: true,
    });

    const users = await User.findAll({
      raw: true,
    });

    const cards = await Card.findAll({
      where: {
        user_id: req.session.user_id,
      },
      raw: true,
    });

    const statuses = cards
      .map((card) => card.status)
      .filter((value, index, array) => array.indexOf(value) === index);

    res.render("dashboard", {
      email: user.email,
      users,
      projects,
      cards,
      statuses,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/project", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);
    res.render("project", {
      email: user.email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/edit_card", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);

    const projects = await Project.findAll({
      raw: true,
    });

    const users = await User.findAll({
      raw: true,
    });

    const cards = await Card.findAll({
      where: {
        user_id: req.session.user_id,
      },
      raw: true,
    });

    const statuses = cards
      .map((card) => card.status)
      .filter((value, index, array) => array.indexOf(value) === index);

    res.render("edit_card", {
      email: user.email,
      users,
      projects,
      cards,
      statuses,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/cards", async (req, res) => {
  try {
    const { task_title, task_desc, task_cat, teammate_id } = req.body;
    const newCard = await Card.create({
      task_title,
      task_desc,
      task_cat,
      teammate_id,
      user_id: req.session.user_id,
    });
    res.status(201).json(newCard);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
