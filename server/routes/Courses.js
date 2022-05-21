const express = require('express');
const router = express.Router();
const { createCourse, editCourse, deleteCourse, teacherCourses, allCourses, addVideo, addMaterial } = require('../controllers/courses');

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

// @route  PATCH api/courses + /addVideo
// @desc   add video to a course
router.patch('/addVideo/:title', addVideo);

// @route  PATCH api/courses + /addMaterial
// @desc   add material to a course
router.patch('/addMaterial/:title', addMaterial);

module.exports = router;