const OrderRating = require('../models/OrderRating');
const Order = require('../models/Order');

// @route   POST api/order-ratings
// @desc    Create order rating
// @access  public
exports.post = async (req, res) => {
  try {
    const { order, serviceRating, foodRating } = req.body;
    const orderRecord = await Order.findById(order);
    const restaurant = orderRecord.restaurant;
    console.log(restaurant);
    const newOrderRating = new OrderRating({
      order,
      restaurant,
      serviceRating,
      foodRating,
    });

    const orderRating = await newOrderRating.save();
    res.json(orderRating);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
};

// @route   GET api/order-ratings/:restaurant_id
// @desc    Get all order ratings by restaurant id
// @access  public
exports.get = async (req, res) => {
  try {
    const orderRatings = await OrderRating.find();
    res.json(orderRatings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET api/order-ratings/:restaurant_id
// @desc    Get all order ratings by restaurant id
// @access  public
exports.getByRestaurantId = async (req, res) => {
  try {
    const orderRatings = await OrderRating.find({
      restaurant: req.params.restaurant_id,
    });
    res.json(orderRatings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   Delete api/order-ratings/:orderrating_id
// @desc    Delete order rating by id
// @access  public
exports.deleteByOrderRating = async (req, res) => {
  try {
    const orderRating = await OrderRating.findOneAndDelete({
      _id: req.params.orderrating_id,
    });
    res.status(200).send('Order rating deleted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
