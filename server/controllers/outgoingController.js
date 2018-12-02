const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const Outgoing = mongoose.model('Outgoing');

exports.getOutgoings = async (req, res) => {
  const outgoings = await Outgoing.find();
  res.send(outgoings);
};

exports.addOutgoing = async (req, res) => {
  // console.log('💥 req ', req.user);
  // req.body.author = req.user._id;
  await (new Outgoing(req.body)).save();
  res.send(`${req.body.name} created`);
};

exports.deleteOutgoing = async (req, res) => {
  await Outgoing.findByIdAndRemove({ _id: new ObjectID(req.body.id) });
  res.send(`deleted`);
};

exports.updateOutgoing = async (req, res) => {
  const outgoing = await Outgoing.findOneAndUpdate({ _id: req.body.id }, req.body, {
    new: true, // return new store instead of the old one
    runValidators: true
  }).exec();
  res.send(`${outgoing.name} updated`);
};
