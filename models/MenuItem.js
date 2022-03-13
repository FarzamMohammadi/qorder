const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
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
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = MenuItem = mongoose.model('menuItem', MenuItemSchema);
