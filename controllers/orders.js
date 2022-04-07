const Restaurant = require('../models/Restaurant');
const MenuItem = require('../models/MenuItem');
const Order = require('../models/Order');
// @route   post api/orders/:restaurant_id
// @desc    Create new order
// @access  public
exports.post = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurant_id);
    const { tip, totalCost, menuItems } = req.body;
    const newOrder = new Order({
      restaurant,
      tip,
      totalCost,
      menuItems,
    });

    const order = await newOrder.save();
    await order.populate('menuItems.menuItem');
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET api/orders
// @desc    Get all orders
// @access  public
exports.get = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET api/orders/tips/:restaurant_id
// @desc    get all tips for the past 24hrs for restaurant
// @access  public
exports.getTipsByRestaurantId = async (req, res) => {
  try {
    const orders = await Order.find({
      restaurant: req.params.restaurant_id,
      date: { $gt: new Date(Date.now() - 86400000) },
    });
    let tips = 0;
    for (const order of orders) {
      tips += order.tip;
    }
    res.json({ total24hr: tips });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET api/orders/:restaurantId
// @desc    get all orders via restaurant id
// @access  public
exports.getOrdersByRestaurantId = async (req, res) => {
  try {
    const orders = await Order.find({
      restaurant: req.params.restaurant_id,
    });
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET api/orders/:order_id
// @desc    Get order by id
// @access  public
exports.getByOrderId = async (req, res) => {
  try {
    const order = await Order.findById(req.params.order_id);
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   DELETE api/orders/:order_id
// @desc    Delete order by id
// @access  public
exports.deleteByOrderId = async (req, res) => {
  try {
    const order = await Order.findOneAndDelete({ _id: req.params.order_id });
    res.status(200).send('Order deleted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   PUT api/orders/:order_id
// @desc    Update existing order
// @access  public
exports.putByOrderId = async (req, res) => {
  try {
    const { tip, menuItems } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      { _id: req.params.order_id },
      {
        tip,
        menuItems,
      },
      { new: true }
    ).populate('menuItems.menuItem');
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
