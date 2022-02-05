const express = require('express');
const router = express.Router();
const { createUser, editUser, deleteUser, getStudents, getProfile, getTeachers } = require('../controllers/users');

// @route  POST api/users + /createUser
// @desc   Register user
router.post(
  '/createUser',
  createUser,
);

// @route  PATCH api/users + /editUser
// @desc   Edit user
router.patch(
  '/editUser/:email',
  editUser,
);

// @route  GET api/users + /Students
// @desc   get all Students
router.get('/Students', getStudents);

// @route  GET api/users + /Teachers
// @desc   get all Teachers
router.get('/Teachers', getTeachers);

// @route  GET api/users + /Profile
// @desc   get user profile
router.get('/Profile/:email', getProfile);


// @route  delete api/users + /deleteUser
// @desc   Delete user
router.delete(
  '/deleteUser/:email',
  deleteUser,
);

module.exports = router;