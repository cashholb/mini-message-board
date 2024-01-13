let express = require('express');
let router = express.Router();

const Message = require('../models/message'); // Import the Message model

const title = 'Threadit';

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // Retrieve messages from the MongoDB collection
    const messages = await Message.find();
    res.render('index', { title: title, messages: messages });
  } catch (error) {
    next(error);
  }
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: title });
});

router.post('/new', async function(req, res, next) {
  await Message.create({user: req.body.username, message: req.body.message})
  res.redirect('/');
});

module.exports = router;
