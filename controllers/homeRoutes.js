const router = require("express").Router();

router.get('/', (req, res) => {
    res.json("I can come from the homeRoutes file!");
})

module.exports = router;