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
        type: Schema.Types.ObjectId,
        ref: 'menuItem',
    },
  ],
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema);
