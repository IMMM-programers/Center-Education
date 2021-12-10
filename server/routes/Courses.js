const express = require('express');
const router = express.Router();
const { createCourse, editCourse, deleteCourse, teacherCourses, allCourses } = require('../controllers/courses');

// @route  POST api/courses + /createCourse
// @desc   add Course
router.post(
  '/createCourse',
  createCourse,
);

// @route  PATCH api/courses + /editCourse
// @desc   Edit Course
router.patch(
  '/editCourse/:title',
  editCourse,
);


// @route  delete api/courses + /deleteCourse
// @desc   Delete Course
router.delete(
  '/deleteCourse/:title',
  deleteCourse,
);

// @route  GET api/courses + /teacherCourses
// @desc   get all TeacherCourses
router.get('/teacherCourses/:teacherEmail', teacherCourses);

// @route  GET api/courses + /allCourses
// @desc   get all Courses
router.get('/allCourses', allCourses);

module.exports = router;