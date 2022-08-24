const express = require('express');
const fileDb = require('../fileDb');
const router = express.Router();

router.get('/', (req, res) => {
  const posts = fileDb.getItems();
  res.send(posts);
});

router.post('/', (req, res) => {
  if (!req.body.message) {
    return res.status(400).send({error: 'Data not valid'});
  }

  const date = new Date();

  const post = {
    message: req.body.message,
    datetime: date.toISOString()
  };

  if (req.body.author) post.auhtor = req.body.author;

  fileDb.addItem(post);

  res.send(post);
});

module.exports = router;