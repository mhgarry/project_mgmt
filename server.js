const express = require('express');
const PORT = process.env.PORT || 3001;
// add api/hbc routes
const handlebars = require('handlebars');

const app = express();

app.use(express.static('public'));
