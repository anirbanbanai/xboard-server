const Message = require('../../models/v1/message.model');

const getMessagesBetweenUsers = async (user1, user2) => {
  return await Message.find({
    $or: [
      { sender: user1, receiver: user2 },
      { sender: user2, receiver: user1 },
    ],
  }).sort({ timestamp: 1 });
};

const createMessage = async (messageData) => {
  const message = new Message(messageData);
  return await message.save();
};

const updateMessage = async (id, messageData) => {
  return await Message.findByIdAndUpdate(id, messageData, { new: true });
};

const deleteMessage = async (id) => {
  return await Message.findByIdAndDelete(id);
};


// Fetch new (unread) messages for a user
const getNewMessages = async (userId) => {
    try {
      const newMessages = await Message.find({ receiver: userId, read: false }).populate('sender', 'name');
      return newMessages;
    } catch (error) {
      throw new Error('Error fetching new messages: ' + error.message);
    }
  };
  
  // Mark a message as read
  const markMessageAsRead = async (messageId) => {
    try {
      await Message.findByIdAndUpdate(messageId, { read: true });
      return true;
    } catch (error) {
      throw new Error('Error marking message as read: ' + error.message);
    }
  };

module.exports = {
  getMessagesBetweenUsers,
  createMessage,
  updateMessage,
  deleteMessage,
  getNewMessages,
  markMessageAsRead
};
