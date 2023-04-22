const router = require("express").Router();
const User = require("../models/User");
const Project = require("../models/Project");
const Card = require("../models/Card");

function isAuthenticated(req, res, next) {
    if (!req.session.user_id) {
        return res.redirect("/");
    }
    next();
}
// adding data to the view for handlebars -CRS
router.get("/dashboard", isAuthenticated, async (req, res) => {
    const user = await User.findByPk(req.session.user_id);

    const project = await Project.findAll({
      raw: true,
    });

    const users = await User.findAll({
      raw: true,
    });

    const cards = await Card.findAll({
      raw: true,
    });

    res.render("dashboard", {
        email: user.email,
        users: users,
        project: project,
        cards: cards
    });
});

router.get("/project", isAuthenticated, async (req, res) => {
  const user = await User.findByPk(req.session.user_id);
  res.render("project", {
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

//added logic to only get cards for 1 user for dashboard page -CRS

async function getCardsForUserOne() {
  try {
    const cards = await Card.findAll({
      where: { teammate_id: 1 }
    });
    return cards;
  } catch (error) {
    console.error(error);
  }
}

getCardsForUserOne().then(cards => {
  console.log(cards);
});

module.exports = router;

