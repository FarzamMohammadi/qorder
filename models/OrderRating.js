const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderRatingSchema = new Schema({
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
  serviceRating: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  foodRating: {
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

module.exports = OrderRating = mongoose.model('orderRating', OrderRatingSchema);
