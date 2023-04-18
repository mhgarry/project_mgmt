const express = require('express');
const PORT = process.env.PORT || 3001;
// add api/hbc routes
const handlebars = require('handlebars');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// app.engine('hbs', engine({
//   extname: '.hbs' // change the file extension from .handlebars to .hbs
// }));


// app.set('view engine', 'hbs');
// app.set('/'); // add routes in here when done

app.listen(PORT, () => console.log('Server started on port %s', PORT));
