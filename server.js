

const express = require('express');
const PORT = process.env.PORT || 3001;
const routes = require("./controllers")
const { engine } = require("express-handlebars");


// add api/hbc routes

const app = express();



app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.engine("hbs", engine({ 
   extname: ".hbs" 
}));

app.set("view engine", "hbs");
app.set("views", "./views");

app.use(routes);


// app.engine('hbs', engine({
//   extname: '.hbs' // change the file extension from .handlebars to .hbs
// }));


// app.set('view engine', 'hbs');
// app.set('/'); // add routes in here when done

app.listen(PORT, () => console.log('Server started on port %s', PORT));
