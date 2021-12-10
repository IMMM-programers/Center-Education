const Ads = require("../models/Ads");
module.exports.createAds = (req, res) => {
  let { title, image, video, categoryName } = req.body;
  const ad = new Ads({
    title,
    image,
    video,
    categoryName,
  });
  ad.save()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.editAds = async (req, res) => {
  try {
    const { title } = req.params;
    await Ads.updateOne({ title }, req.body);
    res.send("success in updating Ad");
  } catch (error) {
    res.send("Error in updating" + error.message);
  }
};

module.exports.deleteAds = (req, res) => {
  const { title } = req.params;
  Ads.deleteOne({ title })
    .then(() => {
      res.send("deleting done");
    })
    .catch((err) => {
      res.send("Error in delete: " + err.message);
    });
};

module.exports.allAds = async (req, res) => {
  try {
    let ads = await Ads.find({});
    res.json(ads);
  } catch (error) {
    res.status(500).send("Server error");
  }
};