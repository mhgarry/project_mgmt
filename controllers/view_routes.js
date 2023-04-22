const router = require('express').Router();


function isLoggedIn(req, res, next) {
  if (req.session.user_id) return res.redirect("/dashboard")
  next();
}

router.get('/', isLoggedIn, (req, res) => {
  res.render('index');
});


router.get("/login", isLoggedIn, (req, res) => {
  res.render("login")
});

router.get("/register", isLoggedIn, (req, res) => {
  res.render("register")
});

// router.get('../views/login.hbs', (req, res) => {
//   res.render('login', {

//   });
// });

module.exports = router;
