//FurFoodz server.js
//Last Edited: 25/08/21

//Requires
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection')
// const session = require('express-session');
// const routes = require('./controllers/');
const path = require('path')
require('dotenv').config();

//Setup app
const app = express();
const PORT = process.env.PORT || 3001

//Use express middleware
app.use(express.static(path.join(__dirname, '/public')));

//Setup path for html routes
const htmlRoutes = require('./routes/htmlRoutes/index')

//Set endpoints for html routes
app.use('/', htmlRoutes);

//Setup Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Sync sequelize to database
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
})
