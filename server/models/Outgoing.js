const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const outgoingSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a name'
  }
});

module.exports = mongoose.model('Outgoing', outgoingSchema);
