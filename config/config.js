const passport = reuqire('passport');
const LocalStrategy = require('passport-local');
//https://www.passportjs.org/howtos/password/ documentation on passport
//	function for checking usedata will have to replace some values just wrote from website as reference
passport.use(new LocalStrategy((username, password, cb) => {
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) { return cb(err); }
    if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }

    crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
      if (err) { return cb(err); }
      if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      return cb(null, user);
    });
  });
}));


///for routes file, will have to change some values, using as example
//example get route to get data from login and compare with database value
// app.get('/login', (req, res, next) => {
//   res.render('login');
// });
// //example post route for the user to send back their credentials to database. if values match then succsessRedirect, if not then faiulreRedirect
// app.post('/login/password', passport.authenticate('local', {
//   successRedirect: '/',
//   failureRedirect: '/login',
// }));

//example form HTML
/* <h1>Sign in</h1>
<form action="/login/password" method="post">
    <section>
        <label for="username">Username</label>
        <input id="username" name="username" type="text" autocomplete="username" required autofocus>
    </section>
    <section>
        <label for="current-password">Password</label>
        <input id="current-password" name="password" type="password" autocomplete="current-password" required>
    </section>
    <button type="submit">Sign in</button>
</form> */
