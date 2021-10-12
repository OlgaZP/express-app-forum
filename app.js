const express = require('express');
const messageController = require('./controllers/message.controller');
const validate = require('./middleware/validate.mw');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Start with forum');
});

//GET messages
app.get('/messages', messageController.getMessages);

//POST-add message
app.post('/messages', validate.validateMessage, messageController.addMessage);

//PATCH
app.patch('/messages/:id', messageController.updateMessage);

//DELETE message
app.delete('/messages/:id', messageController.deleteMessage);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

module.exports = app;
