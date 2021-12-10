const express = require('express');
const router = express.Router();
const { createAds, editAds, deleteAds } = require('../controllers/ads.js');

// @route  POST api/ads + /createAds
// @desc   add Ads
router.post(
  '/createAds',
  createAds,
);

// @route  PATCH api/ads + /editAds
// @desc   Edit Ads
router.patch(
  '/editAds/:id',
  editAds,
);


// @route  delete api/ads + /deleteAds
// @desc   Delete Ads
router.delete(
  '/deleteAds/:id',
  deleteAds,
);

module.exports = router;