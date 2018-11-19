const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const billSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'There must be an owner'
  },
  name: {
    type: 'String',
    required: 'The bill must have a name'
  },
  date: {
    dateType: {
      type: 'String',
      default: 'monthly',
      required: 'A date type must be supplied. (monthly/annual)'
    },
    cost: {
      type: Number,
      required: 'You must supply a cost'
    }
    // TODO: Add day/month
  }
});

module.exports = mongoose.model('Bill', billSchema);
