// Packages/Models used
const router = require("express").Router();
const { Post, User } = require('../models');

// /
router.get('/', async (req, res) => {
    // res.json("I can come from the homeRoutes file!");
    // try {
    //     const postData = await Post.findAll({
    //         include: [
    //             {
    //                 model: User,
    //                 attributes: ['username'],
    //             },
    //         ],
    //     });

    //     // const postData = await Post.findAll();
    //     const posts = postData.map((post) => post.get({ plain: true }))
    //     res.render('homepage', {
    //         posts,
    //         logged_in: req.session.logged_in
    //     })

    //     // res.status(200).json(postData);
    //     // res.render("homepage");
    // } catch (err) {
    //     res.status(500).json(err);
    // }

    // try {
    //     const UserInfo = await User.findByPk(req.params.id);

    //     res.status(200).json(UserInfo)
    // } catch (err) {
    //     res.status(500).json(err);
    // }

    try {
        const UserInfo = await User.findByPk(1);

        const serializedUserData = UserInfo.get({ plain: true });
        console.log(serializedUserData);
        res.render("homepage", serializedUserData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const PostData = await Post.findByPk(4);

        const serializedPostData = PostData.get({ plain: true });

        res.render("homepage", serializedPostData);
    } catch(err) {
        res.status(500).json(err);
    }
})

// router.get('/post/:id', async(req, res) => {
//     try {
//         const 
//     } catch (err) {

//     }
// });

module.exports = router;