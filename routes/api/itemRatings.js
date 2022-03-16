const express = require('express');
const router = express.Router();

const itemRatingsController = require('../../controllers/itemRatings');

// @route   POST api/item-ratings
// @desc    Create item rating
// @access  public
router.post('/', itemRatingsController.post);

// @route   GET api/item-ratings
// @desc    Get all item ratings
// @access  public
router.get('/', itemRatingsController.get);

// @route   GET api/item-ratings/:restaurant_id
// @desc    Get all item ratings by restaurant id
// @access  public
router.get('/:restaurant_id', itemRatingsController.getByRestaurantId);

// @route   GET api/item-ratings/:restaurant_id/:menuitem_id
// @desc    Get all item ratings by restaurant id and menu item id
// @access  public
router.get(
  '/:restaurant_id/:menuitem_id',
  itemRatingsController.getByRestaurantIdAndMenuItemId
);

// @route   Delete api/item-ratings/:itemrating_id
// @desc    Delete item rating by id
// @access  public
router.delete('/:itemrating_id', itemRatingsController.deleteByItemRatingId);

module.exports = router;
