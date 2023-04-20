const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {

  });
});

router.get('/project', (req, res) => {
  res.render('project', {

  });
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', {

  });
});

// router.get('../views/login.hbs', (req, res) => {
//   res.render('login', {

//   });
// });

module.exports = router;
