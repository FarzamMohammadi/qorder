const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator');

const Customer = require('../../models/Customer');
const Order = require('../../models/Order');

// @route   POST api/customers
// @desc    create cusomter
// @access  public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check(
      'phoneNumber',
      'Phone number must be longer than 10 numbers'
    ).isLength({
      min: 10,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, orderId } = req.body;

    try {
      let customer = await Customer.findOne({ email });
      let order = await Order.findOne({ orderId });
      if (customer) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Customer already exits' }] });
      }

      customer = new Customer({
        name,
        email,
      });
      customer.orders.push(order);

      await customer.save();
      res.json(customer);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
