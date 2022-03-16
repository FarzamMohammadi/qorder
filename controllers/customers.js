const { validationResult } = require('express-validator');

const Customer = require('../models/Customer');
const Order = require('../models/Order');

// @route   POST api/customers
// @desc    create new cusomter
// @access  public
exports.post = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phoneNumber, orders } = req.body;
  console.log(orders);
  try {
    let customer = await Customer.findOne({ email });
    if (customer) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Customer already exits' }] });
    }

    customer = new Customer({
      name,
      email,
      phoneNumber,
      orders,
    });
    await customer.save();
    res.json(customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @route   PUT api/customers
// @desc    Update existing customer
// @access  public
exports.put = async (req, res) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      { _id: req.params.customer_id },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          orders: req.body.orders,
        },
      },
      { new: true }
    );
    res.status(200).send('Customer updated');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET api/customers
// @desc    Get all customers
// @access  public
exports.get = async (req, res) => {
  try {
    const customers = await Customer.find();

    res.json(customers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

// @route   GET api/customers
// @desc    Get customer by id
// @access  public
exports.getByCustomerId = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customer_id);

    res.json(customer);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};
