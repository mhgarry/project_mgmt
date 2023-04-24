const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

function passportConfig(passport) {
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // Find the user with the provided email
    User.findOne({ where: { email } }).then((user) => {
      // If the user does not exist, return an error
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      // Use the validatePass method to compare the provided password with the encrypted password in the database
      user.validatePass(password).then((isMatch) => {
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false, { message: 'Incorrect email or password.' });
      });
    }).catch((err) => console.log(err));
  }));

  // Serialize user ID to the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize user ID from the session and retrieve the user from the database
  passport.deserializeUser((id, done) => {
    User.findByPk(id).then((user) => {
      done(null, user);
    }).catch((err) => console.log(err));
  });
}
module.exports = passportConfig;
