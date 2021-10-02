const { v4: uuidv4 } = require('uuid');

const messagesDb = [
  {
    id: uuidv4(),
    message: 'message 1',
    author: 'auth1@gmail.com',
    createdAt: '2021-09-23',
  },
  {
    id: uuidv4(),
    message: 'message 2',
    author: 'auth2@gmail.com',
    createdAt: '2021-09-29',
  },
  {
    id: uuidv4(),
    message: 'message 3',
    author: 'auth3@gmail.com',
    createdAt: '2021-09-27',
  },
];

class Message {
  static messages = messagesDb;

  static getMessages () {
    return Message.messages;
  }

  static addMessage (body) {
    const postedMessage = { id: uuidv4(), ...body, createdAt: new Date() };
    Message.messages.push(postedMessage);
    return Message.messages[Message.messages.length - 1];
  }

  static updateMessage (id, body) {
    const foundMessage = Message.messages.find(m => m.id == id);
    const updatedIndex = Message.messages.indexOf(foundMessage);

    Message.messages[updatedIndex] = { ...foundMessage, ...body };

    return Message.messages[updatedIndex];
  }

  static deleteMessage (id) {
    const deletedIndex = Message.messages.findIndex(m => m.id == id);
    const [deletedMessage] = Message.messages.splice(deletedIndex, 1);

    return deletedMessage;
  }
}

module.exports = Message;
