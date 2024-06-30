const messageService = require('../../services/v1/message.service');

const getMessages = async (req, res) => {
  try {
    const { user1, user2 } = req.params;
    const messages = await messageService.getMessagesBetweenUsers(user1, user2);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMessage = async (req, res) => {
  try {
    const newMessage = await messageService.createMessage(req.body);
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateMessage = async (req, res) => {
  try {
    const updatedMessage = await messageService.updateMessage(req.params.id, req.body);
    res.json(updatedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteMessage = async (req, res) => {
  try {
    await messageService.deleteMessage(req.params.id);
    res.json({ message: 'Message deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Controller to get new messages for a user
const getNewMessages = async (req, res) => {
    try {
      const userId = req.params.userId;
      const newMessages = await messageService.getNewMessages(userId);
      res.json(newMessages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Controller to mark a message as read
  const markAsRead = async (req, res) => {
    try {
      const { messageId } = req.params;
      await messageService.markMessageAsRead(messageId);
      res.status(200).send('Message marked as read');
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  getMessages,
  createMessage,
  updateMessage,
  deleteMessage,
  getNewMessages,
  markAsRead
};
