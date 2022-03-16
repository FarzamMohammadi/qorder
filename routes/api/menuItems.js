const express = require('express');
const router = express.Router();
const menuItemsController = require('../../controllers/menuItems');

// @route   POST api/menu-items
// @desc    Create menu item
// @access  public
router.post('/', menuItemsController.post);

// @route   GET api/menu-items
// @desc    Get all menu items
// @access  public
router.get('/', menuItemsController.get);

// @route   GET api/menu-items/:menuitem_id
// @desc    Get menu item by id
// @access  public
router.get('/:menuitem_id', menuItemsController.getByMenuItemId);

// @route   PUT api/menu-items/:menuitem_id
// @desc    Update existing menu item
// @access  public
router.put('/:menuitem_id', menuItemsController.putByMenuItemId);

// @route   Delete api/menu-items/:menuitem_id
// @desc    delete menu item
// @access  public
router.delete('/:menuitem_id', menuItemsController.deleteByMenuItemId);

module.exports = router;
