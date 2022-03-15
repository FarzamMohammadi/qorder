const express = require('express');
const router = express.Router();
const config = require('config');
const { check, validationResult } = require('express-validator');

const MenuItem = require('../../models/MenuItem');

// @route   POST api/menu-items
// @desc    Create menu item
// @access  public
router.post('/', async (req, res) => {
  try {
    const { restaurant, name, imageUrl, price } = req.body;
    const newMenuItem = new MenuItem({
      restaurant,
      name,
      imageUrl,
      price,
    });

    const menuItem = await newMenuItem.save();
    res.json(menuItem);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/menu-items
// @desc    Get all menu items
// @access  public
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/menu-items/:menuitem_id
// @desc    Get menu item by id
// @access  public
router.get('/:menuitem_id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.menuitem_id);
    res.json(menuItem);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/menu-items/:menuitem_id
// @desc    Update existing menu item
// @access  public
router.put('/:menuitem_id', async (req, res) => {
  try {
    const { restaurant, name, imageUrl, price } = req.body;
    const updatedItem = await MenuItem.findByIdAndUpdate(
      { _id: req.params.menuitem_id },
      {
        $set: {
          restaurant,
          name,
          imageUrl,
          price,
        },
      },
      { new: true }
    );
    res.status(200).send('Menu item updated');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   Delete api/menu-items/:menuitem_id
// @desc    delete menu item
// @access  public
router.delete('/:menuitem_id', async (req, res) => {
  try {
    const menuItem = await MenuItem.findOneAndDelete({
      _id: req.params.menuitem_id,
    });
    res.status(200).send('Menu item deleted');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
