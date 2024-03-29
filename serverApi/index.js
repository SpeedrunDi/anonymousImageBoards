const express = require('express');
const cors = require('cors');
const fileDb = require('./fileDb');
const messages = require('./app/messages');

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use('/messages', messages);

fileDb.init();
app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});