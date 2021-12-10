const express = require('express');
const router = express.Router();
const { createMessage, editMessage, deleteMessage } = require('../controllers/messages');

// @route  POST api/messages + /createMessage
// @desc   add Message
router.post(
  '/createMessage',
  createMessage,
);

// @route  PATCH api/messages + /editMessage
// @desc   Edit Message
router.patch(
  '/editMessage/:id',
  editMessage,
);


// @route  delete api/messages + /deleteMessage
// @desc   Delete Message
router.delete(
  '/deleteMessage/:id',
  deleteMessage,
);

module.exports = router;