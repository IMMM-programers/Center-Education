const express = require('express');
const router = express.Router();
const { createCourse, editCourse, deleteCourse } = require('../controllers/courses');

// @route  POST api/courses + /createCourse
// @desc   add Course
router.post(
  '/createCourse',
  createCourse,
);

// @route  PATCH api/courses + /editCourse
// @desc   Edit Course
router.patch(
  '/editCourse/:id',
  editCourse,
);


// @route  delete api/courses + /deleteCourse
// @desc   Delete Course
router.delete(
  '/deleteCourse/:id',
  deleteCourse,
);

module.exports = router;