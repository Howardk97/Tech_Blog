// Libraries and Packages and files used
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers')

// Create handlebars
const hbs = exphbs.create({});

// initialize model
// const model = require('./models');

// initialize app
const app = express();

// Set the engine for express-handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Accept json data
app.use(express.json());
app.use(express.urlencoded());

// Connect to public folder
app.use(express.static(path.join(__dirname, "public")));

// Use the controllers folder
app.use(routes);

// Port for server
const PORT = process.env.PORT || 3001;

// Connecting to sequelize and telling user when server is running
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT # http://localhost:${PORT}`);
    });
})