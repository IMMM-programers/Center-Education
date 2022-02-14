const express = require("express");
const router = express.Router();
const {
  createMessage,
  editMessage,
  deleteMessage,
  getMessage,
} = require("../controllers/message");

// @route  POST api/messages + /createMessage
// @desc   add Message
router.post("/createMessage", createMessage);

// @route  PATCH api/messages + /editMessage
// @desc   Edit Message
router.patch("/editMessage/:id", editMessage);

// @route  delete api/messages + /deleteMessage
// @desc   Delete Message
router.delete("/deleteMessage/:id", deleteMessage);
// @route  get api/messages + /getMessage
// @desc   get Message
router.get("/getMessage", getMessage);

module.exports = router;
