const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  restaurantId: {
    type: String,
    required: true,
  },
  restaurantName: {
    type: Number,
    required: true,
  },
  isOpen: {
    type: Boolean,
  },
  orderedItems: {
    type: [{ type: Schema.Types.ObjectId, ref: 'menuItem' }],
    required: true,
  },
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema);
