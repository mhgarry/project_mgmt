const router = require('express').Router();


function isLoggedIn(req, res, next) {
  if (req.session.user_id) return res.redirect("/dashboard")
  next();
}

router.get('/', isLoggedIn, (req, res) => {
  res.render('index', {

  });
});

router.get('/project', isLoggedIn, (req, res) => {
  res.render('project', {

  });
});

router.get('/dashboard', isLoggedIn, (req, res) => {
  res.render('dashboard', {

  });
});

// router.get('../views/login.hbs', (req, res) => {
//   res.render('login', {

//   });
// });

module.exports = router;
