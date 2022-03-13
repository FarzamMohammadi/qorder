const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'restaurant',
    required: true,
  },
  tableGuid: {
    type: String,
  },
  orderGuid: {
    type: String,
  },
  tip: {
    type: Number,
    required: true,
  },
  menuItems: [
    {
      menueItem: {
        type: Schema.Types.ObjectId,
        ref: 'menuItem',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model('order', OrderSchema);
