const Message = require('./../models/message');

module.exports.getMessages = (req, res) => {
  const postedMessages = Message.getMessages();
  res.status(200).send(postedMessages);
};

module.exports.addMessage = (req, res) => {
  const { body } = req;

  const createdMessage = Message.addMessage(body);

  res.status(201).send(createdMessage);
};

module.exports.updateMessage = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const updatedMessage = Message.updateMessage(id, body);

  res.status(201).send(updatedMessage);
};

module.exports.deleteMessage = (req, res) => {
  const {
    params: { id },
  } = req;

  const deletedMessage = Message.deleteMessage(id);

  if (deletedMessage) {
    res.status(200).send(deletedMessage);
  } else {
    res.status(404).send('Something goes wrong!');
  }
};
