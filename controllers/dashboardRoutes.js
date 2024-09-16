const router = require('express').Router();
const { Post } = require('../models');


router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({

    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      dashboard: true,
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new', (req, res) => {
  res.render('newPost', {
    dashboard: true,
  });
});

router.get('/edit/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('editPost', {
        dashboard: true,
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
