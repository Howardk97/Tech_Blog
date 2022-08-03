const router = require('express').Router();

const { POST, Post } = require('../../models');

// Create a post
// /api/post
router.post('/', async(req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            text: req.body.text
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id
            }
        });

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// router.get()
module.exports = router;