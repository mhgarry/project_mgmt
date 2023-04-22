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
//****NEEDS WORK****
// trying to get the value of the User email to post when a User posts */
router.get("/dashboard", isAuthenticated, async (req, res) => {
    const user = await User.findByPk(req.session.user_id);
    // const userEmail = await User.findOne({
    //   where: { id: req.params.teammate_id }
    // })

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

router.get("/edit_card", isAuthenticated, async (req, res) => {
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

    let statuses = cards.map((card) => { 
      return card.status; 
    })
    statuses = statuses.filter((value, index, array) => array.indexOf(value) === index);

  res.render("edit_card", {
      email: user.email,
      users: users,
      project: project,
      cards: cards,
      statuses: statuses
  });
});

// router.put("/editcard", isAuthenticated, async (req, res) => {
//   const user = await User.findByPk(req.session.user_id);
//   res.send("edit_card", {
//       email: user.email
//   });
// });


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

//***NEEDS WORK****
// added logic to only get cards for user for dashboard page just to test
// needs to be based on req.params which is missing -CRS

async function getCardsForOneUser() {
  try {
    const cards = await Card.findAll({
      where: { teammate_id: 1 }
    });
    return cards;
  } catch (error) {
    console.error(error);
  }
}

getCardsForOneUser().then(cards => {
  console.log(cards);
});

module.exports = router;

