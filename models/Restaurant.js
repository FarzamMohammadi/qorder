const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
  },
  menueItems: {
    type: [{ type: Schema.Types.ObjectId, ref: 'menuItem' }],
    required: true,
  },
});

module.exports = Restaurant = mongoose.model('restaurant', RestaurantSchema);
