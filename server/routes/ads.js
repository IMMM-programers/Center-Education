const express = require('express');
const router = express.Router();
const { createAds, editAds, deleteAds, allAds } = require('../controllers/ads.js');

// @route  POST api/ads + /createAds
// @desc   add Ads
router.post(
  '/createAds',
  createAds,
);

// @route  PATCH api/ads + /editAds
// @desc   Edit Ads
router.patch(
  '/editAds/:title',
  editAds,
);


// @route  delete api/ads + /deleteAds
// @desc   Delete Ads
router.delete(
  '/deleteAds/:title',
  deleteAds,
);

// @route  GET api/Ads + /allAds
// @desc   get all Ads
router.get('/allAds', allAds);


module.exports = router;