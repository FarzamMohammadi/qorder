const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator');

const Restaurant = require('../../models/Restaurant');

// @route   POST api/restaurants
// @desc    Create restaurant
// @access  public
router.post('/', async (req, res) => {
  try {
    const { name, isOpen, menuItems } = req.body;
    const newRestaurant = new Restaurant({
      name,
      isOpen,
      menuItems,
    });

    const restaurant = await newRestaurant.save();
    res.json(restaurant);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/restaurants
// @desc    Get all restaurants
// @access  public
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/restaurants/:restaurant_id
// @desc    Get restaurant by id
// @access  public
router.get('/:restaurant_id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurant_id);
    res.json(restaurant);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/restaurants/:restaurant_id
// @desc    Update existing menu item via id
// @access  public
router.put('/:restaurant_id', async (req, res) => {
  try {
    const { name, isOpen, menuItems } = req.body;
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      { _id: req.params.restaurant_id },
      {
        $set: {
          name,
          isOpen,
          menuItems,
        },
      },
      { new: true }
    );
    res.status(200).send('Restaurant updated');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   Delete api/restaurants/:restaurant_id
// @desc    Delete restaurant by id
// @access  public
router.delete('/:restaurant_id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findOneAndDelete({
      _id: req.params.restaurant_id,
    });
    res.status(200).send('Restaurant deleted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
