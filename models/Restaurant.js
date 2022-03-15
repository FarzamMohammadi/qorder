const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
  },
  menuItems: [
    {
      menuItem: {
        type: Schema.Types.ObjectId,
        ref: 'menuItem',
        required: true,
      },
    },
  ],
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema);
