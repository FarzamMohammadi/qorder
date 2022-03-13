const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  orders: [
    {
      order: {
        type: Schema.Types.ObjectId,
        ref: 'order',
        required: true,
      },
    },
  ],
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);
