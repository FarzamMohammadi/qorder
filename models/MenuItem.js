const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  itemId: {
    type: String,
    required: true,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'restaurant',
  },
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  }
  price: {
    type: Number,
    required: true,
  },
});

module.exports = MenuItem = mongoose.model('menuItem', MenuItemSchema);
