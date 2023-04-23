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

async function getDashboardData(req) {
  const user = await User.findByPk(req.session.user_id);
  const project = await Project.findAll({
    raw: true,
  });
  const users = await User.findAll({
    raw: true,
  });
  const cards = await Card.findAll({
    where: {
      teammate_id: req.session.user_id
    },
    raw: true,
  });
  return {
    email: user.email,
    users: users,
    project: project,
    cards: cards
  };
}

router.get("/dashboard", isAuthenticated, async (req, res) => {
  const data = await getDashboardData(req);
  res.render("dashboard", data);
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
    const data = await getDashboardData(req)
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// Get one card
  router.get("/edit_card/:id", isAuthenticated, async (req, res) => {
    const card = await Card.findOne({
      where: {
        id: req.params.id,
      },
      raw: true,
    })
 
    if (card) {
    res.render("edit_card", {
      title: card.task_title,
      description: card.task_desc,
      category: card.task_cat,
      assignedUser: card.teammate_id,
    });
  } else {
    res.status(404).send("Task not found")
  }
  
  })

module.exports = router;
