const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: 'restaurant',
    required: true,
  },
  totalOneDaySales: {
    type: Number,
    required: true
  },
  totalOneDayTip: {
    type: Number,
    required: true
  }
  dateOfSale: {
      type: Date
      required: true
  }
});

module.exports = Sale = mongoose.model('sale', SaleSchema);
