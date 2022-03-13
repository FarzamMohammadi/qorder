const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemRatingSchema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'order',
    required: true,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'restaurant',
    required: true,
  },
  menueItem: {
    type: Schema.Types.ObjectId,
    ref: 'menuItem',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = ItemRating = mongoose.model('itemRating', ItemRatingSchema);
