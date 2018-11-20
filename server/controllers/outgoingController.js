const mongoose = require('mongoose');
const Outgoing = mongoose.model('Outgoing');

exports.getOutgoings = async (req, res) => {
  const outgoings = await Outgoing.find();
  res.send(outgoings);
};

exports.addOutgoing = async (req, res) => {
  await (new Outgoing(req.body)).save();
  res.send(`${req.body.name} created`);
};
