const express = require('express');
const router = express.Router();
const ordersController = require('../../controllers/orders');

// @route   post api/orders/:restaurant_id
// @desc    Create new order
// @access  public
router.post('/:restaurant_id', ordersController.post);

// @route   GET api/orders
// @desc    Get all orders
// @access  public
router.get('/', ordersController.get);

// @route   GET api/orders/tips/:restaurant_id
// @desc    Get order by id
// @access  public
router.get('/tips/:restaurant_id', ordersController.getTipsByRestaurantId);

// @route   GET api/orders/:order_id
// @desc    Get all tips for the past 24hrs for restaurant
// @access  public
router.get('/:order_id', ordersController.getByOrderId);

// @route   DELETE api/orders/:order_id
// @desc    Delete order by id
// @access  public
router.delete('/:order_id', ordersController.deleteByOrderId);

// @route   PUT api/orders/:order_id
// @desc    Update existing order
// @access  public
router.put('/:order_id', ordersController.putByOrderId);

module.exports = router;
