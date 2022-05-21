const express = require('express');
const router = express.Router();
const { createUser, editUser, deleteUser, getStudents, getProfile, getTeachers, addAds, deleteAds, registerCourse, unRegisterCourse } = require('../controllers/users');

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

// @route  PATCH api/users + /addAds
// @desc   Edit Ads
router.patch(
  '/addAds/:email',
  addAds,
);

// @route  delete api/users + /deleteAds
// @desc   Delete Ads
router.delete(
  '/deleteAds/:i',
  deleteAds,
);

// @route  PATCH api/users + /registerCourse
// @desc   Edit registerCourse
router.patch(
  '/registerCourse/:email',
  registerCourse,
);

// @route  PATCH api/users + /unRegisterCourse
// @desc   Edit unRegisterCourse
router.patch(
  '/unRegisterCourse/:email',
  unRegisterCourse,
);

module.exports = router;