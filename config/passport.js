const passportLocal = require("passport-local");

function passportConfig(passport) {
  console.log("Passport config called"); // add this line
  passport.use(
    new passportLocal.Strategy({ usernameField: "email" }, async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
          return done(null, false, { message: "Incorrect email or password." });
        }

        const isPasswordValid = await user.validatePassword(password);

        if (!isPasswordValid) {
          return done(null, false, { message: "Incorrect email or password." });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id);

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  });
}

module.exports = passportConfig;
