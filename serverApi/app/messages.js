const express = require('express');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const {nanoid} = require('nanoid');
const fileDb = require('../fileDb');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname));
  }
});

const upload = multer({storage});

router.get('/', (req, res) => {
  const posts = fileDb.getItems();
  res.send(posts);
});

router.post('/', upload.single('image'), (req, res) => {
  if (!req.body.message) {
    return res.status(400).send({error: 'Data not valid'});
  }

  const date = new Date();

  const message = {
    message: req.body.message,
    datetime: date.toISOString()
  };

  if (req.body.author) message.author = req.body.author;

  if (req.file) message.image = req.file.filename;

  fileDb.addItem(message);

  res.send(message);
});

module.exports = router;