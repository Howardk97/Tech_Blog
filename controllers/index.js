// Bring in packages/folders
const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api')

// router.get('/', (req, res) => {
//     res.json('Route works!');
// });

// /
router.use('/', homeRoutes);

// /api
router.use('/api', apiRoutes);

module.exports = router;