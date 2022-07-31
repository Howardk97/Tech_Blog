// Packages
const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');

// Tell application that we are using the controllers folder
const routes = require('./controllers')

// initialize model
const model = require('./models');

// initialize app
const app = express();

// Connect to json file
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