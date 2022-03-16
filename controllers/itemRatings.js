const ItemRating = require('../models/ItemRating');

// @route   POST api/item-ratings
// @desc    Create item rating
// @access  public
exports.post = async (req, res) => {
  try {
    const { restaurant, menuItem, rating } = req.body;
    const newItemRating = new ItemRating({
      restaurant,
      menuItem,
      rating,
    });

    const itemRating = await newItemRating.save();
    res.json(itemRating);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
};

// @route   GET api/item-ratings
// @desc    Get all item ratings
// @access  public
exports.get = async (req, res) => {
  try {
    const itemRatings = await ItemRating.find();
    res.json(itemRatings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET api/item-ratings/:restaurant_id
// @desc    Get all item ratings by restaurant id
// @access  public
exports.getByRestaurantId = async (req, res) => {
  try {
    const itemRatings = await ItemRating.find({
      restaurant: req.params.restaurant_id,
    });
    res.json(itemRatings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET api/item-ratings/:restaurant_id/:menuitem_id
// @desc    Get all item ratings by restaurant id and menu item id
// @access  public
exports.getByRestaurantIdAndMenuItemId = async (req, res) => {
  try {
    const itemRatings = await ItemRating.find({
      restaurant: req.params.restaurant_id,
      menuItem: req.params.menuitem_id,
    });
    res.json(itemRatings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   Delete api/item-ratings/:itemrating_id
// @desc    Delete item rating by id
// @access  public
exports.deleteByItemRatingId = async (req, res) => {
  try {
    const itemRating = await ItemRating.findOneAndDelete({
      _id: req.params.itemrating_id,
    });
    res.status(200).send('Item rating deleted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
