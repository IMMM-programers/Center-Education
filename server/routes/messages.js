const express = require("express");
const router = express.Router();
const {
  createMessages,
  editMessages,
  deleteMessages,
  getMessage,
} = require("../controllers/message");

// @route  POST api/messages + /createMessage
// @desc   add Message
router.post("/createMessage", createMessages);

// @route  PATCH api/messages + /editMessage
// @desc   Edit Message
router.patch("/editMessage/:id", editMessages);

// @route  delete api/messages + /deleteMessage
// @desc   Delete Message
router.delete("/deleteMessage/:id", deleteMessages);
// @route  get api/messages + /getMessage
// @desc   get Message
router.get("/getMessage", getMessage);

module.exports = router;
