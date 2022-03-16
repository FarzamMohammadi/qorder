const express = require('express');
const router = express.Router();
const restaurantsController = require('../../controllers/restaurants');

// @route   POST api/restaurants
// @desc    Create restaurant
// @access  public
router.post('/', restaurantsController.post);

// @route   GET api/restaurants
// @desc    Get all restaurants
// @access  public
router.get('/', restaurantsController.get);

// @route   GET api/restaurants/:restaurant_id
// @desc    Get restaurant by id
// @access  public
router.get('/:restaurant_id', restaurantsController.getByRestaurantId);

// @route   PUT api/restaurants/:restaurant_id
// @desc    Update existing menu item via id
// @access  public
router.put('/:restaurant_id', restaurantsController.putByRestaurantId);

// @route   Delete api/restaurants/:restaurant_id
// @desc    Delete restaurant by id
// @access  public
router.delete('/:restaurant_id', restaurantsController.deleteByRestaurantId);

module.exports = router;
