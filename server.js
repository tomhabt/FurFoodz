//FurFoodz server.js
//Last Edited: 25/08/21

//Requires
const express = require('express');
const exphbs = require('express-handlebars');
//const sequelize = require('./config/connection');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const path = require('path');
require('dotenv').config();


//Setup app
const app = express();
const PORT = process.env.PORT || 3001

//Use middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(cookieParser());
app.use(
    session({
        key: "user_sid",
        secret: "somerandonstuffs",
        resave: false,
        saveUninitialized: false,
    })
);

//Check if user cookie is there
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        console.log('Cleared Cookie');
        res.clearCookie("user_sid");
    }
    next();
});




//Setup path for routes
const routes = require('./routes/index');

//Set endpoints for routes
app.use('/', routes);

//Setup Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, () => console.log('App on PORT ' + PORT));