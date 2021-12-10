const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { tokenUser, loginUser } = require('../controllers/auth');

// @route  GET api/auth + /tokenUser
// @desc   Test route
router.get('/tokenUser', auth, tokenUser);

// validate login process
// @route  POST api/auth + /loginUser
// @desc   Authenticate user & get token
router.post(
  '/loginUser',
  loginUser,
);

module.exports = router;
