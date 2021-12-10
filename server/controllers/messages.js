const Message = require("../models/Message");
module.exports.createMessage = (req, res) => {
  let { username, email, msg, mobile } = req.body;

  Message.create({
    username,
    email,
    msg,
    mobile,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.editMessage = (req, res) => {};

module.exports.deleteMessage = (req, res) => {
  const { id } = req.params;
  Message.destroy({
    where: {
      id,
    },
  })
    .then((respones) => {
      res.send(respones === 0 ? "Failed to delete" : "Deleteing successfully");
    })
    .catch((error) => {
      res.json({ "err message": error.message });
    });
};
