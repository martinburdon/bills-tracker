const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const outgoingSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a name'
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: 'Please enter a price',
    default: 0
  },
  type: {
    type: String,
    required: 'Please select a type',
    default: 'monthly'
  },
  slug: String
});

outgoingSchema.pre('save', async function(next) {
  this.slug = slug(this.name);

  // Find other outgoings that have a slug of name, name-1, name-2
  const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  const outgoingWithSlug = await this.constructor.find({ slug: slugRegEx });
  if (outgoingWithSlug.length) {
    this.slug = `${this.slug}-${outgoingWithSlug.length + 1}`;
  }
  next();
});

module.exports = mongoose.model('Outgoing', outgoingSchema);
