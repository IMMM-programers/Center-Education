const Course = require("../models/Course");

module.exports.createCourse = (req, res) => {
  let {
    title,
    image,
    description,
    details,
    categoryName,
    videos,
    teacherEmail,
  } = req.body;

  let course = new Course({
    title,
    image,
    description,
    details,
    categoryName,
    videos,
    teacherEmail,
  });

  course
    .save()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};

module.exports.editCourse = async (req, res) => {
  try {
    const { title } = req.params;
    await Course.updateOne({ title }, req.body);
    res.send("success in updating course");
  } catch (error) {
    res.send("Error in updating" + error.message);
  }
};

module.exports.deleteCourse = (req, res) => {
  const { title } = req.params;
  Course.deleteOne({ title })
    .then(() => {
      res.send("deleting done");
    })
    .catch((err) => {
      res.send("Error in delete: " + err.message);
    });
};

// get courses that belong to a teacher
module.exports.teacherCourses = async (req, res) => {
  try {
    const { teacherEmail } = req.params;
    let courses = await Course.find({ teacherEmail });
    res.json(courses);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports.allCourses = async (req, res) => {
  try {
    let courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    res.status(500).send("Server error");
  }
};
