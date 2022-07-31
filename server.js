// Packages
const express = require('express');
const sequelize = require('./config/connection');

// initialize model
const model = require('./models');

// initialize app
const app = express();

// Port for server
const PORT = process.env.PORT || 3001;

// Connecting to sequelize and telling user when server is running
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT # http://localhost:${PORT}`);
    });
})