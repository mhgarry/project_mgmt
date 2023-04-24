require("dotenv").config();
const express = require('express');
const session = require('express-session');
const { engine } = require('express-handlebars');
const passport = require('passport');
const passportConfig = require('./config/passport')

// Call passportConfig function and pass in passport object
passportConfig(passport);

const PORT = process.env.PORT || 3001;
const routes = require('./controllers');
const db = require('./config/connection');

// add api/hbc routes
const app = express();

app.engine('hbs', engine({
  extname: '.hbs',
}));

app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session({
}));


app.use("/", [routes]);

// app.engine('hbs', engine({
//   extname: '.hbs' // change the file extension from .handlebars to .hbs
// }));

// app.set('view engine', 'hbs');
// app.set('/'); // add routes in here when done

db.sync().then(() => {
  app.listen(PORT, () => console.log('Server started on port %s', PORT));
});
