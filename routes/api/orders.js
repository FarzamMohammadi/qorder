const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Order = require('../../models/Order');
const Restaurant = require('../../models/Restaurant');
const MenuItem = require('../../models/MenuItem');

// @route   post api/orders/:restaurant_id
// @desc    Create new order
// @access  public
router.post('/:restaurant_id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurant_id);
    const { tip, menuItems } = req.body;
    const newOrder = new Order({
      restaurant,
      tip,
      menuItems,
    });

    const order = await newOrder.save();
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/orders/
// @desc    Get all orders
// @access  public
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/orders/:order_id
// @desc    Get order by id
// @access  public
router.get('/:order_id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.order_id);
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/orders/:order_id
// @desc    Delete order by id
// @access  public
router.delete('/:order_id', async (req, res) => {
  try {
    const order = await Order.findOneAndDelete(req.params.order_id);
    res.status(200).send('Order deleted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/orders/:order_id
// @desc    Update existing order
// @access  public
router.put('/:order_id', async (req, res) => {
  try {
    const { tip, menuItems } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      { _id: req.params.order_id },
      {
        $set: {
          tip,
          menuItems,
        },
      },
      { new: true }
    );
    res.status(200).send('Order updated');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
