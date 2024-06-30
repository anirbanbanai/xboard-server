const express = require('express');
const router = express.Router();
const messageController = require('../../controllers/v1/message.controller');

router.get('/:user1/:user2', messageController.getMessages);
router.post('/', messageController.createMessage);
router.put('/:id', messageController.updateMessage);
router.delete('/:id', messageController.deleteMessage);

router.get('/new/:userId', messageController.getNewMessages);
router.patch('/read/:messageId', messageController.markAsRead);
module.exports = router;
