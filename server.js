//FurFoodz server.js
//Last Edited: 25/08/21

//Requires
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
require('dotenv').config();


//Setup app
const app = express();

//Setup Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
