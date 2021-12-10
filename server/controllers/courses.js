const Course = require("../models/Course");
module.exports.createCourse = (req, res) => {
  let { title, image, description, wyl, categoryName } = req.body;

  Course.create({
    title,
    image,
    description,
    wyl,
    categoryName,
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.editCourse = (req, res) => {
  
};

module.exports.deleteCourse = (req, res) => {
  const { id } = req.params;
  Course.destroy({
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
