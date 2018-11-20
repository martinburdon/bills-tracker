const mongoose = require('mongoose');
// const Bill = mongoose.model('Bill');
// const User = mongoose.model('User');
const Outgoing = mongoose.model('Outgoing');

// exports.getBills = async (req, res) => {
//   // 1. Query the database for a list of all bills
//   const billsPromise = Bill.find(); // TODO: Add skip/limit/sort
//   const bills = await billsPromise;
//   res.send(bills);
// };

exports.addOutgoing = async (req, res) => {
  await (new Outgoing({ name: 'Netflix' })).save();
  res.send('Netflix created');
};
