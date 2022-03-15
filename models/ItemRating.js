const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemRatingSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'restaurant',
    required: true,
  },
  menuItem: {
    type: Schema.Types.ObjectId,
    ref: 'menuItem',
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ItemRating = mongoose.model('itemRating', ItemRatingSchema);
