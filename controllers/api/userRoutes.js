// Package for router
const router = require("express").Router();

// Bring in User table
const { User } = require("../../models");

// Route that creates new user
// /api/user
router.post('/', async(req, res) => {
    try {
        const userData = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        // req.session.save(() => {
            // req.session.logged_in = true;

            res.status(200).json(userData);
        // });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Gets user information based on id
// /api/user/login/id
router.get('/login/:id', async(req, res) => {
    try {
        const UserInfo = await User.findByPk(req.params.id)
    
        res.status(200).json(UserInfo);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;