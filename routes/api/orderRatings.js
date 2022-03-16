const express = require('express');
const router = express.Router();
const orderRatingsController = require('../../controllers/orderRatings');

// @route   POST api/order-ratings
// @desc    Create order rating
// @access  public
router.post('/', orderRatingsController.post);

// @route   GET api/order-ratings/:restaurant_id
// @desc    Get all order ratings by restaurant id
// @access  public
router.get('/', orderRatingsController.get);

// @route   GET api/order-ratings/:restaurant_id
// @desc    Get all order ratings by restaurant id
// @access  public
router.get('/:restaurant_id', orderRatingsController.getByRestaurantId);

// @route   Delete api/order-ratings/:orderrating_id
// @desc    Delete order rating by id
// @access  public
router.delete('/:orderrating_id', orderRatingsController.deleteByOrderRating);

module.exports = router;
