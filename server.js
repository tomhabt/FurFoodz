//FurFoodz server.js
//Last Edited: 25/08/21

//Requires
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const session = require('express-session');
// const routes = require('./controllers/');


//Handle bars pages?
// const signup = require('./views/signup.handlebars');
// const btn = signup.getElementById(signUpBtn);

const path = require('path');
require('dotenv').config();

//Setup app
const app = express();
const PORT = process.env.PORT || 3001

//Use middleware
app.use(express.static(path.join(__dirname, '/public')));

//Setup path for routes
const routes = require('./routes/index');

//Set endpoints for routes
app.use('/', routes);

//Setup Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, () => console.log('App on PORT ' + PORT));