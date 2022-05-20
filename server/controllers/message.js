const Messages = require("../models/Message");

module.exports.createMessages = (req, res) => {
  let { userName, email, messageContent, phoneNumber } = req.body;

  const message = new Messages({
    userName,
    email,
    messageContent,
    phoneNumber,
  });
  
  message
    .save()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.editMessages = async (req, res) => {
  //   try {
  //     const { title } = req.params;
  //     await Messages.updateOne({ title }, req.body);
  //     res.send("success in updating message");
  //   } catch (error) {
  //     res.send("Error in updating" + error.message);
  //   }
};

module.exports.deleteMessages = (req, res) => {
    const { email } = req.params;
    Messages.deleteOne({ email })
      .then(() => {
        res.send("deleting done");
      })
      .catch((err) => {
        res.send("Error in delete: " + err.message);
      });
};

module.exports.getMessage = async (req, res) => {
  try {
    let messages = await Messages.find({});
    res.json(messages);
  } catch (error) {
    res.status(500).send("Server error");
  }
};
