const router = require('express').Router();


function loggedIn(req, res, next) {
  if (req.session.id) return res.redirect("/dashboard")
  next();
}

router.get('/', loggedIn, (req, res) => {
  res.render('index', {

  });
});

router.get('/project', loggedIn, (req, res) => {
  res.render('project', {

  });
});

router.get('/dashboard', loggedIn, (req, res) => {
  res.render('dashboard', {

  });
});

// router.get('../views/login.hbs', (req, res) => {
//   res.render('login', {

//   });
// });

module.exports = router;
