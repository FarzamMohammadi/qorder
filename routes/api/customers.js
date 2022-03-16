const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const customersController = require('../../controllers/customers');

// @route   POST api/customers
// @desc    create new cusomter
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
  customersController.post
);

// @route   PUT api/customers
// @desc    Update existing customer
// @access  public
router.put('/:customer_id', customersController.put);

// @route   GET api/customers
// @desc    Get all customers
// @access  public
router.get('/', customersController.get);

// @route   GET api/customers
// @desc    Get customer by id
// @access  public
router.get('/:customer_id', customersController.getByCustomerId);

module.exports = router;
