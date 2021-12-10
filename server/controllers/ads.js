const Ads = require("../models/Ads");
module.exports.createAds = (req, res) => {
  let { title, image, video, categoryName } = req.body;

  Ads.create({
    title,
    image,
    video,
    categoryName,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.editAds = (req, res) => {};

module.exports.deleteAds = (req, res) => {
  const { id } = req.params;
  Ads.destroy({
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
