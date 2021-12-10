const express = require('express');
const router = express.Router();
const { createUser, editUser, deleteUser, getStudents } = require('../controllers/users');

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


// @route  delete api/users + /deleteUser
// @desc   Delete user
router.delete(
  '/deleteUser/:email',
  deleteUser,
);

module.exports = router;